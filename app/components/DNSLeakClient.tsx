'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/app/lib/utils';

export function DNSLeakClient() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<'clean' | 'leak' | null>(null);
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setScanning(true);
    setResult(null);
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        // Simulate result: sometimes leak, sometimes clean
        const leak = Math.random() > 0.6;
        setResult(leak ? 'leak' : 'clean');
        setScanning(false);
      }
    }, 300);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <header className="text-center mb-8">
        <h1 className="font-orbitron text-2xl font-bold text-gray-100 sm:text-3xl">
          DNS <span className="text-ghost-cyan">LEAK TEST</span>
        </h1>
        <p className="mt-2 font-mono text-xs text-gray-500">Detect if your DNS requests are exposed</p>
      </header>

      <div className="glass rounded-xl p-8 border-ghost-cyan/10">
        <button
          onClick={startScan}
          disabled={scanning}
          className={cn(
            'w-full py-3 rounded-lg font-mono text-sm uppercase tracking-widest transition-colors',
            scanning
              ? 'bg-ghost-cyan/10 text-ghost-cyan/50 cursor-not-allowed'
              : 'bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan hover:bg-ghost-cyan/20'
          )}
        >
          {scanning ? 'Scanning...' : 'Start DNS Leak Scan'}
        </button>

        {scanning && (
          <div className="mt-6">
            <div className="w-full bg-ghost-dark/50 rounded-full h-2">
              <div className="bg-ghost-cyan h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 font-mono text-xs text-gray-500 text-center">Analyzing DNS servers... {progress}%</p>
          </div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'mt-6 rounded-lg p-4 border flex items-center gap-3',
              result === 'clean'
                ? 'border-ghost-green/30 bg-ghost-green/5 text-ghost-green'
                : 'border-ghost-red/30 bg-ghost-red/5 text-ghost-red'
            )}
          >
            {result === 'clean' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            <span className="font-mono text-sm">
              {result === 'clean' ? '✅ No DNS leaks detected. Your connection is secure.' : '⚠️ DNS leak detected! Your ISP may be tracking your activity.'}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}