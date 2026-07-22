import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'IPv4 Explained - Learning Center',
  description: 'Learn about IPv4 addressing, structure, classes, and how it works in networking.',
}

export default function IPv4Page() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IPv4 EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">The original internet protocol</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p><strong className="text-ghost-cyan">IPv4</strong> (Internet Protocol version 4) is the fourth version of the Internet Protocol and the most widely used IP addressing format.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">IPv4 Address Format</h2>
            <p>An IPv4 address is a 32-bit number divided into four octets separated by dots. Example: <span className="text-ghost-cyan">192.168.1.1</span></p>
            <p className="mt-2 text-gray-400">Each octet ranges from 0 to 255, giving about 4.3 billion possible addresses.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">IPv4 Address Classes</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li><span className="text-ghost-cyan">Class A:</span> 1.0.0.0 – 126.255.255.255 (large networks)</li>
              <li><span className="text-ghost-cyan">Class B:</span> 128.0.0.0 – 191.255.255.255 (medium networks)</li>
              <li><span className="text-ghost-cyan">Class C:</span> 192.0.0.0 – 223.255.255.255 (small networks)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why IPv4 is Running Out</h2>
            <p>With the explosion of internet-connected devices, the 4.3 billion IPv4 addresses are nearly exhausted. This led to the development of IPv6.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/learn/ipv6" className="text-ghost-cyan hover:underline">IPv6 Explained</Link> • <Link href="/learn/what-is-ip" className="text-ghost-cyan hover:underline">What Is An IP Address?</Link>
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