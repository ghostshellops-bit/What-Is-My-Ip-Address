interface SecurityBadgeProps {
  status: 'secure' | 'warning' | 'danger' | 'unknown'
  label: string
}

export default function SecurityBadge({ status, label }: SecurityBadgeProps) {
  const getStyles = () => {
    switch (status) {
      case 'secure':
        return 'border-ghost-green text-ghost-green bg-ghost-green/10'
      case 'warning':
        return 'border-yellow-400 text-yellow-400 bg-yellow-400/10'
      case 'danger':
        return 'border-ghost-red text-ghost-red bg-ghost-red/10 animate-pulse'
      default:
        return 'border-gray-500 text-gray-500 bg-gray-500/10'
    }
  }

  const getIcon = () => {
    switch (status) {
      case 'secure':
        return '🟢'
      case 'warning':
        return '🟡'
      case 'danger':
        return '🔴'
      default:
        return '⚪'
    }
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold ${getStyles()}`}>
      {getIcon()} {label}
    </span>
  )
}