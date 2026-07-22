'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function SocialBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Check if user closed the ad before
    const closed = localStorage.getItem('socialBarClosed')
    if (closed === 'true') {
      setVisible(false)
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    localStorage.setItem('socialBarClosed', 'true')
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="glass-card rounded-t-xl border-t border-ghost-cyan/20 p-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          {/* AD CONTENT */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-xs text-gray-400 font-mono">
              📢 Adsterra Social Bar - Replace with your ad code
            </div>
          </div>
          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-ghost-cyan transition-colors"
            aria-label="Close ad"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}