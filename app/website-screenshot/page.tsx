'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Globe, RefreshCw } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function WebsiteScreenshotPage() {
  const [url, setUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const loadPreview = () => {
    const trimmed = url.trim();
    if (!trimmed) return;
    let fullUrl = trimmed;
    if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
      fullUrl = 'https://' + fullUrl;
    }
    setPreviewUrl(fullUrl);
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" sizes="64px" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">WEBSITE PREVIEW</h1>
            <p className="text-gray-400 font-mono text-sm">Preview any website in an embedded frame</p>
          </div>
        </div>

        <AdBanner type="leaderboard" className="mb-6" />

        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., google.com)"
              className="flex-1 bg-ghost-dark/50 border border-ghost-cyan/20 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-ghost-cyan transition"
              onKeyDown={(e) => e.key === 'Enter' && loadPreview()}
            />
            <button
              onClick={loadPreview}
              className="bg-ghost-cyan/10 border border-ghost-cyan/30 text-ghost-cyan font-mono px-6 py-3 rounded-lg hover:bg-ghost-cyan/20 transition-all flex items-center justify-center gap-2"
            >
              <Globe size={16} /> LOAD
            </button>
          </div>

          {previewUrl && (
            <div className="mt-6 rounded-xl overflow-hidden border border-ghost-cyan/20 h-[500px] bg-ghost-dark/50">
              <iframe
                src={previewUrl}
                className="w-full h-full"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
                title="Website preview"
              />
            </div>
          )}
        </div>

        <AdBanner type="rectangle" className="my-6" />

        <div className="glass-card rounded-2xl p-6 border-ghost-cyan/10">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Website Analyzer', href: '/website-analyzer' },
              { name: 'IP Lookup', href: '/ip-lookup' },
              { name: 'WHOIS Lookup', href: '/whois-lookup' },
            ].map((tool) => (
              <a key={tool.name} href={tool.href} className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
                {tool.name} →
              </a>
            ))}
          </div>
        </div>

        <AdBanner type="leaderboard" className="mt-6" />

        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>
      </div>
    </main>
  );
}