import type { Metadata } from 'next';
import ASNLookupClient from './ASNLookupClient';

export const metadata: Metadata = {
  title: 'ASN Lookup - Find Autonomous System Number Information',
  description: 'What is my IP address? Lookup ASN information for any IP. Find the network owner, organization, and registry details instantly.',
  keywords: 'asn lookup, autonomous system number, bgp, network information, asn search, what is my ip',
};

export default function Page() {
  return <ASNLookupClient />;
}