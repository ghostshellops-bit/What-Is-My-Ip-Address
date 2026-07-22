'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Shield, Network, Wifi, Globe, BookOpen, Code2, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'IP Tools', href: '/ip-lookup', icon: <Wifi size={16} /> },
    { name: 'Security', href: '/vpn-checker', icon: <Shield size={16} /> },
    { name: 'Network', href: '/asn-lookup', icon: <Network size={16} /> },
    { name: 'Website Tools', href: '/website-screenshot', icon: <Globe size={16} /> },
    { name: 'Learning', href: '/learn', icon: <BookOpen size={16} /> },
    { name: 'Developers', href: '/developers', icon: <Code2 size={16} /> },
    { name: 'Admin', href: '/admin', icon: <Settings size={16} /> },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-ghost-dark/90 backdrop-blur-xl border-b border-ghost-cyan/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-ghost-cyan/50 group-hover:border-ghost-cyan transition-all shadow-glow-cyan">
              <Image
                src="/images/logo.png"
                alt="What Is My IP"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-orbitron font-bold text-ghost-cyan leading-none">
                WHAT IS<span className="text-white"> MY IP </span>
              </div>
              <div className="text-[8px] tracking-[0.2em] text-gray-400 font-mono">
                PRIVACY·SECURITY·NETWORK
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-mono text-gray-400 hover:text-ghost-cyan transition-all duration-300 rounded-lg hover:bg-ghost-cyan/5 border border-transparent hover:border-ghost-cyan/20"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-ghost-cyan hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#05050A] backdrop-blur-xl border-b border-ghost-cyan/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-mono text-gray-400 hover:text-ghost-cyan hover:bg-ghost-cyan/5 rounded-lg transition-all duration-300 border border-transparent hover:border-ghost-cyan/20"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}