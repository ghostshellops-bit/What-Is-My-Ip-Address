'use client'
import { useEffect, useRef } from 'react'

interface AdUnitProps {
  slot?: string
  client?: string
  format?: string
  style?: React.CSSProperties
  className?: string
  height?: string
  width?: string
}

export default function AdUnit({
  slot = '',
  client = '',
  format = 'auto',
  style = { display: 'block' },
  className = '',
  height = 'auto',
  width = 'auto',
}: AdUnitProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error('Ad error:', e)
    }
  }, [])

  return (
    <div ref={ref} className={`ad-container ${className}`}>
      {client && slot ? (
        <ins
          className="adsbygoogle"
          style={{ ...style, height, width }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      ) : (
        <div className="min-h-[90px] flex items-center justify-center border border-ghost-cyan/10 rounded-xl bg-ghost-dark/30 text-xs text-gray-500 font-mono p-4">
          📢 Ad Space
        </div>
      )}
    </div>
  )
}