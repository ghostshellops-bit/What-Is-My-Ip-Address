'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
  glitch?: boolean
}

export default function GlitchText({ text, className = '', glitch = false }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    if (glitch) {
      setIsGlitching(true)
      const timer = setTimeout(() => setIsGlitching(false), 400)
      return () => clearTimeout(timer)
    }
  }, [glitch])

  return (
    <motion.span
      className={className}
      animate={isGlitching ? {
        x: [-3, 3, -2, 2, 0],
        opacity: [1, 0.8, 1, 0.9, 1],
      } : {}}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {text}
    </motion.span>
  )
}