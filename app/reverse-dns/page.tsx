import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Server, Globe, Database } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Reverse DNS Lookup - Find Hostname by IP Address',
  description: 'Perform reverse DNS lookup. Get hostname and domain information for any IP address.',
  keywords: 'reverse dns, reverse lookup, hostname lookup, ptr record, dns lookup',
}

export default function ReverseDNSPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">REVERSE DNS</h1>
            <p className="text-gray-400 font-mono text-sm">Find hostname by IP address</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🔄</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Reverse DNS Lookup</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter an IP address to find its associated hostname and domain information. Reverse DNS maps IP addresses back to domain names.
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
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/30 col-span-1 md:col-span-3">
                <div className="text-xs text-gray-500 font-mono">Hostname</div>
                <div className="text-lg font-mono text-ghost-cyan font-bold">dns.google</div>
                <div className="text-xs text-gray-500 font-mono mt-1">PTR Record: 8.8.8.8.in-addr.arpa</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">IP Address</div>
                <div className="text-sm font-mono text-white">8.8.8.8</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Domain</div>
                <div className="text-sm font-mono text-white">google</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Status</div>
                <div className="text-sm font-mono text-ghost-green">✅ Valid</div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 text-sm bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-4 py-2 rounded-full border border-ghost-cyan/30 transition-all">
                <Copy size={14} /> COPY HOSTNAME
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

        {/* What is Reverse DNS */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is Reverse DNS?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            <strong className="text-ghost-cyan">Reverse DNS</strong> (rDNS) is the process of resolving an IP address back to a domain name. 
            While forward DNS maps domain names to IP addresses, reverse DNS does the opposite. It is commonly used for email verification, network troubleshooting, and security investigations.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Server size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">PTR Records</h3>
              <p className="text-[10px] text-gray-400 font-mono">Used for reverse lookups</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Globe size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Email Verification</h3>
              <p className="text-[10px] text-gray-400 font-mono">Helps prevent spam</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Database size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Network Analysis</h3>
              <p className="text-[10px] text-gray-400 font-mono">Identifies network owners</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is reverse DNS?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Reverse DNS resolves an IP address back to a hostname or domain name. It's the opposite of forward DNS.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why is reverse DNS important?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Reverse DNS is used for email spam filtering, server identification, network troubleshooting, and security investigations.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I set up reverse DNS?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Reverse DNS is managed by your ISP or hosting provider. You typically need to request a PTR record for your IP address from them.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🌐 DNS Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Cloudflare - DNS Management"
              description="Fast, secure DNS management with global CDN."
              buttonText="Learn More"
              link="https://www.cloudflare.com/"
              icon="🌐"
            />
            <AffiliateOffer
              title="DNS Checker - DNS Lookup Tool"
              description="Check DNS propagation and record information."
              buttonText="Try Now"
              link="https://dnschecker.org/"
              icon="🔍"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'WHOIS Lookup', href: '/whois-lookup' },
              { name: 'Hostname Checker', href: '/hostname-checker' },
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