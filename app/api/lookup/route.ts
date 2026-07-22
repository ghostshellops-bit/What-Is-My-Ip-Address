import { NextRequest, NextResponse } from 'next/server';

const TIMEOUT_MS = 5000;

function fetchWithTimeout(url: string, options: any = {}, timeout = TIMEOUT_MS) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout)),
  ]);
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  let ip = searchParams.get('ip') || '8.8.8.8';

  const IPINFO_TOKEN = process.env.IPINFO_TOKEN_1;
  const IPQS_TOKEN = process.env.IPQS_TOKEN;
  const IP_API_URL = process.env.IP_API_URL || 'http://ip-api.com/json';

  const safeFetch = async (url: string, fallback: any = {}) => {
    try {
      const res: any = await fetchWithTimeout(url);
      if (!res.ok) throw new Error('API Error');
      return await res.json();
    } catch (e) {
      console.error('Fetch failed:', url, e);
      return fallback;
    }
  };

  const [ipApi, ipInfo, ipqs] = await Promise.all([
    safeFetch(`${IP_API_URL}/${ip}?fields=status,country,regionName,city,zip,lat,lon,isp,org,as,asname,timezone,mobile,proxy,hosting,query`),
    safeFetch(`https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`),
    safeFetch(`https://ipqualityscore.com/api/json/ip/${IPQS_TOKEN}/${ip}?strictness=1&allow_public_access_points=true`),
  ]);

  const result = {
    ip: ip,
    location: {
      city: ipApi.city || ipInfo.city || 'Unknown',
      region: ipApi.regionName || ipInfo.region || 'Unknown',
      country: ipApi.country || ipInfo.country || 'Unknown',
      countryCode: ipInfo.country || ipApi.countryCode || 'US',
      zip: ipApi.zip || ipInfo.postal || 'Unknown',
      lat: ipApi.lat || ipInfo.loc?.split(',')[0] || 0,
      lon: ipApi.lon || ipInfo.loc?.split(',')[1] || 0,
      timezone: ipApi.timezone || ipInfo.timezone || 'Unknown',
      isp: ipApi.isp || ipInfo.org || 'Unknown',
      organization: ipApi.org || ipInfo.org || 'Unknown',
      asn: ipApi.as || ipInfo.asn?.asn || 'Unknown',
      asn_name: ipApi.asname || ipInfo.asn?.name || 'Unknown',
    },
    security: {
      is_vpn: ipqs.vpn || false,
      is_proxy: ipqs.proxy || false,
      is_tor: ipqs.tor || false,
      fraud_score: ipqs.fraud_score || 0,
      connection_type: ipqs.connection_type || (ipApi.mobile ? 'Mobile' : 'Broadband'),
      status: ipqs.vpn || ipqs.proxy || ipqs.tor ? 'unsafe' : 'secure',
    },
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(result, { status: 200 });
}