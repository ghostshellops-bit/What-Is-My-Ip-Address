import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'What Is An IP Address? - Learning Center',
  description: 'Learn what an IP address is, how it works, and why it matters for your online privacy and networking.',
}

export default function WhatIsIPPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WHAT IS AN IP ADDRESS?</h1>
            <p className="text-gray-400 font-mono text-sm">Understanding your digital identity</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p>An <strong className="text-ghost-cyan">IP address</strong> (Internet Protocol address) is a unique numerical label assigned to every device connected to a computer network that uses the Internet Protocol for communication.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How IP Addresses Work</h2>
            <p>IP addresses serve two main functions: host or network interface identification and location addressing. They are like a postal address for your device, allowing data to be sent to the right destination.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Types of IP Addresses</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li><span className="text-ghost-cyan">IPv4:</span> 32-bit addresses (e.g., 192.168.1.1) – the original standard</li>
              <li><span className="text-ghost-cyan">IPv6:</span> 128-bit addresses (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334) – the modern standard</li>
              <li><span className="text-ghost-cyan">Public:</span> Used on the internet, visible to websites</li>
              <li><span className="text-ghost-cyan">Private:</span> Used within local networks (e.g., 192.168.x.x)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why Does Your IP Matter?</h2>
            <p>Your IP address determines your approximate location, ISP, and can be used to track your online activity. Understanding your IP helps you protect your privacy and troubleshoot network issues.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/learn/ipv4" className="text-ghost-cyan hover:underline">IPv4 Explained</Link> • <Link href="/learn/ipv6" className="text-ghost-cyan hover:underline">IPv6 Explained</Link>
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