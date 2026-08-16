'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import dynamic from 'next/dynamic';

// Ad components
import NativeBanner from '@/components/Ads/NativeBanner';
import Banner728x90 from '@/components/Ads/Banner728x90';
import Banner300x250 from '@/components/Ads/Banner300x250';
import Banner160x300 from '@/components/Ads/Banner160x300';

const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false, loading: () => <div className="skeleton h-64 w-full rounded-xl" /> }
);

// Helper to get flag emoji fallback
const getFlagEmoji = (countryCode: string) => {
  if (!countryCode) return '🏳️';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export default function IPLocationPage() {
  const [ipInput, setIpInput] = useState('8.8.8.8');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Location state
  const [country, setCountry] = useState('United States');
  const [countryCode, setCountryCode] = useState('US');
  const [city, setCity] = useState('Mountain View');
  const [region, setRegion] = useState('California');
  const [lat, setLat] = useState(37.386);
  const [lon, setLon] = useState(-122.084);
  const [timezone, setTimezone] = useState('America/Los_Angeles');
  const [isp, setIsp] = useState('Google LLC');
  const [currency, setCurrency] = useState('USD');

  const lookupIP = async (ip: string) => {
    if (!ip.trim()) {
      setError('Please enter a valid IP address');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/ip?ip=${encodeURIComponent(ip.trim())}`);
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to fetch location');
      }

      setCountry(data.country || 'Unknown');
      setCountryCode(data.countryCode || 'XX');
      setCity(data.city || 'Unknown');
      setRegion(data.region || 'Unknown');
      setLat(data.lat || 0);
      setLon(data.lon || 0);
      setTimezone(data.timezone || 'Unknown');
      setIsp(data.isp || 'Unknown');
      setCurrency(data.currency || 'Unknown');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    lookupIP(ipInput);
  };

  const flagUrl = countryCode
    ? `https://flagcdn.com/${countryCode.toLowerCase()}.svg`
    : null;

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">IP LOCATION</h1>
            <p className="text-gray-400 font-mono text-sm">Find the geographical location of any IP address</p>
          </div>
        </div>

        {/* Top Banner */}
        <div className="mb-6">
          <Banner728x90 />
        </div>

        {/* Main + Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Main Content (3/4) */}
          <div className="lg:col-span-3">

            {/* Tool Interface */}
            <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">IP Geolocation Tool</h2>
                <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                  Enter any IP address to find its geographical location, including city, region, country, coordinates, and timezone.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Enter IP address (e.g., 8.8.8.8)"
                    className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                    value={ipInput}
                    onChange={(e) => setIpInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Search size={16} /> {loading ? 'SEARCHING...' : 'LOCATE'}
                  </button>
                </form>

                {error && (
                  <div className="mt-3 text-ghost-red text-sm font-mono">⚠️ {error}</div>
                )}
              </div>

              {/* Location Display */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
                  {flagUrl ? (
                    <img
                      src={flagUrl}
                      alt={country}
                      className="w-8 h-6 mx-auto object-cover rounded border border-gray-700"
                    />
                  ) : (
                    <div className="text-2xl mb-1">{getFlagEmoji(countryCode)}</div>
                  )}
                  <div className="text-xs text-gray-500 font-mono">Country</div>
                  <div className="text-sm font-mono text-white">{country}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
                  <div className="text-2xl mb-1">🌆</div>
                  <div className="text-xs text-gray-500 font-mono">City</div>
                  <div className="text-sm font-mono text-white">{city}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
                  <div className="text-2xl mb-1">📌</div>
                  <div className="text-xs text-gray-500 font-mono">Coordinates</div>
                  <div className="text-sm font-mono text-ghost-cyan">
                    {typeof lat === 'number' ? lat.toFixed(3) : lat}°N, {typeof lon === 'number' ? lon.toFixed(3) : lon}°W
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
                  <div className="text-2xl mb-1">🕐</div>
                  <div className="text-xs text-gray-500 font-mono">Timezone</div>
                  <div className="text-sm font-mono text-white">{timezone}</div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 h-64 md:h-80 rounded-xl overflow-hidden border border-ghost-cyan/10">
                <Map lat={lat} lon={lon} city={city} country={country} />
              </div>

              <div className="mt-4 flex justify-center gap-3 flex-wrap">
                <div className="text-xs text-gray-500 font-mono">
                  📍 Accuracy: {loading ? 'Loading...' : 'High (99%)'}
                </div>
                <div className="text-xs text-gray-500 font-mono">|</div>
                <div className="text-xs text-gray-500 font-mono">
                  🔄 Last updated: {new Date().toLocaleString()}
                </div>
              </div>
            </div>

            {/* Native Banner inside content */}
            <div className="my-6">
              <NativeBanner />
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
                  <div className="text-sm font-mono text-white">{region}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                  <div className="text-xs text-gray-500 font-mono">Postal Code</div>
                  <div className="text-sm font-mono text-white">94043</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                  <div className="text-xs text-gray-500 font-mono">Latitude</div>
                  <div className="text-sm font-mono text-ghost-cyan">
                    {typeof lat === 'number' ? lat.toFixed(3) : lat}°N
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                  <div className="text-xs text-gray-500 font-mono">Longitude</div>
                  <div className="text-sm font-mono text-ghost-cyan">
                    {typeof lon === 'number' ? lon.toFixed(3) : lon}°W
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                  <div className="text-xs text-gray-500 font-mono">Currency</div>
                  <div className="text-sm font-mono text-white">{currency}</div>
                </div>
              </div>
            </div>

            {/* 300×250 Banner inside content */}
            <div className="my-6 flex justify-center">
              <Banner300x250 />
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

          </div>

          {/* Sidebar (1/4) – Skyscraper only on desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <div className="flex justify-center">
                <Banner160x300 />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-6">
          <Banner728x90 />
        </div>

        {/* Ghost Shell Footer */}
        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>

      </div>
    </main>
  );
}