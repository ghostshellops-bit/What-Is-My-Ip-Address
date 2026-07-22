import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'DNS Explained - Learning Center',
  description: 'Learn about DNS (Domain Name System), how it works, and why it is essential for the internet.',
}

export default function DNSPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">DNS EXPLAINED</h1>
            <p className="text-gray-400 font-mono text-sm">The internet's phonebook</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p><strong className="text-ghost-cyan">DNS</strong> (Domain Name System) is like the internet's phonebook. It translates human-readable domain names (like example.com) into IP addresses that computers use to communicate.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How DNS Works</h2>
            <ol className="list-decimal pl-6 text-gray-400 space-y-1">
              <li>You type a website name into your browser</li>
              <li>Your device queries a DNS resolver</li>
              <li>The resolver finds the corresponding IP address</li>
              <li>Your device connects to that IP</li>
            </ol>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why DNS Security Matters</h2>
            <p>DNS leaks can expose your browsing activity. Our <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test</Link> helps you check if your DNS requests are secure.</p>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/dns-leak-test" className="text-ghost-cyan hover:underline">DNS Leak Test Tool</Link>
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