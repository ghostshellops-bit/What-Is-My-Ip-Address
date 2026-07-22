import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Network Security Basics - Learning Center',
  description: 'Learn the fundamentals of network security, including firewalls, VPNs, and best practices.',
}

export default function NetworkSecurityPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">NETWORK SECURITY BASICS</h1>
            <p className="text-gray-400 font-mono text-sm">Protecting your digital infrastructure</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p><strong className="text-ghost-cyan">Network security</strong> involves measures to protect the integrity, confidentiality, and availability of data as it travels across networks.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Key Concepts</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li><span className="text-ghost-cyan">Firewalls:</span> Filter traffic based on rules</li>
              <li><span className="text-ghost-cyan">Encryption:</span> Scramble data to prevent eavesdropping</li>
              <li><span className="text-ghost-cyan">VPNs:</span> Secure remote connections</li>
              <li><span className="text-ghost-cyan">IDS/IPS:</span> Detect and prevent intrusions</li>
              <li><span className="text-ghost-cyan">Authentication:</span> Verify user identities</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Best Practices</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Use strong passwords and MFA</li>
              <li>Keep software updated</li>
              <li>Monitor network traffic</li>
              <li>Conduct regular security audits</li>
            </ul>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/vpn-checker" className="text-ghost-cyan hover:underline">VPN Checker</Link>
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