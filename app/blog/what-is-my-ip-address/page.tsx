import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import AdBanner from '../../components/AdBanner'
import AffiliateOffer from '../../components/AffiliateOffer'

export const metadata = {
  title: 'What Is My IP Address? A Complete Guide - What Is My IP',
  description: 'Learn everything about your IP address. Discover what it reveals about you and how to protect your privacy online.',
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
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WHAT IS MY IP ADDRESS?</h1>
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
          <p><strong className="text-ghost-cyan">Your IP address</strong> is your digital fingerprint on the internet. Every device connected to the internet has a unique IP address that identifies it and allows communication between devices. Understanding what your IP address is and what it reveals about you is the first step toward protecting your online privacy.</p>

          <div className="glass-card rounded-xl p-4 border-ghost-cyan/20 bg-ghost-dark/50">
            <h3 className="text-ghost-cyan font-orbitron text-sm mb-2">💡 Quick Check</h3>
            <p>See your IP address instantly using our <Link href="/" className="text-ghost-cyan hover:underline">IP checker tool</Link>.</p>
          </div>

          {/* What Does My IP Reveal? */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">What Does My IP Address Reveal?</h2>
          <p>Your IP address can reveal several pieces of information about your connection:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">Your approximate location</span> – City and region, not your exact street address. The accuracy varies between 50-500 miles depending on your ISP.</li>
            <li><span className="text-ghost-cyan">Your Internet Service Provider (ISP)</span> – Who provides your internet connection (e.g., Comcast, AT&T, or a mobile carrier).</li>
            <li><span className="text-ghost-cyan">Your connection type</span> – Residential, mobile, business, or datacenter IP.</li>
            <li><span className="text-ghost-cyan">Your timezone</span> – Where you are located based on your IP.</li>
            <li><span className="text-ghost-cyan">Your ASN</span> – The Autonomous System Number identifies the network operator.</li>
          </ul>

          {/* 📢 Ad */}
          <div className="my-6 flex justify-center">
            <AdBanner type="rectangle" />
          </div>

          {/* How to Check Your IP */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How to Check Your IP Address</h2>
          <p>You can find your IP address instantly using our free <Link href="/" className="text-ghost-cyan hover:underline">IP checker tool</Link>. Simply visit the homepage and your IP address, location, ISP, and security status are displayed immediately. No technical knowledge required.</p>

          <div className="glass-card rounded-xl p-4 border-ghost-cyan/20 bg-ghost-dark/50">
            <h3 className="text-ghost-cyan font-orbitron text-sm mb-2">🛠️ Step-by-Step</h3>
            <ol className="list-decimal pl-6 text-gray-400 space-y-1 text-xs">
              <li>Visit our homepage</li>
              <li>Your IP address appears instantly</li>
              <li>Review your location, ISP, and security status</li>
              <li>Click "Copy IP" to share or save</li>
              <li>Click "Rescan" to refresh your data</li>
            </ol>
          </div>

          {/* Can Someone Track Me? */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Can Someone Track Me Through My IP?</h2>
          <p>Your IP address can give a general idea of your location but does not reveal your personal identity. Websites and services can log your IP address, but tracking your exact identity requires additional information from your ISP, which typically requires a court order.</p>
          <p><strong className="text-ghost-cyan">Important:</strong> Using a VPN masks your real IP address and prevents websites from seeing your true location.</p>

          {/* How to Protect Your Privacy */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How to Protect Your Privacy</h2>
          <p>Here are the most effective ways to protect your IP address and online privacy:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">Use a VPN</span> – Masks your real IP address and encrypts all your traffic. This is the most comprehensive solution.</li>
            <li><span className="text-ghost-cyan">Use a proxy server</span> – Routes your traffic through another server but may not encrypt your data.</li>
            <li><span className="text-ghost-cyan">Use Tor</span> – Anonymizes your internet traffic by routing it through multiple volunteer-operated servers.</li>
            <li><span className="text-ghost-cyan">Use private browsing</span> – Prevents your browser from storing history, but does not hide your IP.</li>
          </ul>

          {/* 📢 Ad */}
          <div className="my-6 flex justify-center">
            <AdBanner type="leaderboard" />
          </div>

          {/* IPv4 vs IPv6 */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">IPv4 vs IPv6: What's the Difference?</h2>
          <p>There are two versions of IP addresses currently in use:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">IPv4</span> – The original 32-bit address format (e.g., 192.168.1.1). There are approximately 4.3 billion unique IPv4 addresses, which are now nearly exhausted.</li>
            <li><span className="text-ghost-cyan">IPv6</span> – The newer 128-bit address format (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). It solves the address shortage and offers improved security features.</li>
          </ul>
          <p>Most modern networks support both protocols. Our tools check for both your IPv4 and IPv6 addresses.</p>

          {/* Affiliate Offer */}
          <div className="my-6">
            <AffiliateOffer
              title="Protect Your Privacy with NordVPN"
              description="Get 68% off + 3 months free. 30-day money-back guarantee."
              buttonText="Claim Offer"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
          </div>

          {/* Frequently Asked Questions */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: What is my IP address?</h3>
              <p className="text-xs text-gray-400 mt-1">Your IP address is a unique identifier assigned to your device when you connect to the internet. You can find it on our homepage.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: Does my IP reveal my exact location?</h3>
              <p className="text-xs text-gray-400 mt-1">No. Your IP reveals your approximate location (city/region) but not your exact address. The accuracy depends on your ISP.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: Can I hide my IP address?</h3>
              <p className="text-xs text-gray-400 mt-1">Yes. You can hide your IP using a VPN, proxy server, or the Tor network. A VPN is the most secure option.</p>
            </div>
            <div>
              <h3 className="text-sm text-ghost-cyan">Q: Is my IP address public?</h3>
              <p className="text-xs text-gray-400 mt-1">Yes, your public IP is visible to websites and services you interact with. Your private IP (e.g., 192.168.x.x) is only used within your local network.</p>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/learn/what-is-ip" className="text-ghost-cyan hover:underline">Learning Center: What Is An IP Address</Link> • <Link href="/ip-lookup" className="text-ghost-cyan hover:underline">IP Lookup Tool</Link>
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
          <Link href="/">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Check Your IP Now →
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