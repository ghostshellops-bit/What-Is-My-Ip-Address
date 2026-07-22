import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'ASN Explained - Learning Center',
  description: 'Learn about ASN (Autonomous System Numbers) and their role in internet routing and BGP.',
}

export default function ASNPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">ASN EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">Autonomous System Numbers demystified</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p>An <strong className="text-ghost-cyan">ASN</strong> (Autonomous System Number) is a unique identifier assigned to a network operator (like an ISP, university, or large corporation) that controls a set of IP prefixes.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why ASNs Matter</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>ASNs are used in BGP (Border Gateway Protocol) for routing</li>
              <li>They help identify network operators</li>
              <li>Important for network troubleshooting and security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How to Find Your ASN</h2>
            <p>You can use our <Link href="/asn-lookup" className="text-ghost-cyan hover:underline">ASN Lookup</Link> tool to find the ASN of any IP address.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/asn-lookup" className="text-ghost-cyan hover:underline">ASN Lookup Tool</Link>
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