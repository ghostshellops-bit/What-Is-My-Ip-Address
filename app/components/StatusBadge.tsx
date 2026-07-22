'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, ShieldQuestion } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import type { IPResult } from '@/app/lib/types';

export function StatusBadge({ security }: { security: IPResult['security'] }) {
  const isVpn = security.is_vpn || security.is_proxy || security.is_tor;
  const effective = security.status === 'unknown' ? 'unknown' : isVpn ? 'unsafe' : 'secure';

  const config = {
    secure: {
      label: 'SECURE',
      Icon: ShieldCheck,
      dot: 'bg-ghost-green',
      text: 'text-ghost-green',
      ring: 'border-ghost-green/40 bg-ghost-green/5',
    },
    unsafe: {
      label: 'UNSAFE',
      Icon: ShieldAlert,
      dot: 'bg-ghost-red',
      text: 'text-ghost-red',
      ring: 'border-ghost-red/40 bg-ghost-red/5',
    },
    unknown: {
      label: 'UNKNOWN',
      Icon: ShieldQuestion,
      dot: 'bg-yellow-400',
      text: 'text-yellow-400',
      ring: 'border-yellow-400/40 bg-yellow-400/5',
    },
  }[effective];

  const { Icon } = config;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest',
        config.ring,
        config.text
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className={cn('absolute inline-flex h-full w-full animate-ping rounded-full opacity-75', config.dot)} />
        <span className={cn('relative inline-flex h-2.5 w-2.5 rounded-full', config.dot)} />
      </span>
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </motion.div>
  );
}