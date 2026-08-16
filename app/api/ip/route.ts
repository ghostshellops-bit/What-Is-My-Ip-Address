import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// TYPES
// ============================================================
interface IpApiResponse {
  status?: string;
  country?: string;
  countryCode?: string;
  regionName?: string;
  city?: string;
  zip?: string;
  lat?: number;
  lon?: number;
  isp?: string;
  org?: string;
  as?: string;
  asname?: string;
  timezone?: string;
  mobile?: boolean;
  proxy?: boolean;
  hosting?: boolean;
  query?: string;
}

interface IpInfoResponse {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  postal?: string;
  loc?: string;
  timezone?: string;
  org?: string;
  asn?: { asn?: string };
}

interface IpqsResponse {
  vpn?: boolean;
  proxy?: boolean;
  tor?: boolean;
  fraud_score?: number;
  connection_type?: string;
  [key: string]: any;
}

interface GeoResult {
  ip: string;
  location: {
    city: string;
    region: string;
    country: string;
    countryCode: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    organization: string;
    asn: string;
  };
  security: {
    is_vpn: boolean;
    is_proxy: boolean;
    is_tor: boolean;
    fraud_score: number;
    connection_type: string;
    status: 'secure' | 'unsafe';
  };
  timestamp: string;
}

// ============================================================
// HELPERS
// ============================================================
const TIMEOUT_MS = 3000;
const USER_AGENT = 'Mozilla/5.0 (compatible; GhostShell-Bot/1.0)';

async function fetchWithTimeout(
  url: string,
  timeout: number = TIMEOUT_MS
): Promise<Response | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'application/json',
      },
    });
    return res;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error(`[fetchWithTimeout] Timeout: ${url}`);
    } else {
      console.error(`[fetchWithTimeout] Error: ${error}`);
    }
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function safeJson<T>(res: Response | null): Promise<T | null> {
  if (!res || !res.ok) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
}

// ============================================================
// MAIN HANDLER
// ============================================================
export async function GET(req: NextRequest) {
  // 1. Get IP from request
  let ip = req.headers.get('x-forwarded-for')?.split(',')[0] ||
           req.headers.get('x-real-ip') ||
           '8.8.8.8';

  // Clean IP
  ip = ip.trim();
  if (ip === '::1' || ip === '127.0.0.1' || ip === 'localhost') {
    ip = '8.8.8.8';
  }

  // Check if a specific IP was provided as a query parameter
  const searchParams = req.nextUrl.searchParams;
  const queryIp = searchParams.get('ip');
  if (queryIp && queryIp.trim()) {
    ip = queryIp.trim();
  }

  // 2. Fetch from all sources in parallel
  const IP_API_URL = process.env.IP_API_URL || 'http://ip-api.com/json';
  const IPINFO_TOKEN = process.env.IPINFO_TOKEN_1 || process.env.IPINFO_TOKEN_2;
  const IPQS_TOKEN = process.env.IPQS_TOKEN;

  const [ipApiRes, ipInfoRes, ipqsRes] = await Promise.all([
    safeJson<IpApiResponse>(
      await fetchWithTimeout(`${IP_API_URL}/${ip}?fields=status,country,countryCode,regionName,city,zip,lat,lon,isp,org,as,asname,timezone,mobile,proxy,hosting,query`)
    ),
    safeJson<IpInfoResponse>(
      IPINFO_TOKEN
        ? await fetchWithTimeout(`https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`)
        : null
    ),
    safeJson<IpqsResponse>(
      IPQS_TOKEN
        ? await fetchWithTimeout(`https://ipqualityscore.com/api/json/ip/${IPQS_TOKEN}/${ip}?strictness=1`)
        : null
    ),
  ]);

  // 3. Extract data with fallbacks
  const ipApi = ipApiRes || {};
  const ipInfo = ipInfoRes || {};
  const ipqs = ipqsRes || {};

  // 4. Build result
  const result: GeoResult = {
    ip: ip,
    location: {
      city: ipApi.city || ipInfo.city || 'Unknown',
      region: ipApi.regionName || ipInfo.region || 'Unknown',
      country: ipApi.country || ipInfo.country || 'Unknown',
      countryCode: ipInfo.country || ipApi.countryCode || 'US',
      zip: ipApi.zip || ipInfo.postal || 'Unknown',
      lat: parseFloat(ipApi.lat as any) || parseFloat(ipInfo.loc?.split(',')[0] || '0') || 0,
      lon: parseFloat(ipApi.lon as any) || parseFloat(ipInfo.loc?.split(',')[1] || '0') || 0,
      timezone: ipApi.timezone || ipInfo.timezone || 'Unknown',
      isp: ipApi.isp || ipInfo.org?.split('\n')[0] || 'Unknown',
      organization: ipApi.org || ipInfo.org || 'Unknown',
      asn: ipApi.as || ipInfo.asn?.asn || 'Unknown',
    },
    security: {
      is_vpn: ipqs.vpn || false,
      is_proxy: ipqs.proxy || false,
      is_tor: ipqs.tor || false,
      fraud_score: ipqs.fraud_score || 0,
      connection_type: ipqs.connection_type || (ipApi.mobile ? 'Mobile' : 'Broadband'),
      status: (ipqs.vpn || ipqs.proxy || ipqs.tor) ? 'unsafe' : 'secure',
    },
    timestamp: new Date().toISOString(),
  };

  // 5. Return response
  return NextResponse.json(result, {
    status: 200,
    headers: {
      'Cache-Control': 's-maxage=60, stale-while-revalidate',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
}

// ============================================================
// OPTIONS (for CORS preflight)
// ============================================================
export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}