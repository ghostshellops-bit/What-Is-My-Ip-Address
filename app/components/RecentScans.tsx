'use client';

import { useState, useEffect } from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { getHistory, clearHistory } from '@/app/lib/storage';

export default function RecentScans({ onPick }: { onPick?: (ip: string) => void }) {
  const [scans, setScans] = useState<any[]>([]);

  useEffect(() => {
    setScans(getHistory());
  }, []);

  const handleClear = () => {
    clearHistory();
    setScans([]);
  };

  if (scans.length === 0) {
    return (
      <div className="glass rounded-xl p-4 border-ghost-cyan/10 text-center">
        <p className="text-gray-500 font-mono text-xs">No recent scans</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-4 border-ghost-cyan/10">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-xs font-orbitron text-ghost-cyan tracking-widest">Recent Scans</h4>
        <button onClick={handleClear} className="text-xs text-gray-500 hover:text-ghost-red transition-colors flex items-center gap-1">
          <Trash2 size={12} /> Clear
        </button>
      </div>
      <ul className="space-y-2">
        {scans.map((scan) => (
          <li
            key={scan.id}
            className="flex items-center justify-between p-2 rounded-lg bg-ghost-dark/50 border border-ghost-cyan/5 hover:border-ghost-cyan/20 cursor-pointer transition-all"
            onClick={() => onPick?.(scan.ip)}
          >
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-ghost-cyan/50" />
              <span className="font-mono text-sm text-ghost-cyan">{scan.ip}</span>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              {scan.city}, {scan.country}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}