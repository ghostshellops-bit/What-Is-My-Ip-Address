import type { Metadata } from 'next';
import { SpeedTestClient } from '../components/SpeedTestClient';

export const metadata: Metadata = {
  title: 'Speed Test - What Is My IP',
  description: 'Test your internet connection speed. Check download, upload, and ping latency.',
};

export default function Page() {
  return <SpeedTestClient />;
}