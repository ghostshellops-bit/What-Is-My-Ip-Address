'use client';

import { useState } from 'react';
import { useToast } from './Toast';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Mail, CheckCircle, XCircle } from 'lucide-react';
import AdBanner from './AdBanner';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subLoading, setSubLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast('Please enter your email address', 'error');
      return;
    }

    // Simple email validation
    if (!email.includes('@') || !email.includes('.')) {
      toast('Please enter a valid email address', 'error');
      return;
    }

    setSubLoading(true);
    
    try {
      const message = `📧 New Newsletter Subscription\n\n📧 Email: ${email}\n🕐 Time: ${new Date().toLocaleString()}`;
      
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        toast('🎉 Thank you for subscribing!', 'success');
        setEmail('');
      } else {
        toast('Subscription failed. Please try again.', 'error');
      }
    } catch {
      toast('Network error. Please try again.', 'error');
    } finally {
      setSubLoading(false);
    }
  };

  return (
    <footer className="relative border-t border-ghost-cyan/10 bg-ghost-dark/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-6">
        
        {/* Footer Ad Banner */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-ghost-cyan/30 shadow-glow-cyan">
                <Image
                  src="/images/logo.png"
                  alt="What Is My IP"
                  fill
                  className="object-contain p-1"
                  loading="eager"  // ✅ ADDED – loads immediately
                  sizes="56px"      // ✅ ADDED – prevents oversized image
                />
              </div>
              <div>
                <div className="text-xl font-orbitron font-bold text-ghost-cyan leading-none">
                  WHATIS<span className="text-white">MY</span>
                </div>
                <div className="text-[10px] tracking-[0.3em] text-gray-400 font-mono">
                  PRIVACY·SECURITY·NETWORK
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-mono max-w-md">
              Advanced IP intelligence, security analysis, network information, and privacy monitoring platform.
            </p>
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1">
                <Shield size={12} className="text-ghost-cyan" />
                Secure Connection
              </span>
              <span className="text-ghost-red text-xl font-orbitron tracking-widest animate-pulse">
                ☠️
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-4">TOOLS</h4>
            <ul className="space-y-2 text-sm font-mono">
              <li><Link href="/ip-lookup" className="text-gray-400 hover:text-ghost-cyan transition-colors">IP Lookup</Link></li>
              <li><Link href="/vpn-checker" className="text-gray-400 hover:text-ghost-cyan transition-colors">VPN Checker</Link></li>
              <li><Link href="/dns-leak-test" className="text-gray-400 hover:text-ghost-cyan transition-colors">DNS Leak Test</Link></li>
              <li><Link href="/asn-lookup" className="text-gray-400 hover:text-ghost-cyan transition-colors">ASN Lookup</Link></li>
              <li><Link href="/speed-test" className="text-gray-400 hover:text-ghost-cyan transition-colors">Speed Test</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm font-mono">
              <li><Link href="/learn" className="text-gray-400 hover:text-ghost-cyan transition-colors">Learning Center</Link></li>
              <li><Link href="/developers" className="text-gray-400 hover:text-ghost-cyan transition-colors">Developer API</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-ghost-cyan transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-ghost-cyan transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-ghost-cyan transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-ghost-cyan transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-4">NEWSLETTER</h4>
            
            {/* ✅ UPDATED NEWSLETTER FORM WITH TELEGRAM */}
            <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
                required
              />
              <button
                type="submit"
                disabled={subLoading}
                className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan text-sm font-mono py-2 rounded-lg hover:bg-ghost-cyan/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subLoading ? 'SUBMITTING...' : 'SUBSCRIBE'}
              </button>
            </form>
            <p className="text-[8px] text-gray-500 mt-2">No spam. Unsubscribe anytime.</p>

            {/* Legal Links */}
            <div className="mt-4 pt-4 border-t border-ghost-cyan/10">
              <h4 className="text-[10px] font-orbitron text-gray-500 tracking-widest mb-2">LEGAL</h4>
              <div className="flex flex-wrap gap-3 text-[10px] font-mono">
                <Link href="/privacy" className="text-gray-500 hover:text-ghost-cyan transition-colors">Privacy</Link>
                <Link href="/terms" className="text-gray-500 hover:text-ghost-cyan transition-colors">Terms</Link>
                <Link href="/cookies" className="text-gray-500 hover:text-ghost-cyan transition-colors">Cookies</Link>
                <Link href="/disclaimer" className="text-gray-500 hover:text-ghost-cyan transition-colors">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-ghost-cyan/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-gray-600 font-mono">
            © 2026 What Is My IP. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-ghost-red font-orbitron tracking-widest">
              ☠️ POWERED BY GHOST SHELL
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}