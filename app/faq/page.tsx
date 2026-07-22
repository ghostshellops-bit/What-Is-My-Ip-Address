import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export const metadata = {
  title: 'FAQ - What Is My IP',
  description: 'Frequently asked questions about IP addresses, networking, VPNs, and our tools.',
}

const faqs = [
  {
    q: 'What is my IP address?',
    a: 'Your IP address is a unique identifier assigned to your device when you connect to the internet. It allows websites and services to send data to you. You can find your public IP address on our homepage.',
  },
  {
    q: 'Does my IP reveal my exact location?',
    a: 'No. Your IP address reveals your approximate location (city/region) but not your exact address. The accuracy depends on your ISP and your IP type (static/dynamic).',
  },
  {
    q: 'Can someone track me using my IP?',
    a: 'Your IP can give a general idea of your location and ISP, but it does not personally identify you. However, ISPs and websites can log your activity. Using a VPN can help protect your privacy.',
  },
  {
    q: 'How do I hide my IP address?',
    a: 'You can hide your IP by using a VPN (Virtual Private Network), a proxy server, or the Tor network. Each offers different levels of privacy and anonymity.',
  },
  {
    q: 'What is the difference between IPv4 and IPv6?',
    a: 'IPv4 is the older 32-bit address format (e.g., 192.168.1.1). IPv6 is the newer 128-bit format designed to solve the address shortage and improve security. IPv6 is gradually replacing IPv4.',
  },
  {
    q: 'Is my IP address public?',
    a: 'Yes, your public IP is visible to websites and services you interact with. Your private IP (e.g., 192.168.x.x) is only used within your local network.',
  },
  {
    q: 'What is a VPN and why use it?',
    a: 'A VPN encrypts your internet traffic and routes it through a server in another location, masking your real IP and protecting your data from hackers and surveillance.',
  },
  {
    q: 'What is a DNS leak?',
    a: 'A DNS leak occurs when your DNS requests are sent outside the encrypted VPN tunnel, exposing your browsing activity to your ISP. Our DNS Leak Test can help you detect this.',
  },
  {
    q: 'What is ASN?',
    a: 'An Autonomous System Number (ASN) identifies a network operator (like an ISP or large organization) on the internet. Our ASN Lookup tool can show you network details.',
  },
  {
    q: 'How accurate is the IP location?',
    a: 'IP location accuracy varies. It can be as accurate as city-level (approx 99% for major providers) but may not be precise beyond that due to how ISPs allocate IPs.',
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">FAQ</h1>
            <p className="text-gray-400 font-mono text-sm">Frequently asked questions</p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl p-5 border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
              <h3 className="text-base font-orbitron text-ghost-cyan flex items-start gap-2">
                <ChevronDown size={18} className="mt-1 flex-shrink-0" />
                {faq.q}
              </h3>
              <p className="text-gray-300 font-mono text-sm mt-2 pl-7">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/learn">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Learning Center <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/contact">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Contact Us <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>
      </div>
    </main>
  )
}