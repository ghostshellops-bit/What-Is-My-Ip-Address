'use client';

import { useEffect } from 'react';

export default function FAQSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is my IP address?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your IP address is a unique identifier assigned to your device when you connect to the internet. You can find your public IP address instantly using our free IP lookup tool.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check my IP address?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Simply visit our homepage and your public IPv4 and IPv6 addresses are displayed immediately. No signup required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does my IP address reveal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your IP address reveals your approximate location (city/region), your Internet Service Provider (ISP), and your connection type. It does not reveal your exact street address or personal identity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can someone track me using my IP address?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your IP address can give a general idea of your location, but it does not reveal your identity. Websites and services can log your IP, but tracking your exact identity requires additional information from your ISP.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I hide my IP address?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can hide your IP address by using a VPN (Virtual Private Network), a proxy server, or the Tor network. Each offers different levels of privacy and anonymity.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between IPv4 and IPv6?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IPv4 is the older 32-bit address format (e.g., 192.168.1.1). IPv6 is the newer 128-bit format designed to solve the address shortage and improve security. Our tool checks both for you.',
          },
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}