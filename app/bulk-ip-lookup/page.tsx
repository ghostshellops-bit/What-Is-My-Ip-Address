import type { Metadata } from 'next';
import { BulkLookupClient } from '../components/BulkLookupClient';

export const metadata: Metadata = {
  title: 'Bulk IP Lookup - Check Multiple IP Addresses at Once',
  description: 'What is my IP address? Bulk lookup up to 10 IPs at once. Get location, ISP, ASN, and fraud scores instantly for your network diagnostics.',
  keywords: 'bulk ip lookup, multiple ip check, ip batch lookup, check many ips, what is my ip',
};

export default function Page() {
  return <BulkLookupClient />;
}