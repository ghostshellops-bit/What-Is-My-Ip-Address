import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, XCircle, AlertTriangle, Copy, RefreshCw, Video } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'WebRTC Leak Test - Check Your Browser Privacy',
  description: 'Test for WebRTC leaks. Check if your real IP is exposed through WebRTC in your browser.',
  keywords: 'webrtc leak test, browser privacy, webrtc ip leak, web browser privacy',
}

export default function WebRTCLeakTestPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WEBRTC LEAK TEST</h1>
            <p className="text-gray-400 font-mono text-sm">Check if your real IP is exposed through WebRTC</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">📹</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">WebRTC Leak Detection</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              WebRTC can expose your real IP address even when using a VPN or proxy. Test your browser for WebRTC leaks.
            </p>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-8 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2 text-lg">
                <Video size={20} /> START WEBRTC TEST
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-green/30">
                <div className="text-xs text-gray-500 font-mono">WebRTC Status</div>
                <div className="text-sm font-mono text-ghost-green flex items-center gap-1">
                  <CheckCircle size={16} /> SECURE
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Exposed IP</div>
                <div className="text-sm font-mono text-ghost-cyan">None Detected</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Risk Level</div>
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

        {/* What is WebRTC */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">What is WebRTC?</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            <strong className="text-ghost-cyan">WebRTC</strong> (Web Real-Time Communication) is a browser technology that enables real-time communication 
            for video calls, voice chats, and file sharing. However, it can also expose your local and public IP addresses to websites.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan">🔴 How It Leaks</h3>
              <p className="text-[10px] text-gray-400 font-mono mt-1">WebRTC bypasses proxy and VPN settings</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan">🔴 What Is Exposed</h3>
              <p className="text-[10px] text-gray-400 font-mono mt-1">Your real public and local IP addresses</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan">🛠️ Fix</h3>
              <p className="text-[10px] text-gray-400 font-mono mt-1">Disable WebRTC in browser or use VPN</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is a WebRTC leak?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">A WebRTC leak occurs when your browser exposes your real IP address through WebRTC, bypassing your VPN or proxy.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I prevent WebRTC leaks?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">You can disable WebRTC in your browser settings, use a browser extension to block WebRTC leaks, or use a VPN that automatically blocks WebRTC.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Does a VPN protect against WebRTC leaks?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Some VPNs automatically block WebRTC leaks. However, not all do. You should test your browser to ensure your IP is protected.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🛡️ Protect Your Browser Privacy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="NordVPN - Blocks WebRTC Leaks"
              description="Premium VPN with built-in WebRTC leak protection."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
            <AffiliateOffer
              title="uBlock Origin - Free Protection"
              description="Block WebRTC leaks with this popular browser extension."
              buttonText="Download"
              link="https://ublockorigin.com/"
              icon="🛡️"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'DNS Leak Test', href: '/dns-leak-test' },
              { name: 'VPN Checker', href: '/vpn-checker' },
              { name: 'Proxy Checker', href: '/proxy-checker' },
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