import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Blog - What Is My IP Address? Articles & Guides',
  description: 'What is my IP address? Read expert articles on IP lookup, VPNs, DNS leaks, ASN, and online privacy. Stay informed about your digital identity.',
}

const posts = [
  {
    title: 'What Is My IP Address? A Complete Guide',
    date: '2026-07-22',
    excerpt: 'Learn everything about your IP address. Discover what it reveals about you and how to protect your privacy online.',
    slug: 'what-is-my-ip-address'
  },
  {
    title: 'How to Check If Your VPN Is Working',
    date: '2026-07-22',
    excerpt: 'Learn how to test your VPN connection and verify that your IP address is hidden. Free VPN checker tool included.',
    slug: 'vpn-checker-guide'
  },
  {
    title: 'What Is a DNS Leak and How to Test It',
    date: '2026-07-22',
    excerpt: 'Learn what a DNS leak is, why it matters for your privacy, and how to test for DNS leaks with our free tool.',
    slug: 'dns-leak-test-guide'
  },
  {
    title: 'What Is ASN Lookup and Why It Matters',
    date: '2026-07-22',
    excerpt: 'Learn what ASN is, how to perform an ASN lookup, and why it\'s important for network intelligence.',
    slug: 'asn-lookup-guide'
  },
  {
    title: 'How to Test Your Internet Speed',
    date: '2026-07-22',
    excerpt: 'Learn how to test your internet speed, understand ping, download, and upload results, and improve your connection.',
    slug: 'speed-test-guide'
  },
  {
    title: 'The Future of IPv6: What You Need to Know',
    date: '2026-07-15',
    excerpt: 'Explore the transition to IPv6 and how it impacts the future of the internet.',
    slug: 'future-of-ipv6'
  },
  {
    title: 'How to Protect Your Privacy Online',
    date: '2026-07-10',
    excerpt: 'Learn essential privacy tips to safeguard your digital identity.',
    slug: 'protect-privacy'
  },
  {
    title: 'Understanding ASN and BGP for Beginners',
    date: '2026-07-05',
    excerpt: 'A beginner-friendly guide to Autonomous System Numbers and Border Gateway Protocol.',
    slug: 'asn-bgp-beginners'
  },
  {
    title: 'What Is a VPN and Should You Use One?',
    date: '2026-06-28',
    excerpt: 'Everything you need to know about VPNs and their benefits for privacy.',
    slug: 'vpn-guide'
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">BLOG</h1>
            <p className="text-gray-400 font-mono text-sm">Latest news and articles</p>
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="glass-card rounded-xl p-6 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-2">
                  <Calendar size={14} /> {post.date}
                </div>
                <h3 className="text-xl font-orbitron text-ghost-cyan group-hover:text-white transition-colors">{post.title}</h3>
                <p className="text-gray-400 font-mono text-sm mt-2">{post.excerpt}</p>
                <div className="mt-3 text-xs text-ghost-cyan flex items-center gap-1">
                  READ MORE <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>
      </div>
    </main>
  )
}