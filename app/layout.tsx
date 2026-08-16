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

// ============================================
// AUTO-DETECT DOMAIN FUNCTION
// ============================================
function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'http://localhost:3000';
}

// ============================================
// DATA WITH AUTO-DETECTED URL
// ============================================
export function generateMetadata(): Metadata {
  const baseUrl = getBaseUrl();

  return {
    metadataBase: new URL(baseUrl),
    title: 'What Is My IP Address? - Check IPv4, IPv6, Location & Security | What Is My IP',
    description:
      'What is my IP address? Check your public IPv4 & IPv6 instantly. Get location, ISP, ASN, fraud score, VPN detection, proxy checker, DNS leak test, and network intelligence – all in one powerful cybersecurity platform.',
    keywords:
      'what is my ip, ip address, check ip, ip location, vpn checker, proxy checker, dns leak test, cybersecurity, network tools, ip lookup, asn lookup, whois lookup',
    authors: [{ name: 'Ghost Shell Networks' }],
    creator: 'Ghost Shell Networks',
    publisher: 'Ghost Shell Networks',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: 'What Is My IP Address? - Check IPv4, IPv6, Location & Security',
      description:
        'Check your public IP address, location, ISP, ASN, fraud score, VPN status, and more – all in one powerful cybersecurity platform.',
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
      description:
        'Check your public IP address, location, ISP, ASN, fraud score, VPN status, and more.',
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: baseUrl,
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
        <link rel="preconnect" href="https://api.ip-api.com" />
        <link rel="preconnect" href="https://ipinfo.io" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://api.ip-api.com" />
        <link rel="dns-prefetch" href="https://ipinfo.io" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

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

        <Script
          id="adsterra-native"
          strategy="lazyOnload"
          src="https://pl30498079.effectivecpmnetwork.com/995d18c4798c9af8de26491554ce1723/invoke.js"
          async
          data-cfasync="false"
        />

        <Script
          id="adsterra-728x90"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '9a5e2cd62beda5f7492f2418aefb7cf9',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `,
          }}
        />
        <Script
          id="adsterra-300x250"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '6037271c62b96f350c930908c8b302ed',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
              };
            `,
          }}
        />
        <Script
          id="adsterra-160x300"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '974582bc3515ea1a7284415a414c69ec',
                'format' : 'iframe',
                'height' : 300,
                'width' : 160,
                'params' : {}
              };
            `,
          }}
        />
        <Script
          id="adsterra-banner-invoke"
          strategy="lazyOnload"
          src="https://www.highperformanceformat.com/9a5e2cd62beda5f7492f2418aefb7cf9/invoke.js"
        />
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