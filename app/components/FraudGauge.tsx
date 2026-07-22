'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FraudGaugeProps {
  score: number
  size?: number
  strokeWidth?: number
}

export default function FraudGauge({ score, size = 120, strokeWidth = 8 }: FraudGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 100)
    return () => clearTimeout(timer)
  }, [score])

  const clampedScore = Math.min(Math.max(animatedScore, 0), 100)
  const offset = circumference - (clampedScore / 100) * circumference

  const getColor = (s: number) => {
    if (s > 75) return '#FF0040'
    if (s > 40) return '#FFAA00'
    return '#00FF41'
  }

  const getLabel = (s: number) => {
    if (s > 75) return 'HIGH RISK'
    if (s > 40) return 'MEDIUM RISK'
    return 'LOW RISK'
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1a1a2e"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Animated circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={getColor(clampedScore)}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDasharray: circumference, strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={clampedScore}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-orbitron font-bold"
            style={{ color: getColor(clampedScore) }}
          >
            {Math.round(clampedScore)}
          </motion.span>
          <span className="text-[10px] text-gray-500 font-mono tracking-wider">RISK</span>
        </div>
      </div>
      <div className="mt-2 text-xs font-mono text-gray-400">{getLabel(clampedScore)}</div>
    </div>
  )
}