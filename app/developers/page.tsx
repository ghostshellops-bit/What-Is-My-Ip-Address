import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, Terminal, Database, Shield, Zap, BookOpen, Users, Key, CheckCircle, Copy } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Developers - API Documentation & Tools',
  description: 'Developer API for IP intelligence, security analysis, and network information. Free and paid tiers available.',
  keywords: 'developer api, ip api, api documentation, rest api, ip intelligence api',
}

export default function DevelopersPage() {
  const features = [
    { icon: <Code2 size={18} />, title: 'REST API', desc: 'Simple HTTP API for IP intelligence', status: 'Available' },
    { icon: <Terminal size={18} />, title: 'cURL Examples', desc: 'Quick start with cURL commands', status: 'Available' },
    { icon: <Database size={18} />, title: 'JSON Responses', desc: 'Clean, structured JSON data', status: 'Available' },
    { icon: <Shield size={18} />, title: 'Security Intelligence', desc: 'VPN, proxy, and fraud detection', status: 'Available' },
    { icon: <Zap size={18} />, title: 'Fast Lookups', desc: 'Sub-second response times', status: 'Available' },
    { icon: <Key size={18} />, title: 'API Key Management', desc: 'Generate and manage your keys', status: 'Coming Soon' },
  ]

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">DEVELOPER HUB</h1>
            <p className="text-gray-400 font-mono text-sm">Build with our IP intelligence API</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* API Overview */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 mb-8">
          <div className="flex items-start gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">IP Intelligence API</h2>
              <p className="text-gray-400 font-mono text-sm">
                Our API provides real-time IP intelligence including location, ISP, ASN, VPN detection, 
                proxy detection, fraud scoring, and more. Integrate with your applications in minutes.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="glass-card rounded-full px-3 py-1 border-ghost-cyan/10 text-xs font-mono text-ghost-cyan">Free Tier: 1,000 req/mo</span>
                <span className="glass-card rounded-full px-3 py-1 border-ghost-cyan/10 text-xs font-mono text-ghost-cyan">Pro: 10,000 req/mo</span>
                <span className="glass-card rounded-full px-3 py-1 border-ghost-cyan/10 text-xs font-mono text-ghost-cyan">Enterprise: Unlimited</span>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 bg-ghost-dark/50">
              <div className="text-xs text-gray-500 font-mono">Quick API Call</div>
              <code className="text-xs font-mono text-ghost-cyan block mt-1 break-all">
                curl -X GET https://api.whatismyip.com/v1/ip/8.8.8.8
              </code>
              <button className="mt-2 text-xs text-gray-400 hover:text-ghost-cyan transition-colors flex items-center gap-1">
                <Copy size={12} /> Copy
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card rounded-xl p-5 border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
              <div className="flex items-center gap-2 text-ghost-cyan mb-1">
                {feature.icon} <span className="text-sm font-orbitron">{feature.title}</span>
              </div>
              <p className="text-xs text-gray-400 font-mono">{feature.desc}</p>
              <div className={`mt-2 text-[10px] font-mono ${feature.status === 'Available' ? 'text-ghost-green' : 'text-yellow-400'}`}>
                {feature.status === 'Available' ? '✅' : '⏳'} {feature.status}
              </div>
            </div>
          ))}
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* Documentation Preview */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 mb-8">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">📖 Quick Start Guide</h2>
          
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-sm font-orbitron text-ghost-cyan">1. Get Your API Key</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Sign up and get your free API key from the admin dashboard.</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-sm font-orbitron text-ghost-cyan">2. Make Your First Request</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Use cURL, JavaScript, or Python to make your first API call.</p>
              <div className="mt-2 bg-ghost-dark/50 rounded-lg p-3 border border-ghost-cyan/10">
                <code className="text-xs font-mono text-ghost-cyan">
                  curl -X GET https://api.whatismyip.com/v1/ip/8.8.8.8?key=YOUR_API_KEY
                </code>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-sm font-orbitron text-ghost-cyan">3. Integrate Into Your App</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Use the JSON response to enrich your applications with IP intelligence.</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">Is the API free?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">We offer a free tier with 1,000 requests per month. Paid tiers are available for higher volume.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">What data does the API provide?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">The API provides IP location, ISP, ASN, VPN detection, proxy detection, fraud scoring, timezone, and more.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I get started?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Sign up, get your API key from the admin dashboard, and start making requests. Full documentation is coming soon.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🔧 Developer Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Postman - API Development"
              description="Test and debug APIs with the world's leading API platform."
              buttonText="Download"
              link="https://www.postman.com/"
              icon="🔧"
            />
            <AffiliateOffer
              title="GitHub - Version Control"
              description="Host your code and collaborate with developers."
              buttonText="Learn More"
              link="https://github.com/"
              icon="📦"
            />
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