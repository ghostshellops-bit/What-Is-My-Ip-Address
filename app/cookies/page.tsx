import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Cookie Policy - What Is My IP',
  description: 'Cookie policy for What Is My IP. Learn how we use cookies to improve your experience.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">COOKIE POLICY</h1>
            <p className="text-gray-400 font-mono text-sm">Last updated: July 2026</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device to store information about your browsing session.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">2. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-400 space-y-1">
              <li>Remember your recent scans</li>
              <li>Analyze site traffic and usage</li>
              <li>Improve performance and functionality</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">3. Types of Cookies</h2>
            <ul className="list-disc pl-6 mt-2 text-gray-400 space-y-1">
              <li><span className="text-ghost-cyan">Essential:</span> Required for basic functionality</li>
              <li><span className="text-ghost-cyan">Analytics:</span> To understand how users interact</li>
              <li><span className="text-ghost-cyan">Preferences:</span> To remember your settings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">4. Third-Party Cookies</h2>
            <p>We may use third-party services (like analytics providers) that set their own cookies. These are governed by their respective policies.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">5. Managing Cookies</h2>
            <p>You can manage cookies through your browser settings. Disabling cookies may affect functionality.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">6. Contact</h2>
            <p>For cookie-related queries: <a href="mailto:privacy@whatismyip.com" className="text-ghost-cyan hover:underline">privacy@whatismyip.com</a></p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/privacy">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Privacy Policy <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/terms">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Terms of Service <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
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