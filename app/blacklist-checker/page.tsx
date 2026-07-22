import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, XCircle, AlertTriangle, Copy, RefreshCw, Search, List } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Blacklist Checker - Check if Your IP is Blacklisted',
  description: 'Check if an IP address is blacklisted. Verify blacklist status across multiple security databases.',
  keywords: 'blacklist checker, ip blacklist, blacklist check, spam database, ip reputation',
}

export default function BlacklistCheckerPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">BLACKLIST CHECKER</h1>
            <p className="text-gray-400 font-mono text-sm">Check if an IP address is blacklisted</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">📛</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Blacklist Checker</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Check if an IP address appears on any security blacklists. Verify blacklist status across multiple databases.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter IP address to check blacklist..."
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="8.8.8.8"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> CHECK
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-green/30">
                <div className="text-xs text-gray-500 font-mono">Blacklist Status</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1">
                  <CheckCircle size={16} /> CLEAN
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Spam Databases</div>
                <div className="text-sm font-mono text-ghost-green">0/50</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Risk</div>
                <div className="text-sm font-mono text-ghost-green">None</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Last Check</div>
                <div className="text-sm font-mono text-gray-400">Just now</div>
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

        {/* Common Blacklists */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Common Blacklists We Check</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Spamhaus', 'SpamCop', 'Barracuda', 'SURBL', 'URIBL', 'Invaluement', 'SpamRats', 'DNSBL', 'SORBS'].map((list) => (
              <div key={list} className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
                <div className="text-xs font-mono text-gray-300">{list}</div>
                <div className="text-[10px] text-ghost-green font-mono">✅ Clean</div>
              </div>
            ))}
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What does it mean to be blacklisted?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Being blacklisted means your IP address has been flagged by one or more security databases for suspicious or malicious activity.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I get removed from a blacklist?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Each blacklist has its own removal process. You typically need to submit a request explaining why your IP should be removed and stop any suspicious activity.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why was my IP blacklisted?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">IPs can be blacklisted for various reasons including sending spam, hosting malware, or being part of a botnet. Sometimes it's due to previous users of the IP address.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🛡️ Protect Your IP from Blacklists</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="NordVPN - Keep Your IP Clean"
              description="Hide your IP and avoid being blacklisted with a trusted VPN."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
            <AffiliateOffer
              title="SendGrid - Professional Email"
              description="Protect your business email from blacklist issues."
              buttonText="Learn More"
              link="https://sendgrid.com/"
              icon="📧"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IP Reputation', href: '/ip-reputation' },
              { name: 'IP Abuse Check', href: '/ip-abuse-check' },
              { name: 'WHOIS Lookup', href: '/whois-lookup' },
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