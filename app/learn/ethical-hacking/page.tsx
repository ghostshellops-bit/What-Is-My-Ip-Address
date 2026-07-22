import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Ethical Hacking Basics - Learning Center',
  description: 'Learn the fundamentals of ethical hacking, penetration testing, and cybersecurity careers.',
}

export default function EthicalHackingPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">ETHICAL HACKING BASICS</h1>
            <p className="text-gray-400 font-mono text-sm">Start your cybersecurity journey</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <p><strong className="text-ghost-cyan">Ethical hacking</strong> involves identifying vulnerabilities in systems with the owner's permission to improve security. Ethical hackers are also called "white-hat" hackers.</p>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Core Skills</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>Networking fundamentals (TCP/IP, routing)</li>
              <li>Operating systems (Linux, Windows)</li>
              <li>Web application security</li>
              <li>Cryptography basics</li>
              <li>Social engineering awareness</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Certifications</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-1">
              <li>CEH (Certified Ethical Hacker)</li>
              <li>OSCP (OffSec Certified Professional)</li>
              <li>CompTIA Security+</li>
              <li>GPEN (GIAC Penetration Tester)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Tools to Know</h2>
            <p>Common tools include Nmap, Wireshark, Metasploit, Burp Suite, and Kali Linux. Our tools help you understand the fundamentals of IP and network intelligence.</p>
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