'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Copy, RefreshCw, Network, Globe, Building } from 'lucide-react';
import { useToast } from '../components/Toast';
import AdBanner from '../components/AdBanner';

export default function ASNLookupClient() {
  const [ip, setIp] = useState('');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const lookup = async () => {
    if (!ip.trim()) {
      toast('Please enter an IP address', 'error');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/lookup?ip=${encodeURIComponent(ip.trim())}`);
      if (!res.ok) throw new Error('Lookup failed');
      const json = await res.json();
      setData(json);
      toast('ASN lookup complete', 'success');
    } catch (err) {
      setError('Failed to lookup ASN');
      toast('Lookup failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">ASN LOOKUP</h1>
            <p className="text-gray-400 font-mono text-sm">Find Autonomous System Number information</p>
          </div>
        </div>

        <AdBanner type="leaderboard" className="mb-8" />

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="Enter IP address (e.g., 8.8.8.8)"
              className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
              onKeyDown={(e) => e.key === 'Enter' && lookup()}
            />
            <button
              onClick={lookup}
              disabled={loading}
              className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Search size={16} /> {loading ? 'LOOKING UP...' : 'LOOKUP'}
            </button>
          </div>

          {error && <p className="text-ghost-red text-sm font-mono text-center mt-4">{error}</p>}

          {data && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">ASN</div>
                <div className="text-sm font-mono text-ghost-cyan font-bold">{data.location.asn || 'Unknown'}</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Organization</div>
                <div className="text-sm font-mono text-white truncate">{data.location.organization}</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Network Prefix</div>
                <div className="text-sm font-mono text-white">{data.location.asn || 'N/A'}</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Registry</div>
                <div className="text-sm font-mono text-white">{data.location.countryCode || 'Unknown'}</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 col-span-2">
                <div className="text-xs text-gray-500 font-mono">ISP</div>
                <div className="text-sm font-mono text-white">{data.location.isp}</div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
                <div className="text-xs text-gray-500 font-mono">Country</div>
                <div className="text-sm font-mono text-white">{data.location.country}</div>
              </div>
            </div>
          )}
        </div>

        <AdBanner type="rectangle" className="my-8" />

        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'WHOIS Lookup', href: '/whois-lookup' },
              { name: 'ISP Lookup', href: '/isp-lookup' },
              { name: 'BGP Information', href: '/bgp-information' },
            ].map((tool) => (
              <a key={tool.name} href={tool.href} className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
                {tool.name} →
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>
      </div>
    </main>
  );
}