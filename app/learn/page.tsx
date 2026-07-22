import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Shield, Network, Wifi, Lock, Globe, Server, Users, Code2, Brain, ChevronRight } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Learning Center - Learn About IP, Networking & Cybersecurity',
  description: 'Master networking, cybersecurity, and IP intelligence with our free learning center. Articles, guides, and tutorials for all levels.',
  keywords: 'learning center, networking basics, cybersecurity, ip address, ccna, ethical hacking',
}

const articles = [
  { 
    title: 'What Is An IP Address?',
    description: 'Learn what an IP address is, how it works, and why it matters for your online privacy.',
    slug: 'what-is-ip',
    icon: <Wifi size={18} />,
    category: 'IP Fundamentals'
  },
  { 
    title: 'IPv4 Explained',
    description: 'Understanding the original internet protocol and its structure.',
    slug: 'ipv4',
    icon: <Network size={18} />,
    category: 'IP Fundamentals'
  },
  { 
    title: 'IPv6 Explained',
    description: 'The future of internet addressing. Learn about IPv6 benefits and adoption.',
    slug: 'ipv6',
    icon: <Network size={18} />,
    category: 'IP Fundamentals'
  },
  { 
    title: 'VPN Explained',
    description: 'Everything you need to know about Virtual Private Networks and privacy.',
    slug: 'vpn',
    icon: <Shield size={18} />,
    category: 'Privacy & Security'
  },
  { 
    title: 'Proxy Explained',
    description: 'Understanding proxy servers and how they differ from VPNs.',
    slug: 'proxy',
    icon: <Shield size={18} />,
    category: 'Privacy & Security'
  },
  { 
    title: 'DNS Explained',
    description: 'How the Domain Name System works and why DNS security matters.',
    slug: 'dns',
    icon: <Globe size={18} />,
    category: 'Network Fundamentals'
  },
  { 
    title: 'ASN Explained',
    description: 'Learn about Autonomous System Numbers and BGP routing.',
    slug: 'asn',
    icon: <Server size={18} />,
    category: 'Network Fundamentals'
  },
  { 
    title: 'WHOIS Explained',
    description: 'Understanding WHOIS and domain ownership information.',
    slug: 'whois',
    icon: <BookOpen size={18} />,
    category: 'Network Fundamentals'
  },
  { 
    title: 'BGP Explained',
    description: 'The protocol that powers internet routing.',
    slug: 'bgp',
    icon: <Globe size={18} />,
    category: 'Network Fundamentals'
  },
  { 
    title: 'Network Security Basics',
    description: 'Protecting your digital infrastructure from threats.',
    slug: 'network-security',
    icon: <Lock size={18} />,
    category: 'Security'
  },
  { 
    title: 'Ethical Hacking Basics',
    description: 'Start your journey into ethical hacking and penetration testing.',
    slug: 'ethical-hacking',
    icon: <Code2 size={18} />,
    category: 'Cybersecurity'
  },
  { 
    title: 'CCNA Networking Guide',
    description: 'Master networking fundamentals with our CCNA study guide.',
    slug: 'ccna',
    icon: <Users size={18} />,
    category: 'Certifications'
  },
]

export default function LearnPage() {
  const categories = [...new Set(articles.map(a => a.category))]

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">LEARNING CENTER</h1>
            <p className="text-gray-400 font-mono text-sm">Master networking, cybersecurity, and IP intelligence</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs font-orbitron text-ghost-cyan tracking-widest">CATEGORIES:</span>
          {categories.map((cat) => (
            <span key={cat} className="glass-card rounded-full px-3 py-1 border-ghost-cyan/10 text-xs font-mono text-gray-400 hover:text-ghost-cyan hover:border-ghost-cyan/30 transition-all cursor-pointer">
              {cat}
            </span>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <Link key={article.slug} href={`/learn/${article.slug}`}>
              <div className="glass-card rounded-xl p-5 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-ghost-cyan">{article.icon}</span>
                  <span className="text-[10px] text-gray-500 font-mono">{article.category}</span>
                </div>
                <h3 className="text-sm font-orbitron text-gray-300 group-hover:text-ghost-cyan transition-colors">{article.title}</h3>
                <p className="text-xs text-gray-400 font-mono mt-1">{article.description}</p>
                <div className="mt-3 text-[10px] text-ghost-cyan flex items-center gap-1">
                  READ MORE <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* Study Resources */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">📚 Study Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
              <Brain size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Quizzes</h3>
              <p className="text-[10px] text-gray-400 font-mono">Test your knowledge</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
              <BookOpen size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Glossary</h3>
              <p className="text-[10px] text-gray-400 font-mono">Networking terms</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
              <Code2 size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Commands</h3>
              <p className="text-[10px] text-gray-400 font-mono">Network commands</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
              <Shield size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-xs font-orbitron text-ghost-cyan">Security Tips</h3>
              <p className="text-[10px] text-gray-400 font-mono">Stay safe online</p>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">📚 Recommended Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Cisco Networking Academy"
              description="Free networking courses and certifications."
              buttonText="Learn More"
              link="https://www.netacad.com/"
              icon="📚"
            />
            <AffiliateOffer
              title="Cybrary - Cybersecurity Training"
              description="Free and paid cybersecurity courses."
              buttonText="Explore"
              link="https://www.cybrary.it/"
              icon="🛡️"
            />
          </div>
        </div>

        {/* Ghost Shell Footer */}
        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>

      </div>
    </main>
  )
}