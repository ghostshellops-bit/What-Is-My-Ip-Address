import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Copy, RefreshCw, CheckCircle, Info } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'IPv6 Checker - Check Your IPv6 Address Instantly',
  description: 'Check your IPv6 address instantly. Get detailed information about your IPv6 connection, location, and network status.',
  keywords: 'ipv6 checker, check ipv6, ipv6 address, my ipv6, ipv6 test',
}

export default function IPv6CheckerPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IPv6 CHECKER</h1>
            <p className="text-gray-400 font-mono text-sm">Check your IPv6 address instantly</p>
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
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">IPv6 Address Checker</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Find your IPv6 address and check if your connection supports IPv6.
            </p>

            {/* IPv6 Display */}
            <div className="mt-6 glass-card rounded-xl p-6 border-ghost-cyan/30 max-w-2xl mx-auto">
              <div className="text-xs text-gray-500 font-mono tracking-widest">YOUR IPv6 ADDRESS</div>
              <div className="text-lg md:text-2xl font-mono font-bold text-ghost-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.2)] break-all">
                2001:0db8:85a3:0000:0000:8a2e:0370:7334
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

            {/* IPv6 Information */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Status</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1"><CheckCircle size={14} /> Active</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Type</div>
                <div className="text-sm font-mono text-white">Global Unicast</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">ISP</div>
                <div className="text-sm font-mono text-white truncate">Google LLC</div>
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

        {/* What is IPv6 */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is IPv6?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            <strong className="text-ghost-cyan">IPv6</strong> (Internet Protocol version 6) is the latest version of the Internet Protocol. 
            It uses a 128-bit address format (e.g., 2001:0db8:85a3::8a2e:0370:7334) and provides approximately 340 undecillion addresses — enough for every device on Earth many times over.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Address Format</div>
              <div className="text-xs font-mono text-ghost-cyan">128-bit</div>
            </div>
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Total Addresses</div>
              <div className="text-xs font-mono text-white">340 Undecillion</div>
            </div>
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Status</div>
              <div className="text-xs font-mono text-ghost-green">Adoption Growing</div>
            </div>
            <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
              <div className="text-xs text-gray-500 font-mono">Security</div>
              <div className="text-xs font-mono text-ghost-cyan">Built-in IPsec</div>
            </div>
          </div>

          <div className="mt-4 glass-card rounded-xl p-4 border-yellow-500/20 bg-yellow-500/5">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-gray-400 font-mono">
                <strong className="text-yellow-400">Note:</strong> Not all networks support IPv6 yet. 
                If you don't see an IPv6 address, your ISP may not have enabled IPv6 on your connection.
              </div>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is my IPv6 address?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your IPv6 address is the unique identifier assigned to your device on networks that support IPv6. Use our tool above to find yours.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why don't I have an IPv6 address?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Some ISPs have not yet enabled IPv6. If you don't see an IPv6 address, your ISP likely doesn't support it yet.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Should I use IPv6 or IPv4?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Modern networks support both. IPv6 offers more addresses and better security, but IPv4 is still widely used for compatibility.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🚀 Upgrade Your Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="IPv6-Ready Routers"
              description="Upgrade to a modern router that supports IPv6 and faster speeds."
              buttonText="Shop Now"
              link="https://www.amazon.com/s?k=ipv6+router"
              icon="📡"
            />
            <AffiliateOffer
              title="Cloudflare 1.1.1.1 - IPv6 DNS"
              description="Fast, private DNS with full IPv6 support."
              buttonText="Learn More"
              link="https://1.1.1.1/"
              icon="🌐"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IPv4 Checker', href: '/ipv4-checker' },
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