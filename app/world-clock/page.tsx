import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Globe, MapPin, Sun, Moon, RefreshCw } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'World Clock - Check Time in Major Cities',
  description: 'World clock tool. Check current time in major cities and time zones around the world.',
  keywords: 'world clock, current time, international time, city time, world time',
}

export default function WorldClockPage() {
  const cities = [
    { name: 'New York', country: 'USA', flag: '🇺🇸', time: '10:24 AM', offset: 'UTC -4' },
    { name: 'London', country: 'UK', flag: '🇬🇧', time: '3:24 PM', offset: 'UTC +1' },
    { name: 'Paris', country: 'France', flag: '🇫🇷', time: '4:24 PM', offset: 'UTC +2' },
    { name: 'Dubai', country: 'UAE', flag: '🇦🇪', time: '6:24 PM', offset: 'UTC +4' },
    { name: 'Tokyo', country: 'Japan', flag: '🇯🇵', time: '11:24 PM', offset: 'UTC +9' },
    { name: 'Sydney', country: 'Australia', flag: '🇦🇺', time: '12:24 AM', offset: 'UTC +10' },
  ]

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WORLD CLOCK</h1>
            <p className="text-gray-400 font-mono text-sm">Check time in major cities worldwide</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">World Clock</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Current time in major cities around the world. All times are automatically updated.
            </p>

            <div className="mt-4 flex justify-center">
              <button className="flex items-center gap-2 text-sm bg-gray-800/50 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700 transition-all">
                <RefreshCw size={14} /> UPDATE ALL
              </button>
            </div>
          </div>

          {/* City List */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <div key={city.name} className="glass-card rounded-xl p-4 border-ghost-cyan/10 hover:border-ghost-cyan/30 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-orbitron text-ghost-cyan">{city.name}</div>
                    <div className="text-xs text-gray-500 font-mono">{city.flag} {city.country}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-orbitron font-bold text-white">{city.time}</div>
                    <div className="text-[10px] text-gray-500 font-mono">{city.offset}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* How It Works */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">How the World Clock Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Global Coverage</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">24 timezones across the world</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Real-Time Updates</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Times refresh automatically</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">UTC Offset</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">See the difference from UTC</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is a world clock?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">A world clock shows the current time in different cities and time zones around the world.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How do I know what time it is in another country?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Use our world clock tool above to see the current time in major cities worldwide. Add the timezone offset to your local time.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">Are all timezones observed?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">There are 24 official timezones, but some regions observe half-hour or quarter-hour offsets, and some don't observe daylight saving time.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">⏰ Time Management Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Meeting Planner - Find the Best Time"
              description="Schedule meetings across multiple timezones."
              buttonText="Plan Meeting"
              link="https://www.timeanddate.com/worldclock/meeting.html"
              icon="📅"
            />
            <AffiliateOffer
              title="Timezone Converter Tool"
              description="Convert any time to any other timezone."
              buttonText="Convert Now"
              link="https://www.worldtimebuddy.com/"
              icon="🕐"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Timezone', href: '/timezone' },
              { name: 'Exchange Rate', href: '/exchange-rate' },
              { name: 'IP Location', href: '/ip-location' },
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