import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, RefreshCw, DollarSign, Euro, PoundSterling, Globe, TrendingUp, TrendingDown } from 'lucide-react'
import AdBanner from '../components/AdBanner'
import AffiliateOffer from '../components/AffiliateOffer'

export const metadata = {
  title: 'Exchange Rate - Live Currency Exchange Rates',
  description: 'Currency exchange rates. Check live currency conversion and exchange rate information.',
  keywords: 'exchange rate, currency converter, live exchange rate, forex, currency conversion',
}

export default function ExchangeRatePage() {
  const rates = [
    { from: 'USD', to: 'EUR', rate: '0.93', change: '+0.5%', trend: 'up' },
    { from: 'USD', to: 'GBP', rate: '0.79', change: '-0.3%', trend: 'down' },
    { from: 'USD', to: 'JPY', rate: '149.87', change: '+1.2%', trend: 'up' },
    { from: 'USD', to: 'CAD', rate: '1.37', change: '+0.8%', trend: 'up' },
    { from: 'EUR', to: 'USD', rate: '1.07', change: '-0.5%', trend: 'down' },
    { from: 'GBP', to: 'USD', rate: '1.27', change: '+0.3%', trend: 'up' },
  ]

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">EXCHANGE RATE</h1>
            <p className="text-gray-400 font-mono text-sm">Live currency exchange rates</p>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="mb-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* Tool Interface */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <div className="text-center">
            <div className="text-6xl mb-4">💱</div>
            <h2 className="text-xl font-orbitron text-ghost-cyan mb-2">Currency Exchange Rates</h2>
            <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
              Live exchange rates for major currencies. Updated in real-time.
            </p>

            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 text-sm bg-ghost-cyan/10 hover:bg-ghost-cyan/20 px-4 py-2 rounded-full border border-ghost-cyan/30 transition-all">
                <RefreshCw size={14} /> REFRESH RATES
              </button>
            </div>
          </div>

          {/* Rates Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="border-b border-ghost-cyan/20">
                  <th className="text-left py-3 px-4 text-gray-500 text-xs">Currency Pair</th>
                  <th className="text-left py-3 px-4 text-gray-500 text-xs">Rate</th>
                  <th className="text-left py-3 px-4 text-gray-500 text-xs">Change</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate, index) => (
                  <tr key={index} className="border-b border-ghost-cyan/5 hover:bg-ghost-cyan/5 transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-ghost-cyan font-bold">{rate.from}</span>
                      <span className="text-gray-500"> / </span>
                      <span className="text-white">{rate.to}</span>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">{rate.rate}</td>
                    <td className="py-3 px-4">
                      <span className={`flex items-center gap-1 ${rate.trend === 'up' ? 'text-ghost-green' : 'text-ghost-red'}`}>
                        {rate.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        {rate.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500 font-mono">
            Rates updated: {new Date().toLocaleString()}
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="rectangle" />
        </div>

        {/* Currency Info */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Major Currencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <DollarSign size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-sm font-orbitron text-ghost-cyan">USD</h3>
              <p className="text-xs text-gray-400 font-mono">US Dollar</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <Euro size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-sm font-orbitron text-ghost-cyan">EUR</h3>
              <p className="text-xs text-gray-400 font-mono">Euro</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <PoundSterling size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-sm font-orbitron text-ghost-cyan">GBP</h3>
              <p className="text-xs text-gray-400 font-mono">British Pound</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center border-ghost-cyan/10">
              <Globe size={24} className="text-ghost-cyan mx-auto mb-2" />
              <h3 className="text-sm font-orbitron text-ghost-cyan">JPY</h3>
              <p className="text-xs text-gray-400 font-mono">Japanese Yen</p>
            </div>
          </div>
        </div>

        {/* 📢 Ad */}
        <div className="my-8 flex justify-center">
          <AdBanner type="leaderboard" />
        </div>

        {/* FAQ */}
        <div className="glass-card rounded-2xl p-8 border-ghost-cyan/10">
          <h2 className="text-xl font-orbitron text-ghost-cyan mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">What is an exchange rate?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">An exchange rate is the value of one currency expressed in terms of another currency. For example, 1 USD = 0.93 EUR.</p>
            </div>
            <div className="border-b border-ghost-cyan/10 pb-3">
              <h3 className="text-sm font-orbitron text-ghost-cyan">How often are exchange rates updated?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Exchange rates fluctuate constantly during market hours. Our tool provides up-to-date rates for major currencies.</p>
            </div>
            <div>
              <h3 className="text-sm font-orbitron text-ghost-cyan">What affects exchange rates?</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">Exchange rates are influenced by economic factors like inflation, interest rates, political stability, and market demand for currencies.</p>
            </div>
          </div>
        </div>

        {/* Affiliate Offer */}
        <div className="my-8">
          <h3 className="text-sm font-orbitron text-ghost-cyan mb-3">💱 Trading & Finance Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AffiliateOffer
              title="Xe Currency Converter"
              description="Trusted currency conversion and exchange rate tool."
              buttonText="Try Xe"
              link="https://www.xe.com/"
              icon="💱"
            />
            <AffiliateOffer
              title="OANDA - Forex Trading"
              description="Forex trading platform with real-time exchange rates."
              buttonText="Learn More"
              link="https://www.oanda.com/"
              icon="📈"
            />
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xs font-orbitron text-ghost-cyan tracking-widest mb-3">RELATED TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Timezone', href: '/timezone' },
              { name: 'World Clock', href: '/world-clock' },
              { name: 'IP Location', href: '/ip-location' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href}>
                <div className="glass-card rounded-xl px-4 py-2 border-ghost-cyan/10 hover:border-ghost-cyan/40 transition-all hover:shadow-glow-cyan cursor-pointer group text-xs font-mono text-gray-300 hover:text-ghost-cyan">
                  {tool.name} <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Ghost Shell Footer */}
        <div className="mt-8 glass-card rounded-2xl p-6 border-ghost-cyan/10 text-center">
          <span className="text-2xl font-orbitron text-ghost-red tracking-widest">☠️ POWERED BY GHOST SHELL</span>
        </div>

      </div>
    </main>
  )
}