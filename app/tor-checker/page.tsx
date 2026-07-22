import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, XCircle, AlertTriangle, Copy, RefreshCw, Search } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Tor Checker - Detect If You Are Using the Tor Network',
  description: 'Check if you are using the Tor network. Detect Tor exit nodes and verify your anonymity.',
  keywords: 'tor checker, tor detection, onion network, tor exit node, anonymity checker',
}

export default function TorCheckerPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">TOR CHECKER</h1>
            <p className="text-gray-400 font-mono text-sm">Check if you are using the Tor network</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🧅</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Tor Network Detection</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Detect if you are connected to the Tor network. Check if your IP is a Tor exit node.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter IP address to check for Tor..."
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="198.51.100.25"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> CHECK
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-green/30">
                <div className="text-xs text-gray-500 font-mono">Tor Status</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1">
                  <CheckCircle size={16} /> CLEAN
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Exit Node</div>
                <div className="text-sm font-mono text-white">No</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Anonymity</div>
                <div className="text-sm font-mono text-yellow-400">Standard</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Risk</div>
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

        {/* What is Tor */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is the Tor Network?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            <strong className="text-ghost-cyan">Tor</strong> (The Onion Router) is a free and open-source network that enables anonymous communication. 
            It directs internet traffic through a worldwide volunteer network of relays, concealing your location and usage from surveillance.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <div className="text-2xl mb-1">🧅</div>
              <h3 className="text-xs font-orbitron text-ghost-cyan">Onion Routing</h3>
              <p className="text-[10px] text-gray-400 font-mono">Traffic is encrypted in multiple layers</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <div className="text-2xl mb-1">🌍</div>
              <h3 className="text-xs font-orbitron text-ghost-cyan">Global Network</h3>
              <p className="text-[10px] text-gray-400 font-mono">7,000+ relays worldwide</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <div className="text-2xl mb-1">🔒</div>
              <h3 className="text-xs font-orbitron text-ghost-cyan">Anonymity</h3>
              <p className="text-[10px] text-gray-400 font-mono">No single point can identify you</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is the Tor network?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Tor is a decentralized network that anonymizes your internet traffic by routing it through multiple volunteer-operated servers.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Is Tor legal?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, using Tor is legal in most countries. It is used by journalists, activists, and privacy-conscious users worldwide.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">How is Tor different from a VPN?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Tor anonymizes traffic by routing through multiple nodes, offering stronger anonymity but slower speeds. VPNs are faster but rely on a single provider.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🛡️ Privacy Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Tor Browser - Free Anonymity"
              description="The official Tor Browser for anonymous browsing."
              buttonText="Download"
              link="https://www.torproject.org/"
              icon="🧅"
            />
            <AffiliateOffer
              title="NordVPN - For When Tor is Too Slow"
              description="Fast, secure VPN for everyday privacy protection."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'VPN Checker', href: '/vpn-checker' },
              { name: 'Proxy Checker', href: '/proxy-checker' },
              { name: 'DNS Leak Test', href: '/dns-leak-test' },
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