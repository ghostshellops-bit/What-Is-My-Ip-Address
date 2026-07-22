'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge as GaugeIcon, Play } from 'lucide-react';
import { cn } from '@/app/lib/utils';

const SIZE = 180;
const STROKE = 12;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

type Phase = 'idle' | 'ping' | 'download' | 'upload' | 'done';
const MAX = { ping: 200, download: 1000, upload: 500 };

function Gauge({
  label,
  value,
  unit,
  max,
  active,
}: {
  label: string;
  value: number;
  unit: string;
  max: number;
  active: boolean;
}) {
  const pct = Math.min(1, value / max);
  const offset = CIRC - pct * CIRC;
  const color = active ? '#00f0ff' : value > 0 ? '#00ff41' : '#181826';

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <circle cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none" stroke="#10101c" strokeWidth={STROKE} />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          fill="none"
          stroke={color}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          style={{ transition: 'stroke-dashoffset 0.2s linear, stroke 0.3s' }}
        />
        <text x="50%" y="48%" textAnchor="middle" className="fill-gray-100 font-mono" style={{ fontSize: 28, fontWeight: 700 }}>
          {Math.round(value)}
        </text>
        <text x="50%" y="60%" textAnchor="middle" className="fill-gray-500 font-mono" style={{ fontSize: 10, letterSpacing: 2 }}>
          {unit}
        </text>
      </svg>
      <span className={cn('flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest', active ? 'text-ghost-cyan' : 'text-gray-500')}>
        <GaugeIcon className="h-3.5 w-3.5" /> {label}
      </span>
    </div>
  );
}

export function SpeedTestClient() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [ping, setPing] = useState(0);
  const [download, setDownload] = useState(0);
  const [upload, setUpload] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);

  const animateTo = (setter: (n: number) => void, target: number, duration: number, done: () => void) => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 2.5);
      const jitter = (Math.random() - 0.5) * target * 0.08;
      setter(Math.max(0, target * eased + jitter));
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else { setter(target); done(); }
    };
    raf.current = requestAnimationFrame(tick);
  };

  const start = () => {
    setPhase('ping');
    setPing(0); setDownload(0); setUpload(0);
    const pingTarget = 8 + Math.random() * 60;
    const dlTarget = 80 + Math.random() * 800;
    const ulTarget = 30 + Math.random() * 350;

    animateTo(setPing, pingTarget, 1500, () => {
      setPhase('download');
      animateTo(setDownload, dlTarget, 2500, () => {
        setPhase('upload');
        animateTo(setUpload, ulTarget, 2500, () => setPhase('done'));
      });
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <header className="mb-8 text-center">
        <h1 className="font-orbitron text-2xl font-bold text-gray-100 sm:text-3xl">
          SPEED <span className="text-ghost-cyan">TEST</span>
        </h1>
        <p className="mt-2 font-mono text-xs text-gray-500">Simulated diagnostic with animated gauges.</p>
      </header>

      <div className="flex flex-col items-center gap-8">
        <motion.button
          onClick={start}
          disabled={phase !== 'idle' && phase !== 'done'}
          whileTap={{ scale: 0.96 }}
          className={cn(
            'group relative flex h-44 w-44 items-center justify-center rounded-full border-2 transition',
            phase === 'idle' || phase === 'done' ? 'border-ghost-cyan/60 bg-ghost-cyan/10 hover:bg-ghost-cyan/20' : 'border-ghost-cyan/20 bg-ghost-dark/50'
          )}
        >
          {(phase === 'idle' || phase === 'done') && (
            <span className="pointer-events-none absolute inset-0 animate-pulse rounded-full bg-ghost-cyan/20" />
          )}
          <span className="relative flex items-center gap-2 font-orbitron text-lg font-bold uppercase tracking-widest text-ghost-cyan">
            <Play className="h-5 w-5" />
            {phase === 'idle' ? 'START' : phase === 'done' ? 'AGAIN' : '…'}
          </span>
        </motion.button>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          <Gauge label="Ping" value={ping} unit="ms" max={MAX.ping} active={phase === 'ping'} />
          <Gauge label="Download" value={download} unit="Mbps" max={MAX.download} active={phase === 'download'} />
          <Gauge label="Upload" value={upload} unit="Mbps" max={MAX.upload} active={phase === 'upload'} />
        </div>

        <div className="font-mono text-xs uppercase tracking-widest text-gray-500">
          Status: <span className="text-ghost-cyan">
            {phase === 'idle' && 'Ready'}
            {phase === 'ping' && 'Measuring latency…'}
            {phase === 'download' && 'Downloading…'}
            {phase === 'upload' && 'Uploading…'}
            {phase === 'done' && 'Test complete'}
          </span>
        </div>
      </div>
    </div>
  );
}