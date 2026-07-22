import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Network, Globe, Database, Server } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'BGP Information - Border Gateway Protocol Intelligence',
  description: 'Get BGP network information. Lookup BGP routing, ASN, and network intelligence for any IP address.',
  keywords: 'bgp information, bgp lookup, border gateway protocol, bgp routing, bgp network',
}

export default function BGPInformationPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">BGP INFORMATION</h1>
            <p className="text-gray-400 font-mono text-sm">Get Border Gateway Protocol intelligence</p>
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
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">BGP Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter an IP address or ASN to get BGP routing information, including peers, prefixes, and network intelligence.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter IP or ASN (e.g., 8.8.8.8 or AS15169)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="AS15169"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> LOOKUP
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/30">
                <div className="text-xs text-gray-500 font-mono">ASN</div>
                <div className="text-sm font-mono text-ghost-cyan font-bold">AS15169</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Organization</div>
                <div className="text-sm font-mono text-white truncate">Google LLC</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Prefixes</div>
                <div className="text-sm font-mono text-white">1,582</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Peers</div>
                <div className="text-sm font-mono text-white">~4,500</div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 text-sm bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-4 py-2 rounded-full border border-ghost-cyan/30 transition-all">
                <Copy size={14} /> COPY ASN
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

        {/* BGP Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">BGP Routing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Network size={14} /> Routing Table</h3>
              <p className="text-sm font-mono text-white mt-1">Active: 1,582 prefixes</p>
              <p className="text-xs text-gray-400 font-mono">IPv4: 1,200 / IPv6: 382</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Server size={14} /> Peers</h3>
              <p className="text-sm font-mono text-white mt-1">~4,500 BGP peers</p>
              <p className="text-xs text-gray-400 font-mono">Tier 1 & Tier 2 providers</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Globe size={14} /> Location</h3>
              <p className="text-sm font-mono text-white mt-1">Global Network</p>
              <p className="text-xs text-gray-400 font-mono">Multiple PoPs worldwide</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Database size={14} /> Registry</h3>
              <p className="text-sm font-mono text-white mt-1">ARIN</p>
              <p className="text-xs text-gray-400 font-mono">Allocation: 2000</p>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* What is BGP */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is BGP?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            <strong className="text-ghost-cyan">BGP</strong> (Border Gateway Protocol) is the protocol that powers the internet's routing system. 
            It allows autonomous systems (ASNs) to exchange routing information and determine the best paths for data across the internet.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Network size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Routing</h3>
              <p className="text-[10px] text-gray-400 font-mono">Finds the best path for data</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Globe size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Global Scale</h3>
              <p className="text-[10px] text-gray-400 font-mono">Powers the entire internet</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Server size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Peering</h3>
              <p className="text-[10px] text-gray-400 font-mono">Connects networks worldwide</p>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* FAQ */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is BGP?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">BGP (Border Gateway Protocol) is the protocol that routes data across the internet between autonomous systems.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why is BGP important?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">BGP is essential for internet connectivity. It ensures data takes the most efficient paths between networks and handles failovers when routes go down.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is a BGP peer?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">A BGP peer is another network that exchanges routing information with yours. Peers can be Tier 1 providers, ISPs, or other large organizations.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🌐 Network Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Cisco BGP Training"
              description="Master BGP with Cisco's professional certification program."
              buttonText="Learn More"
              link="https://www.netacad.com/"
              icon="📚"
            />
            <AffiliateOffer
              title="BGP Toolkit by Hurricane Electric"
              description="Free BGP tools and network intelligence."
              buttonText="Visit"
              link="https://bgp.he.net/"
              icon="🔧"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'ASN Lookup', href: '/asn-lookup' },
              { name: 'CIDR Calculator', href: '/cidr-calculator' },
              { name: 'ISP Lookup', href: '/isp-lookup' },
              { name: 'WHOIS Lookup', href: '/whois-lookup' },
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