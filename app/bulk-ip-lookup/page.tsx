import type { Metadata } from 'next';
import { BulkLookupClient } from '../components/BulkLookupClient';

export const metadata: Metadata = {
  title: 'Bulk IP Lookup - Check Multiple IP Addresses at Once',
  description: 'Paste up to 10 IPs and scan them simultaneously for location, ISP, and fraud score.',
  keywords: 'bulk ip lookup, multiple ip check, ip batch lookup, check many ips',
};

export default function Page() {
  return <BulkLookupClient />;
}