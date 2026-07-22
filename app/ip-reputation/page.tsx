import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, XCircle, AlertTriangle, Copy, RefreshCw, Search, Star } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'IP Reputation Check - Analyze IP Address Reputation',
  description: 'Check IP reputation. Analyze IP address reputation and threat intelligence for any IP address.',
  keywords: 'ip reputation, ip reputation check, threat intelligence, ip risk score, ip blacklist',
}

export default function IPReputationPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IP REPUTATION</h1>
            <p className="text-gray-400 font-mono text-sm">Check IP address reputation</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">⭐</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">IP Reputation Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Analyze the reputation of any IP address. Get risk scores, threat intelligence, and blacklist status.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter IP address to check reputation..."
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
                <div className="text-xs text-gray-500 font-mono">Reputation</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1">
                  <CheckCircle size={16} /> GOOD
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Risk Score</div>
                <div className="text-sm font-mono text-ghost-green">0/100 (Low)</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Blacklist</div>
                <div className="text-sm font-mono text-ghost-green">Clean</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Threat Level</div>
                <div className="text-sm font-mono text-ghost-green">None</div>
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

        {/* Reputation Factors */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What Factors Affect IP Reputation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-sm font-orbitron text-ghost-cyan">🔴 Abuse Reports</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">IPs with abuse reports have lower reputation</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-sm font-orbitron text-ghost-cyan">🔴 Blacklist Status</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Blacklisted IPs are considered high risk</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-sm font-orbitron text-ghost-cyan">🔴 Connection Type</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Datacenter IPs often have lower reputation</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is IP reputation?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">IP reputation is a measure of how trustworthy an IP address is based on factors like abuse reports, blacklist status, and connection type.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why is my IP reputation important?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your IP reputation affects how websites and services treat you. A poor reputation can result in being blocked or flagged as suspicious.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Can I improve my IP reputation?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, by avoiding suspicious activity, reporting false positives, and using legitimate services. Using a VPN can also temporarily improve your reputation.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🛡️ Protect Your IP Reputation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="NordVPN - Keep Your IP Clean"
              description="Hide your IP and protect your reputation with a trusted VPN."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
            <AffiliateOffer
              title="Threat Intelligence Solutions"
              description="Professional threat intelligence for your business."
              buttonText="Learn More"
              link="https://www.virustotal.com/"
              icon="🔍"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IP Abuse Check', href: '/ip-abuse-check' },
              { name: 'Blacklist Checker', href: '/blacklist-checker' },
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