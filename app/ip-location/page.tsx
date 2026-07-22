import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Globe, Clock, Flag, Search } from 'lucide-react'
import dynamic from 'next/dynamic'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

const Map = dynamic(() => import('../components/Map'), { ssr: false, loading: () => <div className="skeleton h-64 w-full rounded-xl" /> })

export const metadata = {
  title: 'IP Location - Find the Geographical Location of Any IP',
  description: 'Find the geographical location of any IP address. Get city, region, country, coordinates, timezone, and accuracy information.',
  keywords: 'ip location, find ip location, ip address location, geolocation, ip map',
}

export default function IPLocationPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IP LOCATION</h1>
            <p className="text-gray-400 font-mono text-sm">Find the geographical location of any IP address</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">📍</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">IP Geolocation Tool</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter any IP address to find its geographical location, including city, region, country, coordinates, and timezone.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter IP address (e.g., 8.8.8.8)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="8.8.8.8"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> LOCATE
              </button>
            </div>
          </div>

          {/* Location Display */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <div className="text-2xl mb-1">🇺🇸</div>
              <div className="text-xs text-gray-500 font-mono">Country</div>
              <div className="text-sm font-mono text-white">United States</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <div className="text-2xl mb-1">🌆</div>
              <div className="text-xs text-gray-500 font-mono">City</div>
              <div className="text-sm font-mono text-white">Mountain View</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <div className="text-2xl mb-1">📌</div>
              <div className="text-xs text-gray-500 font-mono">Coordinates</div>
              <div className="text-sm font-mono text-ghost-cyan">37.386°N, 122.084°W</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
              <div className="text-2xl mb-1">🕐</div>
              <div className="text-xs text-gray-500 font-mono">Timezone</div>
              <div className="text-sm font-mono text-white">America/Los_Angeles</div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6 h-64 md:h-80 rounded-xl overflow-hidden border border-ghost-cyan/10">
            <Map lat={37.386} lon={-122.084} city="Mountain View" country="United States" />
          </div>

          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <div className="text-xs text-gray-500 font-mono">📍 Accuracy: High (99%)</div>
            <div className="text-xs text-gray-500 font-mono">|</div>
            <div className="text-xs text-gray-500 font-mono">🔄 Last updated: {new Date().toLocaleString()}</div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* Location Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Location Intelligence</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <div className="text-xs text-gray-500 font-mono">Continent</div>
              <div className="text-sm font-mono text-white">North America</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <div className="text-xs text-gray-500 font-mono">Region</div>
              <div className="text-sm font-mono text-white">California</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <div className="text-xs text-gray-500 font-mono">Postal Code</div>
              <div className="text-sm font-mono text-white">94043</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <div className="text-xs text-gray-500 font-mono">Latitude</div>
              <div className="text-sm font-mono text-ghost-cyan">37.386°N</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <div className="text-xs text-gray-500 font-mono">Longitude</div>
              <div className="text-sm font-mono text-ghost-cyan">122.084°W</div>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <div className="text-xs text-gray-500 font-mono">Currency</div>
              <div className="text-sm font-mono text-white">USD ($)</div>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">How accurate is IP location?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">IP location is typically accurate to the city level (99% for major providers). Accuracy depends on the ISP's allocation of IP addresses.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">Can I find my exact location from my IP?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">No, your IP address does not reveal your exact street address. It provides approximate location, usually at the city level.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Why does my IP show a different location?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">If you're using a VPN or proxy, your IP location will show the VPN server's location, not your actual location.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">🌍 Location Intelligence Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="IP Geolocation API - 10,000 Free Lookups"
              description="Premium IP intelligence with city, country, coordinates, and timezone."
              buttonText="Get API"
              link="https://ipinfo.io/"
              icon="🌍"
            />
            <AffiliateOffer
              title="MapBox Location Services"
              description="Powerful mapping and location intelligence for developers."
              buttonText="Learn More"
              link="https://www.mapbox.com/"
              icon="🗺️"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'IP Lookup', href: '/ip-lookup' },
              { name: 'Bulk IP Lookup', href: '/bulk-ip-lookup' },
              { name: 'Timezone', href: '/timezone' },
              { name: 'World Clock', href: '/world-clock' },
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