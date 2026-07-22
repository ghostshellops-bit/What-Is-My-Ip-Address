import { NextRequest, NextResponse } from 'next/server';

const TIMEOUT_MS = 3000;
const CACHE_TIME = 60; // seconds

function fetchWithTimeout(url: string, timeout = TIMEOUT_MS) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout)),
  ]);
}

export async function GET(req: NextRequest) {
  let ip = req.headers.get('x-forwarded-for')?.split(',')[0] ||
           req.headers.get('x-real-ip') ||
           '8.8.8.8';

  if (ip === '::1' || ip === '127.0.0.1' || ip === 'localhost') {
    ip = '8.8.8.8';
  }

  const IPINFO_TOKEN = process.env.IPINFO_TOKEN_1;
  const IPQS_TOKEN = process.env.IPQS_TOKEN;
  const IP_API_URL = process.env.IP_API_URL || 'http://ip-api.com/json';

  // ✅ Only call ip-api.com (fastest)
  // Fallback to ipinfo if needed
  let ipApi = {};
  let ipInfo = {};
  let ipqs = {};

  try {
    const res = await fetchWithTimeout(`${IP_API_URL}/${ip}?fields=status,country,regionName,city,zip,lat,lon,isp,org,as,asname,timezone,mobile,proxy,hosting,query`);
    if (res && typeof res === 'object' && 'json' in res) {
      ipApi = await (res as any).json();
    }
  } catch (e) { console.error('ip-api failed:', e); }

  // Try ipinfo as fallback
  if (!ipApi || !ipApi.city) {
    try {
      const res = await fetchWithTimeout(`https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`);
      if (res && typeof res === 'object' && 'json' in res) {
        ipInfo = await (res as any).json();
      }
    } catch (e) { console.error('ipinfo failed:', e); }
  }

  // Try IPQS for security data
  try {
    const res = await fetchWithTimeout(`https://ipqualityscore.com/api/json/ip/${IPQS_TOKEN}/${ip}?strictness=1`);
    if (res && typeof res === 'object' && 'json' in res) {
      ipqs = await (res as any).json();
    }
  } catch (e) { console.error('IPQS failed:', e); }

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

  // ✅ Cache response for 60 seconds
  return NextResponse.json(result, {
    status: 200,
    headers: {
      'Cache-Control': `s-maxage=${CACHE_TIME}, stale-while-revalidate`,
    },
  });
}