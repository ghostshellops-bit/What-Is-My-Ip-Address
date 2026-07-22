import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'CCNA Networking Guide - Learning Center',
  description: 'CCNA networking fundamentals, including IP addressing, routing, switching, and network security.',
}

export default function CCNAPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">CCNA NETWORKING GUIDE</h1>
            <p className="text-gray-400 font-mono text-sm">Master network fundamentals</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p>The <strong className="text-ghost-cyan">CCNA</strong> (Cisco Certified Network Associate) certification is an entry-level networking certification covering IP fundamentals, network access, IP connectivity, security, automation, and more.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Key CCNA Topics</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>OSI and TCP/IP models</li>
              <li>IPv4 and IPv6 addressing</li>
              <li>Routing protocols (OSPF, EIGRP, BGP)</li>
              <li>Switching and VLANs</li>
              <li>Network security fundamentals</li>
              <li>Network automation and programmability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How Our Tools Help CCNA Students</h2>
            <p>Use our <Link href="/ip-lookup" className="text-ghost-cyan hover:underline">IP Lookup</Link>, <Link href="/asn-lookup" className="text-ghost-cyan hover:underline">ASN Lookup</Link>, and <Link href="/whois-lookup" className="text-ghost-cyan hover:underline">WHOIS Lookup</Link> tools to explore real-world network data and reinforce your learning.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/learn/network-security" className="text-ghost-cyan hover:underline">Network Security Basics</Link>
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