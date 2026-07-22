import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Calculator, Network, Globe, Hash } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'CIDR Calculator - Calculate IP Ranges and Subnet Masks',
  description: 'Calculate CIDR ranges. Get network, subnet mask, and IP range information for any CIDR notation.',
  keywords: 'cidr calculator, subnet calculator, ip range, network calculator, cidr notation',
}

export default function CIDRCalculatorPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">CIDR CALCULATOR</h1>
            <p className="text-gray-400 font-mono text-sm">Calculate CIDR ranges and subnet masks</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🧮</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">CIDR Calculator</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter a CIDR notation (e.g., 192.168.1.0/24) to calculate network details, subnet masks, and IP ranges.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter CIDR (e.g., 192.168.1.0/24)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="192.168.1.0/24"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Calculator size={16} /> CALCULATE
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Network</div>
                <div className="text-sm font-mono text-ghost-cyan">192.168.1.0</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Subnet Mask</div>
                <div className="text-sm font-mono text-white">255.255.255.0</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">IP Range</div>
                <div className="text-sm font-mono text-white">192.168.1.1 - 192.168.1.254</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Total IPs</div>
                <div className="text-sm font-mono text-white">256</div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 text-sm bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-4 py-2 rounded-full border border-ghost-cyan/30 transition-all">
                <Copy size={14} /> COPY RESULTS
              </button>
              <button className="flex items-center gap-2 text-sm bg-gray-800/50 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700 transition-all">
                <RefreshCw size={14} /> RESCAN
              </button>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* CIDR Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">CIDR Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Hash size={14} /> Prefix</h3>
              <p className="text-sm font-mono text-white mt-1">/24</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Network size={14} /> Subnet</h3>
              <p className="text-sm font-mono text-white mt-1">255.255.255.0</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Globe size={14} /> Broadcast</h3>
              <p className="text-sm font-mono text-white mt-1">192.168.1.255</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Calculator size={14} /> Usable IPs</h3>
              <p className="text-sm font-mono text-white mt-1">254</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is CIDR notation?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">CIDR (Classless Inter-Domain Routing) notation is a compact way to represent IP address ranges, e.g., 192.168.1.0/24 where /24 represents the subnet mask.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I calculate CIDR ranges?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Use our CIDR calculator above. Enter a CIDR notation and the tool will calculate the network, subnet mask, IP range, and total hosts.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is a subnet mask?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">A subnet mask separates the network and host portions of an IP address. It determines which IP addresses belong to the same network.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🔧 Network Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Advanced IP Scanner"
              description="Professional IP scanning and network management tool."
              buttonText="Download"
              link="https://www.advanced-ip-scanner.com/"
              icon="🔧"
            />
            <AffiliateOffer
              title="Cisco Networking Academy"
              description="Learn networking and CIDR with Cisco training."
              buttonText="Learn More"
              link="https://www.netacad.com/"
              icon="📚"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'ASN Lookup', href: '/asn-lookup' },
              { name: 'BGP Information', href: '/bgp-information' },
              { name: 'ISP Lookup', href: '/isp-lookup' },
              { name: 'IP Lookup', href: '/ip-lookup' },
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