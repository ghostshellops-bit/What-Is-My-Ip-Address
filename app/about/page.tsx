import Image from 'next/image'
import Link from 'next/link'
import { Shield, Users, Lock, Award, Globe, Server, Zap, Heart } from 'lucide-react'
import AdBanner from '../components/AdBanner'

export const metadata = {
  title: 'About Us - What Is My IP',
  description: 'Learn about What Is My IP - your trusted platform for IP intelligence, security analysis, and network information.',
  keywords: 'about us, what is my ip, ip intelligence, cybersecurity, network tools',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">ABOUT US</h1>
            <p className="text-gray-400 font-mono text-sm">Privacy · Security · Network</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6">
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            <span className="text-ghost-cyan font-bold">What Is My IP</span> is a premium cybersecurity, networking, and internet intelligence platform. We provide advanced tools to discover, analyze, and understand your internet connection, IP address, network identity, privacy risks, and online security status.
          </p>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            Our mission is to make professional-grade network intelligence accessible to everyone—from cybersecurity students and ethical hackers to network engineers, developers, and privacy-conscious users.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
            <Shield className="text-ghost-cyan mx-auto mb-2" size={28} />
            <div className="text-xs font-orbitron text-ghost-cyan">Security</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
            <Lock className="text-ghost-cyan mx-auto mb-2" size={28} />
            <div className="text-xs font-orbitron text-ghost-cyan">Privacy</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
            <Award className="text-ghost-cyan mx-auto mb-2" size={28} />
            <div className="text-xs font-orbitron text-ghost-cyan">Accuracy</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
            <Heart className="text-ghost-cyan mx-auto mb-2" size={28} />
            <div className="text-xs font-orbitron text-ghost-cyan">Community</div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* Mission */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">🎯 Our Mission</h2>
          <p className="text-gray-300 font-mono text-sm leading-relaxed">
            To democratize access to professional-grade network intelligence tools, empowering individuals and organizations 
            to understand and protect their digital presence. We believe that everyone deserves to know what their IP address reveals about them.
          </p>
        </div>

        {/* Team */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 mt-8">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">👥 Powered By Ghost Shell</h2>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-red/50">
              <Image src="/images/logo.png" alt="Ghost Shell" fill className="object-contain p-2" />
            </div>
            <div>
              <p className="text-gray-300 font-mono text-sm">
                <span className="text-ghost-red font-bold">Ghost Shell Networks</span> is a cybersecurity and network intelligence collective.
                We build tools that make the internet safer and more transparent.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>

      </div>
    </main>
  )
}