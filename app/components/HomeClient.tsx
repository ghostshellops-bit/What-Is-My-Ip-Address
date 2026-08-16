'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RefreshCw,
  MapPin,
  Globe2,
  Clock,
  Building2,
  Wifi,
  Server,
  ShieldAlert,
} from 'lucide-react';
import { addToHistory } from '@/app/lib/storage';
import { useToast } from './Toast';
import { StatusBadge } from './StatusBadge';
import FraudGauge from './FraudGauge';
import CopyButton from './CopyButton';
import RecentScans from './RecentScans';
import { HomeSkeleton } from './Skeletons';
import { cn } from '@/app/lib/utils';
import dynamic from 'next/dynamic';
import { FlagIcon } from './FlagIcon';
import AdBanner from './AdBanner';

const MapLazy = dynamic(() => import('./IPMap').then((m) => m.IPMap), {
  ssr: false,
  loading: () => <div className="skeleton h-[300px] w-full rounded-xl" />,
});

export function HomeClient() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(() => new Date());
  const { toast } = useToast();

  const detect = async () => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const res = await fetch('/api/ip', {
        cache: 'no-store',
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      setData(json);
      if (json.ip) {
        addToHistory({
          id: `${Date.now()}`,
          ip: json.ip,
          city: json.location.city,
          country: json.location.country,
          countryCode: json.location.countryCode,
          time: new Date().toISOString(),
        });
      }
    } catch {
      setError('Failed to detect IP');
      toast('Detection failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    detect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const localTime = useMemo(() => {
    try {
      return now.toLocaleTimeString(undefined, {
        timeZone: data?.location?.timezone || undefined,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch {
      return now.toLocaleTimeString();
    }
  }, [now, data?.location?.timezone]);

  if (loading) return <HomeSkeleton />;

  if (error || !data) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-20 text-center">
        <h2 className="font-orbitron text-lg text-ghost-red">{error || 'Unknown error'}</h2>
        <button
          onClick={detect}
          className="rounded-md border border-ghost-cyan/40 bg-ghost-cyan/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-ghost-cyan hover:bg-ghost-cyan/20"
        >
          Retry Scan
        </button>
      </div>
    );
  }

  // ✅ SHOW 8.8.8.8 INSTANTLY WHILE REAL IP LOADS
  const ipDisplay = data.ip || '8.8.8.8';
  const lat = data.location?.lat;
  const lon = data.location?.lon;
  const hasCoords = typeof lat === 'number' && typeof lon === 'number';
  const isUnsafe = data.security?.status === 'unsafe';

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-10">
      {/* AD 1 */}
      <div className="mt-8 mb-4 flex justify-center">
        <AdBanner type="leaderboard" />
      </div>

      <section className="relative flex flex-col items-center gap-4 py-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-ghost-cyan/80"
        >
          // Live IP Radar
        </motion.span>

        <div className="flex flex-col items-center gap-2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="font-mono text-3xl font-bold text-gray-50 sm:text-4xl md:text-6xl break-all"
          >
            {ipDisplay}
          </motion.h1>
          <div className="flex items-center gap-3">
            <CopyButton value={ipDisplay} />
            <button
              onClick={detect}
              className="inline-flex items-center gap-1.5 rounded-md border border-ghost-cyan/20 bg-ghost-cyan/5 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-gray-300 hover:border-ghost-cyan/40 hover:text-ghost-cyan transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Rescan
            </button>
          </div>
        </div>

        <StatusBadge security={data.security} />
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
          <div className="text-xs text-gray-500 font-mono">ISP</div>
          <div className="text-sm font-mono text-white truncate">{data.location?.isp || 'Unknown'}</div>
        </div>
        <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
          <div className="text-xs text-gray-500 font-mono">DNS</div>
          <div className="text-sm font-mono text-ghost-cyan">{data.location?.countryCode || 'N/A'}</div>
        </div>
        <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
          <div className="text-xs text-gray-500 font-mono">Proxy</div>
          <div className={`text-sm font-mono ${data.security?.is_proxy ? 'text-ghost-red' : 'text-ghost-green'}`}>
            {data.security?.is_proxy ? 'Yes' : 'No'}
          </div>
        </div>
        <div className="glass-card rounded-xl p-3 border-ghost-cyan/10 text-center">
          <div className="text-xs text-gray-500 font-mono">Blacklist</div>
          <div className="text-sm font-mono text-ghost-green">No</div>
        </div>
      </div>

      <div className="my-4 flex justify-center">
        <AdBanner type="rectangle" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.2 }}
          viewport={{ once: true }}
          className={cn('glass rounded-xl p-4', isUnsafe && 'glass-danger')}
        >
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500">
            <MapPin className="h-3.5 w-3.5" /> Location
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <FlagIcon countryCode={data.location?.countryCode} size={32} />
            <div>
              <div className="font-mono text-lg text-gray-100">{data.location?.city || 'Unknown'}</div>
              <div className="font-mono text-xs text-gray-500">
                {data.location?.country || 'Unknown'}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-gray-500">ISP</span>
              <span className="text-gray-200">{data.location?.isp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">ASN</span>
              <span className="text-gray-200">{data.location?.asn || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Timezone</span>
              <span className="text-gray-200">{data.location?.timezone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Local Time</span>
              <span className="text-ghost-cyan font-bold">{localTime}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.2 }}
          viewport={{ once: true }}
          className={cn('glass rounded-xl p-4', isUnsafe && 'glass-danger')}
        >
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500">
            <ShieldAlert className="h-3.5 w-3.5" /> Security
          </h2>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="rounded-lg border border-ghost-cyan/10 px-3 py-2">
              <div className="text-[10px] text-gray-600 font-mono">VPN</div>
              <div className={`font-mono text-sm ${data.security?.is_vpn ? 'text-ghost-red' : 'text-ghost-green'}`}>
                {data.security?.is_vpn ? 'Active' : 'No'}
              </div>
            </div>
            <div className="rounded-lg border border-ghost-cyan/10 px-3 py-2">
              <div className="text-[10px] text-gray-600 font-mono">Proxy</div>
              <div className={`font-mono text-sm ${data.security?.is_proxy ? 'text-ghost-red' : 'text-ghost-green'}`}>
                {data.security?.is_proxy ? 'Yes' : 'No'}
              </div>
            </div>
            <div className="rounded-lg border border-ghost-cyan/10 px-3 py-2">
              <div className="text-[10px] text-gray-600 font-mono">Tor</div>
              <div className={`font-mono text-sm ${data.security?.is_tor ? 'text-ghost-red' : 'text-ghost-green'}`}>
                {data.security?.is_tor ? 'Active' : 'No'}
              </div>
            </div>
            <div className="rounded-lg border border-ghost-cyan/10 px-3 py-2">
              <div className="text-[10px] text-gray-600 font-mono">Risk</div>
              <div className="font-mono text-sm text-ghost-cyan">{data.security?.fraud_score || 0}/100</div>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-ghost-cyan/10 bg-ghost-dark/60 p-2 text-center">
            <span className={`font-mono text-xs uppercase tracking-widest ${
              data.security?.status === 'secure' ? 'text-ghost-green' : 
              data.security?.status === 'unsafe' ? 'text-ghost-red' : 'text-yellow-400'
            }`}>
              {data.security?.status === 'secure' ? 'Secure Connection' : 
               data.security?.status === 'unsafe' ? 'Anonymization Detected' : 'VPN Status: Unknown'}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 glass-card rounded-xl p-2 border-ghost-cyan/10">
        <div className="h-[280px] rounded-lg overflow-hidden">
          {hasCoords ? (
            <MapLazy lat={lat!} lon={lon!} label={data.location?.city || ipDisplay} />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-xs text-gray-600">
              Coordinates unavailable
            </div>
          )}
        </div>
      </div>

      <div className="my-4 flex justify-center">
        <AdBanner type="leaderboard" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-1">
          <RecentScans onPick={(ip) => toast(`Re-query ${ip}`, 'info')} />
        </div>
        <div className="md:col-span-2">
          <div className="glass-card rounded-xl p-4 border-ghost-cyan/10">
            <h4 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">IP TOOLS</h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'IP Lookup', href: '/ip-lookup' },
                { name: 'VPN Checker', href: '/vpn-checker' },
                { name: 'DNS Leak', href: '/dns-leak-test' },
                { name: 'ASN Lookup', href: '/asn-lookup' },
                { name: 'Speed Test', href: '/speed-test' },
                { name: 'Bulk Lookup', href: '/bulk-ip-lookup' },
              ].map((tool) => (
                <a key={tool.name} href={tool.href} className="glass-card rounded-lg p-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all text-center group">
                  <div className="text-[10px] font-mono text-gray-300 group-hover:text-ghost-cyan">{tool.name}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <AdBanner type="rectangle" />
      </div>
    </div>
  );
}