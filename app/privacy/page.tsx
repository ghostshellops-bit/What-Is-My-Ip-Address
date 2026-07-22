import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - What Is My IP',
  description: 'Privacy policy for What Is My IP. Learn how we handle your data and protect your privacy.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">PRIVACY POLICY</h1>
            <p className="text-gray-400 font-mono text-sm">Last updated: July 2026</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">1. Information We Collect</h2>
            <p>When you visit What Is My IP, we automatically collect certain information about your device and connection, including:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-400 space-y-1">
              <li>Your IP address (which you are checking)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-400 space-y-1">
              <li>Display your IP address and related intelligence</li>
              <li>Improve our tools and user experience</li>
              <li>Monitor site performance and security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">3. Cookies</h2>
            <p>We use minimal cookies for essential functionality and analytics. You can control cookie preferences in your browser settings.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">5. Third-Party Services</h2>
            <p>We use trusted third-party APIs (IPinfo, IPQualityScore, AbstractAPI) to provide IP intelligence. These services have their own privacy policies.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. Contact us for any privacy-related requests.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">7. Contact</h2>
            <p>For privacy concerns, email us at: <a href="mailto:privacy@whatismyip.com" className="text-ghost-cyan hover:underline">privacy@whatismyip.com</a></p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/terms">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Terms of Service <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/cookies">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Cookie Policy <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
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