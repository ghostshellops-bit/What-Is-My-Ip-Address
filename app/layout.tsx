import type { Metadata } from 'next';
import 'leaflet/dist/leaflet.css';
import { Orbitron, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import { ToastProvider } from './components/Toast';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'http://localhost:3000';
}

export function generateMetadata(): Metadata {
  const baseUrl = getBaseUrl();
  return {
    metadataBase: new URL(baseUrl),
    title: 'What Is My IP Address? - Check IPv4, IPv6, Location & Security',
    description: 'What is my IP? Find your public IPv4 & IPv6 instantly. Free IP lookup shows location, ISP, ASN, fraud score, and VPN status.',
    keywords: 'what is my ip, ip address, check ip, ip location, vpn checker, proxy checker, dns leak test',
    openGraph: {
      title: 'What Is My IP Address? - Check IPv4, IPv6, Location & Security',
      description: 'Check your public IP address, location, ISP, ASN, fraud score, VPN status, and more.',
      type: 'website',
      siteName: 'What Is My IP',
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'What Is My IP - Cybersecurity Intelligence Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'What Is My IP Address? - Check IPv4, IPv6, Location & Security',
      description: 'Check your public IP address, location, ISP, ASN, fraud score, VPN status, and more.',
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WD6G7V39CM"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WD6G7V39CM');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-ghost-dark text-white">
        <ToastProvider>
          <MatrixBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}