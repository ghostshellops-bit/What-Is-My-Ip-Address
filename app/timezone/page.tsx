import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Globe, MapPin, Sun, Moon, Search } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Timezone - Get Timezone Information & Current Time',
  description: 'Get timezone information. Check current time, UTC offset, and daylight saving time for any location.',
  keywords: 'timezone, current time, utc offset, time zone converter, world clock',
}

export default function TimezonePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">TIMEZONE</h1>
            <p className="text-gray-400 font-mono text-sm">Get timezone information and current time</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">🕐</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Timezone Intelligence</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Enter any location or IP to get timezone information, current time, UTC offset, and daylight saving status.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Enter location, city, or IP (e.g., New York or 8.8.8.8)"
                className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                defaultValue="New York"
              />
              <button className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> GET TIME
              </button>
            </div>

            {/* Results Display */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/30">
                <div className="text-xs text-gray-500 font-mono">Current Time</div>
                <div className="text-2xl font-orbitron text-ghost-cyan font-bold">10:24:32</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Timezone</div>
                <div className="text-sm font-mono text-white">America/New_York</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">UTC Offset</div>
                <div className="text-sm font-mono text-white">UTC -4</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">DST</div>
                <div className="text-sm font-mono text-yellow-400">Active</div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 text-sm bg-gray-800/50 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700 transition-all">
                <RefreshCw size={14} /> REFRESH
              </button>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* Timezone Details */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Timezone Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Clock size={14} /> Timezone</h3>
              <p className="text-sm font-mono text-white mt-1">Eastern Daylight Time</p>
              <p className="text-xs text-gray-400 font-mono">America/New_York</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><Sun size={14} /> Daylight Saving</h3>
              <p className="text-sm font-mono text-white mt-1">Active</p>
              <p className="text-xs text-gray-400 font-mono">Started: Mar 10, 2026</p>
            </div>
            <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
              <h3 className="text-xs font-orbitron text-ghost-cyan flex items-center gap-2"><MapPin size={14} /> Location</h3>
              <p className="text-sm font-mono text-white mt-1">New York, USA</p>
              <p className="text-xs text-gray-400 font-mono">Lat: 40.7128°N, Lon: 74.0060°W</p>
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
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is a timezone?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">A timezone is a region where the same standard time is used. There are 24 timezones around the world, each separated by 15 degrees of longitude.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is UTC offset?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">UTC offset is the difference in hours and minutes from Coordinated Universal Time (UTC). For example, New York is UTC -4 during daylight saving time.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">How does daylight saving time work?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Daylight saving time (DST) moves clocks forward by 1 hour during summer months to extend evening daylight. DST is observed in many countries but not all.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">⏰ Time Management Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="World Time Buddy"
              description="Schedule meetings across timezones with ease."
              buttonText="Try Now"
              link="https://www.worldtimebuddy.com/"
              icon="⏰"
            />
            <AffiliateOffer
              title="Time Zone Converter"
              description="Convert time between any two timezones."
              buttonText="Learn More"
              link="https://www.timeanddate.com/worldclock/converter.html"
              icon="🕐"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'World Clock', href: '/world-clock' },
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