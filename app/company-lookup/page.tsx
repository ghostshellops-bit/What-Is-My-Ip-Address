import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Building, Globe, Users, Briefcase, MapPin, Mail } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Company Lookup - Find Company Information & Intelligence',
  description: 'Lookup company information. Get company intelligence, organization details, and business data.',
  keywords: 'company lookup, company intelligence, business information, organization details, company finder',
}

export default function CompanyLookupPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">COMPANY LOOKUP</h1>
            <p className="text-gray-400 font-mono text-sm">Find company information and intelligence</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🏢</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Company Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter a company name or domain to get detailed company information, business intelligence, and organization details.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter company name or domain (e.g., Google or google.com)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="Google"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> LOOKUP
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/30">
                <div className="text-xs text-gray-500 font-mono">Company</div>
                <div className="text-sm font-mono text-ghost-cyan font-bold">Google LLC</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Industry</div>
                <div className="text-sm font-mono text-white">Technology</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Founded</div>
                <div className="text-sm font-mono text-white">1998</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Employees</div>
                <div className="text-sm font-mono text-white">190,000+</div>
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

        {/* Company Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Company Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Building size={14} /> Business Info</h3>
              <p className="text-sm font-mono text-white mt-1">Google LLC</p>
              <p className="text-xs text-gray-400 font-mono">Alphabet Inc. subsidiary</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><MapPin size={14} /> Location</h3>
              <p className="text-sm font-mono text-white mt-1">Mountain View, CA</p>
              <p className="text-xs text-gray-400 font-mono">1600 Amphitheatre Parkway</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Globe size={14} /> Domain</h3>
              <p className="text-sm font-mono text-white mt-1">google.com</p>
              <p className="text-xs text-gray-400 font-mono">Founded: September 4, 1998</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Users size={14} /> Team</h3>
              <p className="text-sm font-mono text-white mt-1">190,000+ employees</p>
              <p className="text-xs text-gray-400 font-mono">CEO: Sundar Pichai</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is company lookup?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Company lookup provides detailed information about businesses including location, industry, founding date, and size.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How can I use company intelligence?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Company intelligence helps with B2B research, competitor analysis, and understanding business opportunities.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Is the company data accurate?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">We use trusted business databases and publicly available information to provide the most accurate company data possible.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">📊 Business Intelligence Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="LinkedIn - Company Research"
              description="Research companies and connect with professionals."
              buttonText="Visit LinkedIn"
              link="https://www.linkedin.com/"
              icon="📊"
            />
            <AffiliateOffer
              title="Crunchbase - Business Data"
              description="Discover company information and funding data."
              buttonText="Learn More"
              link="https://www.crunchbase.com/"
              icon="📈"
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