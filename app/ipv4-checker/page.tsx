import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Copy, RefreshCw, CheckCircle, XCircle } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'IPv4 Checker - Check Your IPv4 Address Instantly',
  description: 'Check your IPv4 address instantly. Get detailed information about your IPv4 connection including location, ISP, and security status.',
  keywords: 'ipv4 checker, check ipv4, ipv4 address, my ipv4',
}

export default function IPv4CheckerPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IPv4 CHECKER</h1>
            <p className="text-gray-400 font-mono text-sm">Check your IPv4 address instantly</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">📡</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">IPv4 Address Checker</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Find your IPv4 address, location, ISP, and security status instantly.
            </p>

            {/* IPv4 Display */}
            <div className="mt-6 glass-card rounded-xl p-6 border-ghost-cyan/30 max-w-2xl mx-auto">
              <div className="text-xs text-gray-500 font-mono tracking-widest">YOUR IPv4 ADDRESS</div>
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-ghost-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                198.51.100.25
              </div>
              <div className="flex justify-center gap-3 mt-3 flex-wrap">
                <button className="flex items-center gap-2 text-sm bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-4 py-2 rounded-full border border-ghost-cyan/30 transition-all">
                  <Copy size={16} /> COPY IP
                </button>
                <button className="flex items-center gap-2 text-sm bg-gray-800/50 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700 transition-all">
                  <RefreshCw size={16} /> RESCAN
                </button>
              </div>
            </div>

            {/* IPv4 Information */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Status</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1"><CheckCircle size={14} /> Active</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Type</div>
                <div className="text-sm font-mono text-white">Public</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">ISP</div>
                <div className="text-sm font-mono text-white truncate">Cloudflare Inc.</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Location</div>
                <div className="text-sm font-mono text-white">🇺🇸 US</div>
              </div>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* What is IPv4 */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is IPv4?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            <strong className="text-ghost-cyan">IPv4</strong> (Internet Protocol version 4) is the fourth version of the Internet Protocol. 
            It uses a 32-bit address format (e.g., 192.168.1.1) and is the most widely used IP addressing system on the internet. 
            With approximately 4.3 billion unique addresses, IPv4 is nearly exhausted, leading to the adoption of IPv6.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Address Format</div>
              <div className="text-xs font-mono text-ghost-cyan">32-bit</div>
            </div>
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Total Addresses</div>
              <div className="text-xs font-mono text-white">4.3 Billion</div>
            </div>
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Status</div>
              <div className="text-xs font-mono text-yellow-400">Nearly Exhausted</div>
            </div>
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Replacement</div>
              <div className="text-xs font-mono text-ghost-cyan">IPv6</div>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is my IPv4 address?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your IPv4 address is the unique identifier assigned to your device on the internet. Use our tool above to find yours.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is the difference between IPv4 and IPv6?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">IPv4 uses 32-bit addresses (4.3 billion total), while IPv6 uses 128-bit addresses (340 undecillion total). IPv6 is the newer standard designed to solve address exhaustion.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why is IPv4 still used?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Despite the shortage, IPv4 is still widely used because of NAT (Network Address Translation) which allows multiple devices to share a single public IP.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🔐 Secure Your Connection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Protect Your IPv4 with NordVPN"
              description="Hide your IP address and encrypt your internet traffic with a leading VPN."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
            <AffiliateOffer
              title="Surfshark - Unlimited Devices"
              description="Secure all your devices with one VPN subscription."
              buttonText="Claim Offer"
              link="https://surfshark.com/"
              icon="🔒"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IPv6 Checker', href: '/ipv6-checker' },
              { name: 'Public IP', href: '/public-ip' },
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