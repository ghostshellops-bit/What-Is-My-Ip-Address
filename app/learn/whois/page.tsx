import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'WHOIS Explained - Learning Center',
  description: 'Learn about WHOIS, how to query domain and IP ownership information, and why it matters.',
}

export default function WHOISPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WHOIS EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">Domain and IP ownership lookup</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p><strong className="text-ghost-cyan">WHOIS</strong> is a protocol used to query databases that store information about domain names, IP address blocks, and autonomous system numbers.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">What WHOIS Shows</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Domain registrant name and contact</li>
              <li>Registrar information</li>
              <li>Creation and expiry dates</li>
              <li>Name servers</li>
              <li>Abuse contact information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Use Cases</h2>
            <p>WHOIS is used by network administrators, security researchers, and legal professionals for investigating domain ownership, contacting abuse teams, and verifying domain legitimacy.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/whois-lookup" className="text-ghost-cyan hover:underline">WHOIS Lookup Tool</Link>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/learn">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              ← Back to Learning Center
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