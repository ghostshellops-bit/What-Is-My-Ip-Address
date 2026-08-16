import type { Metadata } from 'next';
import { SpeedTestClient } from '../components/SpeedTestClient';

export const metadata: Metadata = {
  title: 'Speed Test - Check Your Internet Speed Instantly',
  description: 'What is my IP address? Test your internet speed, ping, download, and upload with our free tool. Find out if your connection is fast and secure.',
  keywords: 'speed test, internet speed test, ping test, download speed, upload speed, what is my ip',
};

export default function Page() {
  return <SpeedTestClient />;
}