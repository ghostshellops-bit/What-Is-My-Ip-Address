import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Trash2, Download, RefreshCw } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'IP History - View Your IP Address History',
  description: 'View your IP address history. Track your past IP addresses, locations, and timestamps.',
  keywords: 'ip history, ip address history, past ip addresses, ip tracker',
}

export default function IPHistoryPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IP HISTORY</h1>
            <p className="text-gray-400 font-mono text-sm">View your IP address history</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">📜</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">IP History Tracker</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              View your recent IP addresses, locations, and timestamps. Your IP history is stored securely in your browser.
            </p>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-2 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center gap-2">
                <RefreshCw size={16} /> REFRESH
              </button>
              <button className="bg-gray-800/50 border border-gray-700 text-gray-300 font-mono px-6 py-2 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2">
                <Download size={16} /> EXPORT
              </button>
              <button className="bg-ghost-red/10 border border-ghost-red/30 text-ghost-red font-mono px-6 py-2 rounded-lg hover:bg-ghost-red/20 transition-all flex items-center gap-2">
                <Trash2 size={16} /> CLEAR ALL
              </button>
            </div>
          </div>

          {/* History Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="border-b border-ghost-cyan/20">
                  <th className="text-left py-3 px-4 text-gray-500 text-xs">IP Address</th>
                  <th className="text-left py-3 px-4 text-gray-500 text-xs">Location</th>
                  <th className="text-left py-3 px-4 text-gray-500 text-xs">ISP</th>
                  <th className="text-left py-3 px-4 text-gray-500 text-xs">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ghost-cyan/5">
                  <td className="py-3 px-4 text-ghost-cyan">198.51.100.25</td>
                  <td className="py-3 px-4 text-white">🇺🇸 Los Angeles, CA</td>
                  <td className="py-3 px-4 text-white">Cloudflare Inc.</td>
                  <td className="py-3 px-4 text-gray-400">Jul 22, 2026 10:32 AM</td>
                </tr>
                <tr className="border-b border-ghost-cyan/5">
                  <td className="py-3 px-4 text-ghost-cyan">198.51.100.24</td>
                  <td className="py-3 px-4 text-white">🇺🇸 Los Angeles, CA</td>
                  <td className="py-3 px-4 text-white">Cloudflare Inc.</td>
                  <td className="py-3 px-4 text-gray-400">Jul 21, 2026 3:15 PM</td>
                </tr>
                <tr className="border-b border-ghost-cyan/5">
                  <td className="py-3 px-4 text-ghost-cyan">198.51.100.23</td>
                  <td className="py-3 px-4 text-white">🇺🇸 Los Angeles, CA</td>
                  <td className="py-3 px-4 text-white">Cloudflare Inc.</td>
                  <td className="py-3 px-4 text-gray-400">Jul 20, 2026 9:00 AM</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-ghost-cyan">198.51.100.22</td>
                  <td className="py-3 px-4 text-white">🇺🇸 Los Angeles, CA</td>
                  <td className="py-3 px-4 text-white">Cloudflare Inc.</td>
                  <td className="py-3 px-4 text-gray-400">Jul 19, 2026 6:47 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500 font-mono">
            Showing 4 of 4 records · History stored locally in your browser
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* How It Works */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">How IP History Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💾</div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">1. Stored Locally</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your IP history is saved in your browser's local storage</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">2. Auto-Updated</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Each visit to our homepage adds your new IP address</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">3. Private</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your history never leaves your device — only you can see it</p>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* FAQ */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How is my IP history stored?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your IP history is stored locally in your browser's localStorage. It is never sent to our servers.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Can I clear my IP history?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Yes, you can clear your IP history using the "Clear All" button above. This will remove all saved records from your browser.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why does my IP history show old IPs?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Your ISP may change your public IP periodically. Our tool records each IP address you visited with to track changes.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🔒 Protect Your Privacy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Keep Your IP History Private with NordVPN"
              description="Hide your IP address and prevent tracking with a leading VPN."
              buttonText="Get NordVPN"
              link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_AFF_ID"
              icon="🛡️"
            />
            <AffiliateOffer
              title="ProtonVPN - Free Privacy Protection"
              description="Protect your IP address with a free, secure VPN."
              buttonText="Try Now"
              link="https://protonvpn.com/"
              icon="🔒"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IP Lookup', href: '/ip-lookup' },
              { name: 'IP Location', href: '/ip-location' },
              { name: 'Public IP', href: '/public-ip' },
              { name: 'Bulk IP Lookup', href: '/bulk-ip-lookup' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href}>
                <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
                  {tool.name} <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
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