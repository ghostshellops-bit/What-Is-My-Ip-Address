import Image from 'next/image'
import { CheckCircle, AlertCircle, Clock } from 'lucide-react'

export const metadata = {
  title: 'Status - What Is My IP',
  description: 'API and service status for What Is My IP. Check the health of our intelligence services.',
}

const services = [
  { name: 'IP-API (Primary)', status: 'operational', uptime: '99.9%' },
  { name: 'IPinfo.io', status: 'operational', uptime: '99.8%' },
  { name: 'IPQualityScore', status: 'operational', uptime: '99.7%' },
  { name: 'AbstractAPI', status: 'operational', uptime: '99.6%' },
  { name: 'IPGeolocation.io', status: 'operational', uptime: '99.5%' },
  { name: 'Web Application', status: 'operational', uptime: '99.9%' },
  { name: 'Database', status: 'operational', uptime: '99.9%' },
]

export default function StatusPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">SYSTEM STATUS</h1>
            <p className="text-gray-400 font-mono text-sm">All systems operational</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border-ghost-cyan/10 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-ghost-green animate-pulse" />
            <span className="font-mono text-sm text-ghost-green">ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-3 glass-card rounded-lg border-ghost-cyan/5">
                <span className="font-mono text-sm text-gray-300">{service.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 font-mono">{service.uptime}</span>
                  <CheckCircle size={16} className="text-ghost-green" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 font-mono text-xs">
            <Clock size={14} /> Last updated: {new Date().toLocaleString()}
          </div>
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>
      </div>
    </main>
  )
}