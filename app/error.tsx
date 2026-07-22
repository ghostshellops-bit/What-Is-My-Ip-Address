'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RefreshCw, Home, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-ghost-dark px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-ghost-red/50 mx-auto mb-6">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div className="text-6xl font-orbitron font-bold text-ghost-red mb-4">⚠️</div>
          <h1 className="text-2xl font-orbitron text-ghost-red mb-2">SYSTEM ERROR</h1>
          <p className="text-gray-400 font-mono text-sm mb-2">Something went wrong. Please try again.</p>
          <p className="text-gray-500 font-mono text-xs mb-6">{error.message || 'Unknown error'}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 glass-card rounded-xl px-6 py-3 border-ghost-cyan/30 hover:border-ghost-cyan/60 transition-all hover:shadow-glow-cyan cursor-pointer group"
            >
              <RefreshCw size={18} className="text-ghost-cyan" />
              <span className="font-mono text-sm">Retry</span>
            </button>
            <Link href="/">
              <div className="inline-flex items-center gap-2 glass-card rounded-xl px-6 py-3 border-ghost-red/30 hover:border-ghost-red/60 transition-all hover:shadow-glow-red cursor-pointer group">
                <Home size={18} className="text-ghost-red" />
                <span className="font-mono text-sm">Home</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
          <div className="mt-8 text-xs text-gray-600 font-mono">☠️ POWERED BY GHOST SHELL</div>
        </motion.div>
      </div>
    </main>
  )
}