import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Wifi, Building, Globe, Users } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'ISP Lookup - Find Internet Service Provider Information',
  description: 'Lookup ISP information. Get Internet Service Provider details, organization, and network intelligence for any IP address.',
  keywords: 'isp lookup, internet service provider, isp search, find isp, network provider',
}

export default function ISPLookupPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">ISP LOOKUP</h1>
            <p className="text-gray-400 font-mono text-sm">Find Internet Service Provider information</p>
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
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">ISP Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter any IP address to find its Internet Service Provider (ISP), organization, carrier, and network information.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter IP address (e.g., 8.8.8.8)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="8.8.8.8"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> LOOKUP
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/30">
                <div className="text-xs text-gray-500 font-mono">ISP</div>
                <div className="text-sm font-mono text-ghost-cyan font-bold truncate">Google LLC</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Organization</div>
                <div className="text-sm font-mono text-white truncate">Google Public DNS</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">ASN</div>
                <div className="text-sm font-mono text-white">AS15169</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Type</div>
                <div className="text-sm font-mono text-white">Public DNS</div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 text-sm bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-4 py-2 rounded-full border border-ghost-cyan/30 transition-all">
                <Copy size={14} /> COPY ISP
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

        {/* ISP Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">ISP Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Building size={14} /> Provider</h3>
              <p className="text-sm font-mono text-white mt-1">Google LLC</p>
              <p className="text-xs text-gray-400 font-mono">Global Internet Services</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Globe size={14} /> Network</h3>
              <p className="text-sm font-mono text-white mt-1">AS15169</p>
              <p className="text-xs text-gray-400 font-mono">Global Network</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Users size={14} /> Customer</h3>
              <p className="text-sm font-mono text-white mt-1">Public</p>
              <p className="text-xs text-gray-400 font-mono">Open to all</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Wifi size={14} /> Connection</h3>
              <p className="text-sm font-mono text-white mt-1">Residential</p>
              <p className="text-xs text-gray-400 font-mono">Public DNS Service</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is an ISP?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">An ISP (Internet Service Provider) is a company that provides internet access to customers. Our tool helps you identify the ISP for any IP address.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I find my ISP?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Use our ISP lookup tool above. Enter your IP address and the tool will show your ISP information.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Can I change my ISP?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, you can change your ISP by subscribing to a different provider. However, using a VPN can also mask your ISP information.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🌐 Find the Best ISP</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Compare Internet Providers"
              description="Find the best internet providers in your area."
              buttonText="Compare Now"
              link="https://www.highspeedinternet.com/"
              icon="🌐"
            />
            <AffiliateOffer
              title="NordVPN - Hide Your ISP"
              description="Mask your ISP and protect your privacy with a VPN."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'ASN Lookup', href: '/asn-lookup' },
              { name: 'WHOIS Lookup', href: '/whois-lookup' },
              { name: 'Reverse DNS', href: '/reverse-dns' },
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