import { HomeClient } from './components/HomeClient';

export const metadata = {
  title: 'What Is My IP Address? - Check IPv4, IPv6, Location & Security',
  description:
    'What is my IP address? Check your public IPv4 & IPv6 instantly. Get location, ISP, ASN, fraud score, VPN detection, proxy checker, DNS leak test, and network intelligence – all in one powerful cybersecurity platform.',
};

export default function Page() {
  return <HomeClient />;
}