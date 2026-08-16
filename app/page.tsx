import { HomeClient } from './components/HomeClient';
import FAQSchema from './components/FAQSchema';

export const metadata = {
  title: 'What Is My IP Address? - Check IPv4, IPv6, Location & Security',
  description: 'What is my IP? Find your public IPv4 & IPv6 instantly. Free IP lookup shows location, ISP, ASN, fraud score, and VPN status.',
};

export default function Page() {
  return (
    <>
      <FAQSchema />
      <HomeClient />
    </>
  );
}