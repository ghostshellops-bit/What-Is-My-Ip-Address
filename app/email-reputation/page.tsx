import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Mail, Shield, CheckCircle, AlertTriangle, Star } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Email Reputation Check - Analyze Email Risk Score',
  description: 'Check email reputation. Verify email risk, spam score, and domain intelligence.',
  keywords: 'email reputation, email risk score, email intelligence, domain reputation, email security',
}

export default function EmailReputationPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">EMAIL REPUTATION</h1>
            <p className="text-gray-400 font-mono text-sm">Check email reputation and risk score</p>
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
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Email Reputation Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter an email address to analyze its reputation, risk score, spam likelihood, and domain intelligence.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter email address"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="security@google.com"
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
                <div className="text-sm font-mono text-ghost-green">5/100</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Spam Likely</div>
                <div className="text-sm font-mono text-ghost-green">Low</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Domain Trust</div>
                <div className="text-sm font-mono text-ghost-green">High</div>
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
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What Affects Email Reputation?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <Shield size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Domain Age</h3>
              <p className="text-[10px] text-gray-400 font-mono">Older domains are trusted</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <Mail size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Engagement</h3>
              <p className="text-[10px] text-gray-400 font-mono">Active users have good reputation</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <AlertTriangle size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Spam Reports</h3>
              <p className="text-[10px] text-gray-400 font-mono">High reports = poor reputation</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <Star size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Domain Trust</h3>
              <p className="text-[10px] text-gray-400 font-mono">Based on domain history</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is email reputation?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Email reputation is a score that indicates how trustworthy an email address or domain is, based on factors like spam reports, engagement, and domain age.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why does email reputation matter?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Email reputation affects deliverability. Poor reputation emails may go to spam folders or be blocked entirely.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">How can I improve my email reputation?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Maintain good engagement, avoid spam complaints, use authentication (SPF, DKIM, DMARC), and monitor your reputation regularly.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">📊 Email Intelligence Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Mailgun - Email APIs"
              description="Powerful email delivery and validation APIs."
              buttonText="Learn More"
              link="https://www.mailgun.com/"
              icon="📧"
            />
            <AffiliateOffer
              title="SendGrid - Email Delivery"
              description="Reliable email delivery and reputation monitoring."
              buttonText="Try SendGrid"
              link="https://sendgrid.com/"
              icon="📨"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Email Checker', href: '/email-checker' },
              { name: 'Phone Intelligence', href: '/phone-intelligence' },
              { name: 'IP Reputation', href: '/ip-reputation' },
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