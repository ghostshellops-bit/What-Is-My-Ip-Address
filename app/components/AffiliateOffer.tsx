'use client'

import Link from 'next/link'

interface AffiliateOfferProps {
  title: string
  description: string
  buttonText: string
  link: string
  icon?: string
}

export default function AffiliateOffer({
  title,
  description,
  buttonText,
  link,
  icon = '🛡️',
}: AffiliateOfferProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="glass-card rounded-xl p-4 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group">
        <div className="flex items-start gap-3">
          <div className="text-2xl">{icon}</div>
          <div className="flex-1">
            <h4 className="text-sm font-orbitron text-ghost-cyan group-hover:text-white transition-colors">{title}</h4>
            <p className="text-xs text-gray-400 font-mono mt-1">{description}</p>
            <div className="mt-2 text-xs text-ghost-cyan flex items-center gap-1">
              {buttonText} <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}