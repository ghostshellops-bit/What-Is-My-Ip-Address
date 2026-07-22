import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://whatismyip.com'
  
  const pages = [
    '',
    '/ip-lookup',
    '/bulk-ip-lookup',
    '/ip-location',
    '/ipv4-checker',
    '/ipv6-checker',
    '/public-ip',
    '/ip-history',
    '/vpn-checker',
    '/proxy-checker',
    '/tor-checker',
    '/dns-leak-test',
    '/webrtc-leak-test',
    '/ip-reputation',
    '/ip-abuse-check',
    '/blacklist-checker',
    '/asn-lookup',
    '/whois-lookup',
    '/reverse-dns',
    '/hostname-checker',
    '/isp-lookup',
    '/cidr-calculator',
    '/bgp-information',
    '/website-screenshot',
    '/website-analyzer',
    '/email-checker',
    '/email-reputation',
    '/phone-validator',
    '/phone-intelligence',
    '/company-lookup',
    '/timezone',
    '/world-clock',
    '/exchange-rate',
    '/speed-test',
    '/learn',
    '/developers',
    '/admin',
    '/about',
    '/contact',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: page === '' ? 1.0 : 0.8,
  }))
}