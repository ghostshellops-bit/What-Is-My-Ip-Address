import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, FileText, User, Calendar, Globe, Mail, Phone } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'WHOIS Lookup - Get Domain & IP Ownership Information',
  description: 'Get WHOIS information and domain details. Lookup domain registration, ownership, and IP allocation information.',
  keywords: 'whois lookup, whois, domain lookup, ip ownership, domain registration',
}

export default function WHOISLookupPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WHOIS LOOKUP</h1>
            <p className="text-gray-400 font-mono text-sm">Get domain and IP ownership information</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">WHOIS Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter a domain name or IP address to get WHOIS information including registrant, registrar, creation date, expiry date, and more.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter domain or IP (e.g., google.com or 8.8.8.8)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="google.com"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> LOOKUP
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Domain</div>
                <div className="text-sm font-mono text-ghost-cyan">google.com</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Registrar</div>
                <div className="text-sm font-mono text-white truncate">MarkMonitor Inc.</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Created</div>
                <div className="text-sm font-mono text-white">1997-09-15</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Expires</div>
                <div className="text-sm font-mono text-white">2028-09-13</div>
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

        {/* WHOIS Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">WHOIS Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><User size={14} /> Registrant</h3>
              <p className="text-sm font-mono text-white mt-1">Google LLC</p>
              <p className="text-xs text-gray-400 font-mono">1600 Amphitheatre Parkway, Mountain View, CA</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Mail size={14} /> Contact</h3>
              <p className="text-sm font-mono text-white mt-1">dns-admin@google.com</p>
              <p className="text-xs text-gray-400 font-mono">+1.6502530000</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Calendar size={14} /> Dates</h3>
              <p className="text-sm font-mono text-white mt-1">Created: 1997-09-15</p>
              <p className="text-xs text-gray-400 font-mono">Expires: 2028-09-13</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Globe size={14} /> Nameservers</h3>
              <p className="text-sm font-mono text-white mt-1">ns1.google.com</p>
              <p className="text-xs text-gray-400 font-mono">ns2.google.com, ns3.google.com, ns4.google.com</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is WHOIS?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">WHOIS is a protocol used to query databases that store information about domain names, IP address blocks, and autonomous system numbers.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why is WHOIS information important?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">WHOIS information helps identify domain owners, contact abuse teams, verify domain legitimacy, and investigate cybersecurity incidents.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Is WHOIS information public?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, WHOIS information is public by default. However, GDPR has led to privacy protection services that hide personal information in some cases.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🔍 Domain Intelligence Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Namecheap WHOIS - Domain Registration"
              title="Register your domain with privacy protection."
              buttonText="Search Domains"
              link="https://www.namecheap.com/"
              icon="🌐"
            />
            <AffiliateOffer
              title="WhoisXML API - Professional WHOIS Data"
              description="Comprehensive WHOIS data and domain intelligence."
              buttonText="Learn More"
              link="https://www.whoisxmlapi.com/"
              icon="📊"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'ASN Lookup', href: '/asn-lookup' },
              { name: 'ISP Lookup', href: '/isp-lookup' },
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