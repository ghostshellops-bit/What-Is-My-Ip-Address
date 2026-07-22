import Image from 'next/image'
import Link from 'next/link'
import AdBanner from '../components/AdBanner'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact Us - What Is My IP',
  description: 'Get in touch with the What Is My IP team. Support, feedback, and partnership inquiries.',
  keywords: 'contact us, support, feedback, partnership, help desk',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">CONTACT US</h1>
            <p className="text-gray-400 font-mono text-sm">Get in touch with the team</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Client Component with form and interactive elements */}
        <ContactForm />

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>

      </div>
    </main>
  )
}