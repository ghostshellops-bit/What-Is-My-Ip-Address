import type { Metadata } from 'next';
import { DNSLeakClient } from '../components/DNSLeakClient';

export const metadata: Metadata = {
  title: 'DNS Leak Test - Check Your DNS Privacy',
  description: 'Test for DNS leaks and protect your privacy.',
};

export default function Page() {
  return <DNSLeakClient />;
}