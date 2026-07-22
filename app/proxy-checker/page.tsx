'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Shield, RefreshCw } from 'lucide-react';
import AdBanner from '../components/AdBanner';
import { useToast } from '../components/Toast';

export default function ProxyCheckerPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const checkProxy = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ip', { cache: 'no-store' });
      const json = await res.json();
      setData(json);
      toast('Proxy check complete', 'success');
    } catch {
      toast('Failed to check proxy', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkProxy();
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">PROXY CHECKER</h1>
            <p className="text-gray-400 font-mono text-sm">Detect if you are using a proxy</p>
          </div>
        </div>

        <AdBanner type="leaderboard" className="mb-8" />

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <button
              onClick={checkProxy}
              disabled={loading}
              className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> {loading ? 'SCANNING...' : 'CHECK PROXY'}
            </button>
          </div>

          {data && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
                <div className="text-xs text-gray-500 font-mono">Proxy</div>
                <div className={`font-bold font-mono ${data.security.is_proxy ? 'text-ghost-red' : 'text-ghost-green'}`}>
                  {data.security.is_proxy ? '⚠️ DETECTED' : '✅ CLEAN'}
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
                <div className="text-xs text-gray-500 font-mono">VPN</div>
                <div className={`font-bold font-mono ${data.security.is_vpn ? 'text-ghost-red' : 'text-ghost-green'}`}>
                  {data.security.is_vpn ? '⚠️ ACTIVE' : '✅ CLEAN'}
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 text-center">
                <div className="text-xs text-gray-500 font-mono">Tor</div>
                <div className={`font-bold font-mono ${data.security.is_tor ? 'text-ghost-red' : 'text-ghost-green'}`}>
                  {data.security.is_tor ? '⚠️ DETECTED' : '✅ CLEAN'}
                </div>
              </div>
            </div>
          )}
        </div>

        <AdBanner type="rectangle" className="my-8" />

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>
      </div>
    </main>
  );
}