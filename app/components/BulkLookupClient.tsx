'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Trash2, Download } from 'lucide-react';
import { useToast } from './Toast';

type Result = {
  ip: string;
  country: string;
  city: string;
  isp: string;
  org: string;
  asn: string;
};

export function BulkLookupClient() {
  const [ips, setIps] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const lookup = async () => {
    const list = ips.split('\n').map((s) => s.trim()).filter(Boolean);
    if (list.length === 0) {
      toast('Please enter at least one IP', 'error');
      return;
    }
    if (list.length > 10) {
      toast('Maximum 10 IPs allowed', 'error');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ips: list }),
      });
      const data = await res.json();
      if (data.results) {
        setResults(data.results);
        toast('Bulk lookup complete', 'success');
      } else {
        toast('Failed to lookup IPs', 'error');
      }
    } catch {
      toast('Error', 'error');
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setIps('');
    setResults([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-orbitron text-2xl font-bold text-gray-100 sm:text-3xl">
          BULK IP <span className="text-ghost-cyan">LOOKUP</span>
        </h1>
        <p className="mt-2 font-mono text-xs text-gray-500">Paste up to 10 IPs, one per line</p>
      </header>

      <div className="glass rounded-xl p-6 border-ghost-cyan/10">
        <textarea
          value={ips}
          onChange={(e) => setIps(e.target.value)}
          placeholder="8.8.8.8\n1.1.1.1\n192.168.1.1"
          rows={6}
          className="w-full bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg p-3 font-mono text-sm text-white focus:outline-none focus:border-ghost-cyan"
        />
        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={lookup}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan px-6 py-2 rounded-lg hover:bg-ghost-cyan/20 transition-colors font-mono text-sm"
          >
            <Search size={16} /> {loading ? 'Scanning...' : 'Scan'}
          </button>
          <button
            onClick={clear}
            className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-mono text-sm"
          >
            <Trash2 size={16} /> Clear
          </button>
          {results.length > 0 && (
            <button className="inline-flex items-center gap-2 bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan px-6 py-2 rounded-lg hover:bg-ghost-cyan/20 transition-colors font-mono text-sm">
              <Download size={16} /> CSV
            </button>
          )}
        </div>
      </div>

      {results.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="border-b border-ghost-cyan/20">
                  <th className="text-left py-2 px-3 text-gray-500 text-xs">IP</th>
                  <th className="text-left py-2 px-3 text-gray-500 text-xs">Country</th>
                  <th className="text-left py-2 px-3 text-gray-500 text-xs">City</th>
                  <th className="text-left py-2 px-3 text-gray-500 text-xs">ISP</th>
                  <th className="text-left py-2 px-3 text-gray-500 text-xs">ASN</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.ip} className="border-b border-ghost-cyan/5">
                    <td className="py-2 px-3 text-ghost-cyan">{r.ip}</td>
                    <td className="py-2 px-3 text-white">{r.country}</td>
                    <td className="py-2 px-3 text-white">{r.city}</td>
                    <td className="py-2 px-3 text-white">{r.isp}</td>
                    <td className="py-2 px-3 text-white">{r.asn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}