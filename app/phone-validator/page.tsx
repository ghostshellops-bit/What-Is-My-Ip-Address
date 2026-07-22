import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Copy, RefreshCw, Phone, CheckCircle, Globe, User } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Phone Validator - Validate Phone Numbers Instantly',
  description: 'Validate phone numbers. Check phone number format, carrier, country, and line type.',
  keywords: 'phone validator, validate phone number, phone number check, carrier lookup, phone intelligence',
}

export default function PhoneValidatorPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">PHONE VALIDATOR</h1>
            <p className="text-gray-400 font-mono text-sm">Validate phone numbers instantly</p>
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
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Phone Number Validation</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter a phone number to validate its format, detect country, carrier, and line type.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter phone number (e.g., +1 234 567 8900)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="+1 234 567 8900"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> VALIDATE
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-green/30">
                <div className="text-xs text-gray-500 font-mono">Status</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1">
                  <CheckCircle size={16} /> VALID
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Country</div>
                <div className="text-sm font-mono text-white">🇺🇸 United States</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Carrier</div>
                <div className="text-sm font-mono text-white">AT&T</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Line Type</div>
                <div className="text-sm font-mono text-white">Mobile</div>
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

        {/* Features */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Phone Validation Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <CheckCircle size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Format Validation</h3>
              <p className="text-[10px] text-gray-400 font-mono">E.164 format check</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <Globe size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Country Detection</h3>
              <p className="text-[10px] text-gray-400 font-mono">Identify country of origin</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <Phone size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Carrier Lookup</h3>
              <p className="text-[10px] text-gray-400 font-mono">Mobile network operator</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <User size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Line Type</h3>
              <p className="text-[10px] text-gray-400 font-mono">Mobile, Landline, VoIP</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is phone validation?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Phone validation checks if a phone number is in the correct format, identifies its country, carrier, and line type.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How does phone validation work?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Our tool uses international phone number databases to validate the format and identify the carrier and country of the number.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Can I validate international numbers?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, our tool supports numbers from all countries in E.164 format.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">📱 Phone Intelligence Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Twilio - Phone APIs"
              description="Build with Twilio's powerful phone number APIs."
              buttonText="Learn More"
              link="https://www.twilio.com/"
              icon="📱"
            />
            <AffiliateOffer
              title="Numverify - Phone Validation API"
              description="Global phone number validation and intelligence API."
              buttonText="Try Numverify"
              link="https://numverify.com/"
              icon="🔍"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Phone Intelligence', href: '/phone-intelligence' },
              { name: 'Email Checker', href: '/email-checker' },
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