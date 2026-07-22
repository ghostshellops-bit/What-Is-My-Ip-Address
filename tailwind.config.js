/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        'ghost-dark': '#05050A',
        'ghost-cyan': '#00F0FF',
        'ghost-red': '#FF0040',
        'ghost-green': '#00FF41',
        'ghost-purple': '#9B59B6',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -5px rgba(0, 240, 255, 0.3)',
        'glow-red': '0 0 40px -5px rgba(255, 0, 64, 0.4)',
        'glow-green': '0 0 40px -5px rgba(0, 255, 65, 0.3)',
      },
    },
  },
  plugins: [],
}