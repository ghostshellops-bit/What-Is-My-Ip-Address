import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Phone, Shield, CheckCircle, AlertTriangle, Globe, User } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Phone Intelligence - Get Detailed Phone Number Analysis',
  description: 'Get phone intelligence. Lookup carrier, country, line type, risk information, and more.',
  keywords: 'phone intelligence, phone number lookup, carrier lookup, phone risk, phone analysis',
}

export default function PhoneIntelligencePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">PHONE INTELLIGENCE</h1>
            <p className="text-gray-400 font-mono text-sm">Get detailed phone number analysis</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">📱</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Phone Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter a phone number to get comprehensive intelligence including carrier, country, line type, risk score, and more.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter phone number (e.g., +1 234 567 8900)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="+1 234 567 8900"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> ANALYZE
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/30">
                <div className="text-xs text-gray-500 font-mono">Country</div>
                <div className="text-sm font-mono text-ghost-cyan">🇺🇸 United States</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Carrier</div>
                <div className="text-sm font-mono text-white">AT&T</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Line Type</div>
                <div className="text-sm font-mono text-white">Mobile</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Risk Score</div>
                <div className="text-sm font-mono text-ghost-green">Low</div>
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

        {/* Intelligence Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Phone Intelligence Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Globe size={14} /> Location</h3>
              <p className="text-sm font-mono text-white mt-1">United States</p>
              <p className="text-xs text-gray-400 font-mono">Country Code: +1</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Phone size={14} /> Carrier</h3>
              <p className="text-sm font-mono text-white mt-1">AT&T Mobility</p>
              <p className="text-xs text-gray-400 font-mono">Network Type: GSM</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><User size={14} /> Line Information</h3>
              <p className="text-sm font-mono text-white mt-1">Mobile Line</p>
              <p className="text-xs text-gray-400 font-mono">Type: Postpaid</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Shield size={14} /> Risk Assessment</h3>
              <p className="text-sm font-mono text-ghost-green mt-1">Low Risk</p>
              <p className="text-xs text-gray-400 font-mono">Clean reputation</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is phone intelligence?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Phone intelligence provides detailed analysis of phone numbers including carrier, country, line type, and risk assessment.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How can I use phone intelligence?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Phone intelligence is useful for verifying customer contact information, detecting fraud, and understanding your audience's phone usage.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Is phone intelligence accurate?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Our tool uses up-to-date international phone databases for accurate carrier and country information.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">📱 Phone Intelligence APIs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Twilio Lookup API"
              description="Powerful phone number intelligence API from Twilio."
              buttonText="Learn More"
              link="https://www.twilio.com/lookup"
              icon="📱"
            />
            <AffiliateOffer
              title="AbstractAPI - Phone Validation"
              description="Simple and accurate phone number validation API."
              buttonText="Try AbstractAPI"
              link="https://www.abstractapi.com/phone-validation-api"
              icon="🔍"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Phone Validator', href: '/phone-validator' },
              { name: 'Email Reputation', href: '/email-reputation' },
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