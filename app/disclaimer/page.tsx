import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Disclaimer - What Is My IP',
  description: 'Disclaimer for What Is My IP. Please read our legal disclaimer before using our tools.',
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">DISCLAIMER</h1>
            <p className="text-gray-400 font-mono text-sm">Last updated: July 2026</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">
          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">General Information</h2>
            <p>The information provided by What Is My IP is for general informational and educational purposes only. All tools are provided "as is" without any warranties.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">No Professional Advice</h2>
            <p>The content on this site does not constitute professional cybersecurity, legal, or networking advice. Always consult qualified professionals for specific situations.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Accuracy of Information</h2>
            <p>While we strive for accuracy, IP data may not always be 100% correct due to the nature of third-party APIs and dynamic IP assignments. Data should be verified independently.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Use at Your Own Risk</h2>
            <p>You use our tools at your own risk. We are not liable for any damages, losses, or consequences arising from the use of our services.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Third-Party Links</h2>
            <p>We may link to external websites. We have no control over their content or practices and assume no responsibility for them.</p>
          </div>

          <div>
            <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Contact</h2>
            <p>For questions about this disclaimer: <a href="mailto:legal@whatismyip.com" className="text-ghost-cyan hover:underline">legal@whatismyip.com</a></p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/privacy">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Privacy Policy <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/terms">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Terms of Service <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
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