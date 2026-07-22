import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import AdBanner from '../../components/AdBanner'
import AffiliateOffer from '../../components/AffiliateOffer'

export const metadata = {
  title: 'What Is ASN Lookup? A Complete Guide - What Is My IP',
  description: 'Learn what ASN is, how to perform an ASN lookup, and why it\'s important for network intelligence and security.',
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WHAT IS ASN LOOKUP?</h1>
            <p className="text-gray-400 font-mono text-sm flex items-center gap-2">
              <Calendar size={14} /> July 22, 2026
            </p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10 space-y-6 font-mono text-sm text-gray-300">

          {/* Introduction */}
          <p><strong className="text-ghost-cyan">ASN</strong> stands for Autonomous System Number. It's a unique identifier assigned to network operators (ISPs, universities, large organizations) that control a set of IP prefixes on the internet.</p>

          <div className="glass-card rounded-xl p-4 border-ghost-cyan/20 bg-ghost-dark/50">
            <h3 className="text-ghost-cyan font-orbitron text-sm mb-2">🔢 Quick Check</h3>
            <p>Find your ASN using our free <Link href="/asn-lookup" className="text-ghost-cyan hover:underline">ASN Lookup</Link> tool.</p>
          </div>

          {/* Why ASN Is Important */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Why Is ASN Important?</h2>
          <p>ASNs are fundamental to how the internet works:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">Network identification</span> – Identifies who owns and operates a network</li>
            <li><span className="text-ghost-cyan">BGP routing</span> – Used in Border Gateway Protocol decisions</li>
            <li><span className="text-ghost-cyan">Security investigations</span> – Trace abuse back to the responsible organization</li>
            <li><span className="text-ghost-cyan">Network analytics</span> – Understand the structure and topology of the internet</li>
            <li><span className="text-ghost-cyan">Peering relationships</span> – ISPs use ASNs to establish connections</li>
          </ul>

          {/* What ASN Reveals */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">What Does an ASN Lookup Reveal?</h2>
          <p>When you perform an ASN lookup, you get:</p>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">ASN number</span> – The unique identifier (e.g., AS13335)</li>
            <li><span className="text-ghost-cyan">Organization name</span> – The company or organization that owns it (e.g., Cloudflare)</li>
            <li><span className="text-ghost-cyan">Network prefix</span> – The IP ranges allocated to that ASN</li>
            <li><span className="text-ghost-cyan">Registry</span> – Which regional registry (ARIN, RIPE, APNIC, etc.) allocated it</li>
            <li><span className="text-ghost-cyan">Country</span> – Where the organization is based</li>
          </ul>

          {/* 📢 Ad */}
          <div className="my-6 flex justify-center">
            <AdBanner type="rectangle" />
          </div>

          {/* How to Perform ASN Lookup */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">How to Perform an ASN Lookup</h2>
          <p>Using our free <Link href="/asn-lookup" className="text-ghost-cyan hover:underline">ASN lookup tool</Link> is simple:</p>
          <ol className="list-decimal pl-6 text-gray-400 space-y-1">
            <li>Visit the ASN Lookup page</li>
            <li>Enter any IP address</li>
            <li>Click the lookup button</li>
            <li>Results show the ASN owner, organization, network prefix, and registry</li>
          </ol>

          {/* Who Uses ASN Lookups */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Who Uses ASN Lookups?</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-1">
            <li><span className="text-ghost-cyan">Network administrators</span> – For troubleshooting and network design</li>
            <li><span className="text-ghost-cyan">Cybersecurity professionals</span> – For threat investigation and attribution</li>
            <li><span className="text-ghost-cyan">Security researchers</span> – For understanding internet infrastructure</li>
            <li><span className="text-ghost-cyan">CCNA and networking students</span> – For learning about internet routing</li>
            <li><span className="text-ghost-cyan">BGP engineers</span> – For managing routing policies</li>
          </ul>

          {/* Affiliate Offer */}
          <div className="my-6">
            <AffiliateOffer
              title="Master Networking with CCNA Training"
              description="Get certified and advance your networking career with expert-led training."
              buttonText="Learn More"
              link="https://www.cisco.com/go/ccna"
              icon="📚"
            />
          </div>

          {/* FAQ */}
          <h2 className="text-ghost-cyan font-orbitron text-base mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: What is an ASN?</h3>
              <p className="text-xs text-gray-400 mt-1">An Autonomous System Number (ASN) identifies a network operator on the internet. It's used for routing and network management.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm text-ghost-cyan">Q: How do I find my ASN?</h3>
              <p className="text-xs text-gray-400 mt-1">Use our <Link href="/asn-lookup" className="text-ghost-cyan hover:underline">ASN lookup tool</Link>. Simply enter your IP address and the tool will show your ASN information.</p>
            </div>
            <div>
              <h3 className="text-sm text-ghost-cyan">Q: Why would I need an ASN lookup?</h3>
              <p className="text-xs text-gray-400 mt-1">ASN lookups are used for network troubleshooting, security investigations, understanding routing paths, and learning about internet infrastructure.</p>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t border-ghost-cyan/10">
            Related: <Link href="/asn-lookup" className="text-ghost-cyan hover:underline">ASN Lookup Tool</Link> • <Link href="/whois-lookup" className="text-ghost-cyan hover:underline">WHOIS Lookup</Link>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/blog">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              ← Back to Blog
            </div>
          </Link>
          <Link href="/asn-lookup">
            <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
              Try ASN Lookup Now →
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