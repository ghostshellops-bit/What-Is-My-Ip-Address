import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import AdBanner from '../../components/AdBanner'
import AffiliateOffer from '../../components/AffiliateOffer'

export const metadata = {
  title: 'What Is a DNS Leak and How to Test It - What Is My IP',
  description: 'Learn what a DNS leak is, why it matters for your privacy, and how to test for DNS leaks with our free tool.',
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WHAT IS A DNS LEAK?</h1>
            <p className="text-gray-400 font-mono text-sm flex items-center gap-2">
              <Calendar size={14} /> July 22, 2026
            </p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">

          {/* Introduction */}
          <p>A <strong className="text-ghost-cyan">DNS leak</strong> occurs when your DNS requests are sent outside your VPN tunnel, exposing the websites you visit to your ISP even while using a VPN. This defeats the privacy purpose of using a VPN.</p>

          <div className="glass-card rounded-xl p-4 border-ghost-cyan/20 bg-ghost-dark/50">
            <h3 className="text-ghost-cyan font-orbitron text-sm mb-2">🌐 Quick Check</h3>
            <p>Test for DNS leaks using our free <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test</Link> tool.</p>
          </div>

          {/* Why DNS Leaks Are Dangerous */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why Are DNS Leaks Dangerous?</h2>
          <p>DNS leaks compromise your privacy in several ways:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">Privacy violation</span> – Your ISP sees which websites you visit, even when using a VPN.</li>
            <li><span className="text-ghost-cyan">VPN becomes useless</span> – Your real IP is exposed through DNS queries, making your VPN ineffective.</li>
            <li><span className="text-ghost-cyan">Tracking</span> – Advertisers and websites can track your browsing activity.</li>
            <li><span className="text-ghost-cyan">Censorship bypass fails</span> – If you're using a VPN to bypass censorship, a DNS leak can expose your true location.</li>
          </ul>

          {/* How DNS Leaks Happen */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How Do DNS Leaks Happen?</h2>
          <p>DNS leaks typically occur for these reasons:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">VPN misconfiguration</span> – The VPN doesn't properly route DNS requests</li>
            <li><span className="text-ghost-cyan">IPv6 enabled</span> – VPNs sometimes don't protect IPv6 traffic</li>
            <li><span className="text-ghost-cyan">Windows DNS settings</span> – Microsoft Windows often prioritizes its own DNS settings</li>
            <li><span className="text-ghost-cyan">Browser WebRTC</span> – WebRTC can expose your local IP address</li>
          </ul>

          {/* 📢 Ad */}
          <div className="my-6 flex justify-center">
            <AdBanner type="rectangle" />
          </div>

          {/* How to Test for DNS Leaks */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How to Test for DNS Leaks</h2>
          <p>Use our free <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test tool</Link>. Here's how it works:</p>
          <ol className="list-decimal pl-6 text-gray-400 space-y-1">
            <li>Visit the DNS Leak Test tool</li>
            <li>Click the "Scan for Leaks" button</li>
            <li>Our system checks your DNS requests</li>
            <li>Results show which DNS servers are being used</li>
            <li>If you see your ISP's DNS servers, you have a leak</li>
          </ol>

          {/* How to Prevent DNS Leaks */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How to Prevent DNS Leaks</h2>
          <p>Follow these steps to protect yourself from DNS leaks:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">Use a VPN with built-in DNS leak protection</span> – Most premium VPNs include this feature</li>
            <li><span className="text-ghost-cyan">Use private DNS servers</span> – Cloudflare (1.1.1.1) or Google (8.8.8.8) are good options</li>
            <li><span className="text-ghost-cyan">Enable IPv6 leak protection</span> – Check your VPN settings for IPv6 leak protection</li>
            <li><span className="text-ghost-cyan">Use our WebRTC Leak Test</span> – Our <Link href="/webrtc-leak-test" className="text-ghost-cyan hover:underline">WebRTC Leak Test</Link> checks browser-based leaks</li>
          </ul>

          {/* Affiliate Offer */}
          <div className="my-6">
            <AffiliateOffer
              title="Protect Your Privacy with ExpressVPN"
              description="Fast, secure, and trusted by millions. 30-day money-back guarantee."
              buttonText="Get ExpressVPN"
              link="https://www.expressvpn.com/refer/YOUR_REF"
              icon="⚡"
            />
          </div>

          {/* FAQ */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: What is a DNS leak?</h3>
              <p className="text-xs text-gray-400 mt-1">A DNS leak happens when your DNS requests bypass your VPN and go directly to your ISP, exposing the websites you visit.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: Can my ISP see what I do with a VPN?</h3>
              <p className="text-xs text-gray-400 mt-1">With a properly configured VPN, your ISP can see you're using a VPN but cannot see your browsing activity. A DNS leak changes this.</p>
            </div>
            <div>
              <h3 className="text-sm text-ghost-cyan">Q: How often should I test for DNS leaks?</h3>
              <p className="text-xs text-gray-400 mt-1">Test every time you change VPN servers, update your VPN software, or notice unusual behavior. Regular testing ensures your privacy stays intact.</p>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test Tool</Link> • <Link href="/webrtc-leak-test" className="text-ghost-cyan hover:underline">WebRTC Leak Test</Link>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/blog">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              ← Back to Blog
            </div>
          </Link>
          <Link href="/dns-leak-test">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Test for DNS Leaks Now →
            </div>
          </Link>
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>
      </div>
    </main>
  )
}