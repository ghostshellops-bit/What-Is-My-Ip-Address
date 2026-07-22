import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Copy, RefreshCw, Globe, Shield, CheckCircle } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Public IP - Find Your Public IP Address Instantly',
  description: 'Find your public IP address instantly. Get your IPv4 and IPv6 addresses, location, and ISP information.',
  keywords: 'public ip, find my public ip, public ip address, check public ip',
}

export default function PublicIPPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">PUBLIC IP</h1>
            <p className="text-gray-400 font-mono text-sm">Find your public IP address instantly</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🌐</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Find Your Public IP Address</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Your public IP address is the address the internet sees when you connect to websites and services.
            </p>

            {/* Public IP Display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-6 border-ghost-cyan/30">
                <div className="text-xs text-gray-500 font-mono tracking-widest">IPv4</div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-ghost-cyan">
                  198.51.100.25
                </div>
                <button className="mt-2 flex items-center gap-2 text-xs bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-3 py-1 rounded-full border border-ghost-cyan/30 transition-all mx-auto">
                  <Copy size={12} /> COPY
                </button>
              </div>
              <div className="glass-card rounded-xl p-6 border-ghost-cyan/30">
                <div className="text-xs text-gray-500 font-mono tracking-widest">IPv6</div>
                <div className="text-base md:text-lg font-mono font-bold text-ghost-cyan break-all">
                  2001:0db8:85a3::8a2e:0370:7334
                </div>
                <button className="mt-2 flex items-center gap-2 text-xs bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-3 py-1 rounded-full border border-ghost-cyan/30 transition-all mx-auto">
                  <Copy size={12} /> COPY
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 text-sm bg-gray-800/50 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700 transition-all">
                <RefreshCw size={14} /> RESCAN
              </button>
            </div>

            {/* Public IP Info */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">ISP</div>
                <div className="text-sm font-mono text-white truncate">Cloudflare Inc.</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Location</div>
                <div className="text-sm font-mono text-white">🇺🇸 United States</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">ASN</div>
                <div className="text-sm font-mono text-ghost-cyan">AS13335</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Status</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1"><CheckCircle size={14} /> Public</div>
              </div>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* What is Public IP */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is a Public IP Address?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            A <strong className="text-ghost-cyan">public IP address</strong> is the unique identifier assigned to your network by your Internet Service Provider (ISP). 
            It is the address that websites, services, and the rest of the internet use to communicate with your device.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan">🌍 Public vs Private</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your public IP is visible to the internet. Your private IP (192.168.x.x) is only visible within your home network.</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan">🔄 Dynamic vs Static</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Most ISPs assign dynamic public IPs that change periodically. Static IPs are permanent but usually cost extra.</p>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* FAQ */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is my public IP address?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your public IP is the address assigned by your ISP that the internet uses to identify your network. Use our tool above to find yours.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Can I hide my public IP?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, you can hide your public IP using a VPN, proxy server, or the Tor network. This masks your real IP from websites.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why does my public IP change?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Most ISPs use dynamic IP allocation, which means your public IP can change when you restart your router or after a certain period.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🔒 Hide Your Public IP</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Hide Your IP with ExpressVPN"
              description="Mask your public IP and encrypt your internet traffic."
              buttonText="Get ExpressVPN"
              link="https://www.expressvpn.com/refer/YOUR_REF"
              icon="🛡️"
            />
            <AffiliateOffer
              title="NordVPN - Best for Privacy"
              description="Protect your public IP with military-grade encryption."
              buttonText="Claim Offer"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🔒"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IPv4 Checker', href: '/ipv4-checker' },
              { name: 'IPv6 Checker', href: '/ipv6-checker' },
              { name: 'IP Lookup', href: '/ip-lookup' },
              { name: 'IP Location', href: '/ip-location' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href}>
                <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
                  {tool.name} <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Ghost Shell Footer */}
        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>

      </div>
    </main>
  )
}