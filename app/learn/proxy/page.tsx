import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Proxy Explained - Learning Center',
  description: 'Learn about proxies, how they work, and how they differ from VPNs.',
}

export default function ProxyPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">PROXY EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">Understanding proxy servers</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p>A <strong className="text-ghost-cyan">proxy server</strong> acts as an intermediary between your device and the internet. It forwards your requests and hides your real IP address.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How Proxies Work</h2>
            <p>When you use a proxy, your traffic goes: <span className="text-ghost-cyan">Your Device → Proxy Server → Internet</span>. The proxy then relays the response back to you.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Types of Proxies</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li><span className="text-ghost-cyan">HTTP Proxy:</span> For web browsing only</li>
              <li><span className="text-ghost-cyan">SOCKS Proxy:</span> Works with any application</li>
              <li><span className="text-ghost-cyan">Residential Proxy:</span> Uses real residential IPs</li>
              <li><span className="text-ghost-cyan">Datacenter Proxy:</span> Hosted on servers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Proxy vs VPN</h2>
            <p>A VPN encrypts all your traffic, while a proxy only reroutes it. VPNs offer better security but may be slower. Proxies are often faster but less secure.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/proxy-checker" className="text-ghost-cyan hover:underline">Proxy Checker Tool</Link>
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