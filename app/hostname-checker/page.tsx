import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Server, Globe, CheckCircle } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Hostname Checker - Lookup Hostname Information',
  description: 'Check hostname information. Get hostname, domain, and reverse DNS data for any IP address.',
  keywords: 'hostname checker, hostname lookup, domain name, reverse dns, ptr record',
}

export default function HostnameCheckerPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">HOSTNAME CHECKER</h1>
            <p className="text-gray-400 font-mono text-sm">Lookup hostname information</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🏷️</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Hostname Lookup</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter an IP address to find its associated hostname and domain information.
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
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1"><CheckCircle size={14} /> Valid</div>
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

        {/* What is Hostname */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is a Hostname?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            A <strong className="text-ghost-cyan">hostname</strong> is a human-readable label assigned to a device on a network. 
            It is used to identify the device and is often resolved to an IP address through DNS. Hostnames are essential for networking, email, and web services.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Server size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Device Identification</h3>
              <p className="text-[10px] text-gray-400 font-mono">Identifies devices on networks</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <Globe size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">DNS Resolution</h3>
              <p className="text-[10px] text-gray-400 font-mono">Maps to IP addresses</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <CheckCircle size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Network Management</h3>
              <p className="text-[10px] text-gray-400 font-mono">Simplifies network administration</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is a hostname?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">A hostname is a human-readable name assigned to a device on a network, often used to identify servers and services.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I find my hostname?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Use our hostname checker tool above. Enter your IP address and the tool will show your hostname information.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why is my hostname not resolving?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">This could be due to missing PTR records, DNS misconfiguration, or your ISP not setting up reverse DNS for your IP address.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🌐 DNS Management Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Cloudflare DNS - Free & Fast"
              description="Enterprise-grade DNS management with built-in security."
              buttonText="Learn More"
              link="https://www.cloudflare.com/"
              icon="🌐"
            />
            <AffiliateOffer
              title="Namecheap - Domain Registration"
              description="Register your domain with free DNS management."
              buttonText="Search Domains"
              link="https://www.namecheap.com/"
              icon="🏷️"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Reverse DNS', href: '/reverse-dns' },
              { name: 'WHOIS Lookup', href: '/whois-lookup' },
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