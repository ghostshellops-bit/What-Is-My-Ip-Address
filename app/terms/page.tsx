import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - What Is My IP',
  description: 'Terms of service for What Is My IP. Please read our terms before using our tools.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">TERMS OF SERVICE</h1>
            <p className="text-gray-400 font-mono text-sm">Last updated: July 2026</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">1. Acceptance of Terms</h2>
            <p>By using What Is My IP, you agree to these terms. If you do not agree, please do not use our services.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">2. Services Provided</h2>
            <p>We provide IP intelligence, network tools, security analysis, and educational content. All tools are provided "as is" without warranty of any kind.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">3. Acceptable Use</h2>
            <p>You agree not to use our services for:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-400 space-y-1">
              <li>Illegal or unauthorized purposes</li>
              <li>Harassment or abuse of others</li>
              <li>Attempting to bypass security measures</li>
              <li>Automated scraping without permission</li>
            </ul>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">4. Intellectual Property</h2>
            <p>All content, logos, and tools on this site are owned by What Is My IP and Ghost Shell. Unauthorized reproduction is prohibited.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">5. Disclaimer</h2>
            <p>Our tools are for educational and informational purposes only. We are not responsible for how you use the information provided.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">6. Limitation of Liability</h2>
            <p>We are not liable for any damages arising from the use of our services. Use at your own risk.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">7. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use constitutes acceptance of the updated terms.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">8. Contact</h2>
            <p>For questions about these terms, contact: <a href="mailto:legal@whatismyip.com" className="text-ghost-cyan hover:underline">legal@whatismyip.com</a></p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/privacy">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Privacy Policy <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/cookies">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Cookie Policy <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
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