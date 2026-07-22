import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'VPN Explained - Learning Center',
  description: 'Learn about VPNs (Virtual Private Networks), how they work, and why you should use one for privacy.',
}

export default function VPNPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">VPN EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">Protecting your digital privacy</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p>A <strong className="text-ghost-cyan">VPN</strong> (Virtual Private Network) is a service that creates a secure, encrypted connection between your device and a remote server, masking your IP address and protecting your data.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How a VPN Works</h2>
            <ol className="list-decimal pl-6 text-gray-400 space-y-1">
              <li>Your device connects to a VPN server</li>
              <li>Your data is encrypted</li>
              <li>The VPN server sends your request to the internet</li>
              <li>Websites see the VPN server's IP, not yours</li>
            </ol>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why Use a VPN?</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li><span className="text-ghost-cyan">Privacy:</span> Hide your browsing activity from ISPs</li>
              <li><span className="text-ghost-cyan">Security:</span> Protect data on public Wi-Fi</li>
              <li><span className="text-ghost-cyan">Geo-unblocking:</span> Access content from other countries</li>
              <li><span className="text-ghost-cyan">Bypass censorship:</span> Access restricted websites</li>
            </ul>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/vpn-checker" className="text-ghost-cyan hover:underline">VPN Checker Tool</Link>
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