'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Eye, EyeOff, Key, Lock, Activity, Server, Users, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showKeys, setShowKeys] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        setIsLoggedIn(true)
      } else {
        setError('ACCESS DENIED: Invalid credentials')
      }
    } catch {
      setError('Connection error')
    } finally {
      setLoading(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ghost-dark">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-8 rounded-2xl w-full max-w-md border-ghost-red/50">
          <div className="text-center mb-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-ghost-cyan/50 mx-auto mb-4">
              <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
            </div>
            <h2 className="text-2xl font-orbitron text-ghost-cyan">WHAT IS MY IP</h2>
            <p className="text-xs text-gray-500 font-mono mt-1">🔐 Administrator Access</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access key..."
              className="w-full bg-black/50 border border-ghost-cyan/30 rounded-lg p-3 text-white font-mono focus:outline-none focus:border-ghost-cyan focus:shadow-glow-cyan transition-all"
              autoFocus
            />
            {error && <p className="text-ghost-red text-xs font-mono mt-2">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-ghost-red/20 border border-ghost-red/50 text-ghost-red font-bold py-3 rounded-lg hover:bg-ghost-red/30 transition-all flex items-center justify-center gap-2"
            >
              <Lock size={16} /> {loading ? 'AUTHENTICATING...' : 'UNLOCK TERMINAL'}
            </button>
          </form>
          <div className="mt-6 text-center text-[8px] text-gray-600 font-mono tracking-widest">☠️ POWERED BY GHOST SHELL</div>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-ghost-cyan/20 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-ghost-cyan/50">
              <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-1" />
            </div>
            <div>
              <h1 className="text-2xl font-orbitron text-ghost-cyan">CONTROL CENTER</h1>
              <p className="text-[10px] text-gray-500 font-mono">Ghost Shell administration dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-ghost-green"><CheckCircle size={12} /> SYSTEM ONLINE</span>
            <button onClick={() => setIsLoggedIn(false)} className="text-ghost-red hover:text-white transition-colors">LOGOUT</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-4 rounded-xl border-ghost-cyan/10">
            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono"><Users size={14} /> VISITORS TODAY</div>
            <div className="text-2xl font-orbitron text-ghost-cyan">1,687</div>
          </div>
          <div className="glass-card p-4 rounded-xl border-ghost-cyan/10">
            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono"><Activity size={14} /> API HEALTH</div>
            <div className="text-sm font-mono text-yellow-400">⚠️ Partial</div>
          </div>
          <div className="glass-card p-4 rounded-xl border-ghost-cyan/10">
            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono"><Server size={14} /> IPQS BALANCE</div>
            <div className="text-xl font-orbitron text-ghost-green">4,500</div>
          </div>
          <div className="glass-card p-4 rounded-xl border-ghost-cyan/10 bg-ghost-red/5">
            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono"><Shield size={14} /> BRAND</div>
            <div className="text-sm font-orbitron text-ghost-red">☠️ GHOST SHELL</div>
          </div>
        </div>

        {/* API Keys */}
        <div className="glass-card p-6 rounded-2xl border-ghost-cyan/10 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-orbitron flex items-center gap-2"><Key size={18} /> KEY MANAGEMENT</h2>
            <button onClick={() => setShowKeys(!showKeys)} className="text-xs text-gray-400 hover:text-ghost-cyan flex items-center gap-1 transition-colors">
              {showKeys ? <EyeOff size={14} /> : <Eye size={14} />} {showKeys ? 'HIDE' : 'REVEAL'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono">
            <div className="flex justify-between border-b border-white/5 py-2"><span className="text-gray-400">IPQS</span> <span className="text-ghost-cyan">{showKeys ? '6VTg22weLWhrx3...' : '•••••••••••••'}</span></div>
            <div className="flex justify-between border-b border-white/5 py-2"><span className="text-gray-400">IPINFO</span> <span className="text-ghost-cyan">{showKeys ? '4f43a800ee971d' : '••••••••••••'}</span></div>
            <div className="flex justify-between border-b border-white/5 py-2"><span className="text-gray-400">ABSTRACT IP</span> <span className="text-ghost-cyan">{showKeys ? '3aaa40a5a13442...' : '••••••••••••'}</span></div>
            <div className="flex justify-between border-b border-white/5 py-2"><span className="text-gray-400">IPGEOLOCATION</span> <span className="text-ghost-cyan">{showKeys ? '80e5d400cfcc4e' : '••••••••••••'}</span></div>
          </div>
          <div className="mt-4 text-xs text-ghost-green flex items-center gap-2"><CheckCircle size={12} /> Admin Password: Configured</div>
        </div>

        {/* Ghost Shell Footer */}
        <div className="text-center py-8 border-t border-ghost-cyan/10">
          <div className="text-2xl font-orbitron text-ghost-red tracking-widest flex items-center justify-center gap-3">
            <span>☠️</span> POWERED BY GHOST SHELL <span>☠️</span>
          </div>
          <div className="text-[10px] text-gray-600 mt-2 font-mono">Ghost Shell Networks © 2026</div>
        </div>
      </div>
    </main>
  )
}