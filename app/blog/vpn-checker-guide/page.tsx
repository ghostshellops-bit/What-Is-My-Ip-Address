import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Shield } from 'lucide-react'
import AdBanner from '../../components/AdBanner'
import AffiliateOffer from '../../components/AffiliateOffer'

export const metadata = {
  title: 'How to Check If Your VPN Is Working - What Is My IP',
  description: 'Learn how to test your VPN connection, verify IP masking, and check for DNS leaks. Free VPN checker tool included.',
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
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">HOW TO CHECK IF YOUR VPN IS WORKING</h1>
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
          <p><strong className="text-ghost-cyan">Is your VPN actually protecting you?</strong> Many people use VPNs but never verify if they're working. A VPN that isn't properly configured can leak your real IP address, defeating its purpose entirely.</p>

          <div className="glass-card rounded-xl p-4 border-ghost-cyan/20 bg-ghost-dark/50">
            <h3 className="text-ghost-cyan font-orbitron text-sm mb-2">🛡️ Quick Check</h3>
            <p>Use our free <Link href="/vpn-checker" className="text-ghost-cyan hover:underline">VPN checker tool</Link> to instantly see if your VPN is protecting your IP.</p>
          </div>

          {/* Step 1 */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Step 1: Check Your IP Before Connecting</h2>
          <p>Visit our <Link href="/" className="text-ghost-cyan hover:underline">IP checker</Link> and note your real IP address, location, and ISP. This is your baseline. Take a screenshot or write it down for comparison.</p>

          {/* Step 2 */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Step 2: Connect Your VPN</h2>
          <p>Turn on your VPN and connect to a server in a different country. For best results, choose a server far from your actual location (e.g., if you're in the US, connect to a server in Europe or Asia).</p>

          {/* Step 3 */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Step 3: Recheck Your IP</h2>
          <p>Visit our <Link href="/" className="text-ghost-cyan hover:underline">IP checker</Link> again. Your IP should now show the VPN server's location and ISP, not your real information.</p>
          <p><strong className="text-ghost-cyan">What to look for:</strong></p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li>IP address changed</li>
            <li>Country changed to your VPN server location</li>
            <li>ISP changed to your VPN provider</li>
            <li>Fraud score remains low (0-20)</li>
          </ul>

          {/* 📢 Ad */}
          <div className="my-6 flex justify-center">
            <AdBanner type="rectangle" />
          </div>

          {/* Step 4 */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Step 4: Test for IP Leaks</h2>
          <p>Even if your IP address has changed, your VPN might still be leaking sensitive information. Run these additional tests:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">DNS Leak Test</span> – Check if your real IP is exposed through DNS requests using our <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test</Link> tool.</li>
            <li><span className="text-ghost-cyan">WebRTC Leak Test</span> – Some browsers expose your real IP through WebRTC. Use our <Link href="/webrtc-leak-test" className="text-ghost-cyan hover:underline">WebRTC Leak Test</Link> to check.</li>
            <li><span className="text-ghost-cyan">IPv6 Leak Test</span> – Some VPNs only protect IPv4. Your IPv6 might still be exposed. Check both versions.</li>
          </ul>

          {/* What to Do If Your VPN Fails */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">What to Do If Your VPN Fails</h2>
          <p>If any test shows your real IP is exposed, try these fixes:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">Disconnect and reconnect</span> – Sometimes a simple reset fixes the issue</li>
            <li><span className="text-ghost-cyan">Change VPN protocol</span> – Try OpenVPN or WireGuard instead of IKEv2</li>
            <li><span className="text-ghost-cyan">Enable kill switch</span> – Prevents internet connection if VPN disconnects</li>
            <li><span className="text-ghost-cyan">Disable IPv6</span> – Force your connection to use only IPv4</li>
            <li><span className="text-ghost-cyan">Contact support</span> – Your VPN provider may have specific recommendations</li>
          </ul>

          {/* Affiliate Offer */}
          <div className="my-6">
            <AffiliateOffer
              title="Try NordVPN - The Most Reliable VPN"
              description="Military-grade encryption, 5,800+ servers in 111 countries. No-logs policy."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
          </div>

          {/* FAQ */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: Why does my VPN show I'm in another country but my IP hasn't changed?</h3>
              <p className="text-xs text-gray-400 mt-1">This usually means your VPN is not properly connected. Try disconnecting and reconnecting, or try a different server.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: What is a DNS leak?</h3>
              <p className="text-xs text-gray-400 mt-1">A DNS leak occurs when your DNS requests are sent outside the VPN tunnel, exposing your browsing activity to your ISP. Our <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test</Link> can detect this.</p>
            </div>
            <div>
              <h3 className="text-sm text-ghost-cyan">Q: How often should I test my VPN?</h3>
              <p className="text-xs text-gray-400 mt-1">Test your VPN after every update, when you change servers, or if you notice slower connection speeds. Regular testing ensures your privacy is always protected.</p>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/vpn-checker" className="text-ghost-cyan hover:underline">VPN Checker Tool</Link> • <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test</Link>
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
          <Link href="/vpn-checker">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Check Your VPN Now →
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