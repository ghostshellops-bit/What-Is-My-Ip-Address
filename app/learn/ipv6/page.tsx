import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'IPv6 Explained - Learning Center',
  description: 'Learn about IPv6 addressing, benefits, and how it is shaping the future of the internet.',
}

export default function IPv6Page() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IPv6 EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">The future of internet addressing</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p><strong className="text-ghost-cyan">IPv6</strong> (Internet Protocol version 6) is the latest version of the Internet Protocol, designed to replace IPv4 due to address exhaustion.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">IPv6 Address Format</h2>
            <p>IPv6 uses 128-bit addresses written in hexadecimal groups separated by colons. Example: <span className="text-ghost-cyan">2001:0db8:85a3:0000:0000:8a2e:0370:7334</span></p>
            <p className="mt-2 text-gray-400">This provides approximately 340 undecillion (2<sup>128</sup>) addresses – enough for every device on Earth many times over.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Benefits of IPv6</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li><span className="text-ghost-cyan">Vast address space:</span> No more shortage of IP addresses</li>
              <li><span className="text-ghost-cyan">Improved security:</span> Built-in IPsec encryption</li>
              <li><span className="text-ghost-cyan">Better performance:</span> Simpler header structure</li>
              <li><span className="text-ghost-cyan">Stateless autoconfiguration:</span> Devices can generate their own addresses</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Transition from IPv4 to IPv6</h2>
            <p>The transition is happening gradually. Many ISPs and services now support both protocols. Our tools show both your IPv4 and IPv6 if available.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/learn/ipv4" className="text-ghost-cyan hover:underline">IPv4 Explained</Link> • <Link href="/learn/what-is-ip" className="text-ghost-cyan hover:underline">What Is An IP Address?</Link>
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