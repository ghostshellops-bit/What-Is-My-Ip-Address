import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Globe, FileText, Server, Shield, Activity } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Website Analyzer - Analyze Website Performance & SEO',
  description: 'Analyze websites. Get metadata, headers, SEO information, security status, and performance insights.',
  keywords: 'website analyzer, website analysis, seo analyzer, website metadata, site health check',
}

export default function WebsiteAnalyzerPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WEBSITE ANALYZER</h1>
            <p className="text-gray-400 font-mono text-sm">Analyze website performance, SEO, and security</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Website Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter a website URL to analyze metadata, headers, SEO information, security status, and performance insights.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter website URL (e.g., https://google.com)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="https://google.com"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> ANALYZE
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Title</div>
                <div className="text-xs font-mono text-white truncate">Google</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Status</div>
                <div className="text-xs font-mono text-ghost-green">✅ Live</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Security</div>
                <div className="text-xs font-mono text-ghost-green">🔒 SSL</div>
              </div>
              <div className="glass-card rounded-xl p-3 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Load Time</div>
                <div className="text-xs font-mono text-white">1.2s</div>
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

        {/* Analysis Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Analysis Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Globe size={14} /> SEO</h3>
              <div className="mt-2 space-y-1 text-xs font-mono text-gray-400">
                <div>Meta Description: ✓</div>
                <div>Open Graph: ✓</div>
                <div>Structured Data: ✓</div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Server size={14} /> Performance</h3>
              <div className="mt-2 space-y-1 text-xs font-mono text-gray-400">
                <div>First Byte: 0.3s</div>
                <div>DOM Load: 1.2s</div>
                <div>Full Load: 2.1s</div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Shield size={14} /> Security</h3>
              <div className="mt-2 space-y-1 text-xs font-mono text-gray-400">
                <div>SSL Certificate: ✓</div>
                <div>HTTPS: ✓</div>
                <div>HSTS: ✓</div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Activity size={14} /> Health</h3>
              <div className="mt-2 space-y-1 text-xs font-mono text-gray-400">
                <div>Status: Online</div>
                <div>Response: 200 OK</div>
                <div>Uptime: 99.99%</div>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What does this tool analyze?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">This tool analyzes a website's metadata, headers, SEO information, security status, and performance metrics.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why is website analysis important?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Website analysis helps improve SEO, identify security issues, optimize performance, and ensure your site is healthy.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Can I analyze any website?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, you can analyze any public website. Some sites may block automated analysis, but most will work fine.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">📊 SEO Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="SEMrush - SEO Suite"
              description="Complete SEO and marketing toolkit for professionals."
              buttonText="Try SEMrush"
              link="https://www.semrush.com/"
              icon="📊"
            />
            <AffiliateOffer
              title="Ahrefs - SEO Intelligence"
              description="Powerful SEO tools and website analysis."
              buttonText="Learn More"
              link="https://ahrefs.com/"
              icon="🔍"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Website Screenshot', href: '/website-screenshot' },
              { name: 'IP Lookup', href: '/ip-lookup' },
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