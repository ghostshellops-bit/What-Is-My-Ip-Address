import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'BGP Explained - Learning Center',
  description: 'Learn about BGP (Border Gateway Protocol), the routing protocol that powers the internet.',
}

export default function BGPPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">BGP EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">The backbone of internet routing</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p><strong className="text-ghost-cyan">BGP</strong> (Border Gateway Protocol) is the protocol that routes data across the internet. It allows networks (ASNs) to exchange routing information and determine the best paths for data.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How BGP Works</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>BGP routers exchange routing information</li>
              <li>They maintain a table of possible paths</li>
              <li>They choose the best path based on policies</li>
              <li>Data is forwarded hop-by-hop</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why BGP Security Matters</h2>
            <p>BGP hijacking can redirect traffic to malicious networks. Understanding BGP helps network engineers protect their infrastructure.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/bgp-information" className="text-ghost-cyan hover:underline">BGP Information Tool</Link>
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