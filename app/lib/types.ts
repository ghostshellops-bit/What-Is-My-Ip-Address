export interface IPResult {
  ip: {
    v4: string | null;
    v6: string | null;
  };
  location: {
    city: string;
    region: string;
    country: string;
    countryCode: string;
    isp: string;
    organization: string;
    timezone: string;
    lat: number | null;
    lon: number | null;
  };
  security: {
    is_vpn: boolean;
    is_proxy: boolean;
    is_tor: boolean;
    fraud_score: number | null;
    connection_type: string;
    status: 'secure' | 'unsafe' | 'unknown';
  };
}

export interface ScanHistoryItem {
  id: string;
  ip: string;
  city: string;
  country: string;
  countryCode: string;
  time: string;
}