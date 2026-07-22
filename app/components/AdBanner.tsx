'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  type: 'leaderboard' | 'rectangle' | 'skyscraper' | 'social';
  className?: string;
}

export default function AdBanner({ type = 'leaderboard', className = '' }: AdBannerProps) {
  useEffect(() => {
    try {
      console.log('Ad banner loaded:', type);
    } catch (e) {
      console.error('Ad banner error:', e);
    }
  }, [type]);

  const getBannerStyles = () => {
    switch (type) {
      case 'leaderboard':
        return { width: '728px', height: '90px', maxWidth: '100%' };
      case 'rectangle':
        return { width: '300px', height: '250px', maxWidth: '100%' };
      case 'skyscraper':
        return { width: '160px', height: '600px', maxWidth: '100%' };
      case 'social':
        return { width: '100%', height: '60px' };
      default:
        return { width: '728px', height: '90px', maxWidth: '100%' };
    }
  };

  return (
    <div
      className={`glass-card rounded-xl border-ghost-cyan/10 bg-ghost-dark/30 flex items-center justify-center overflow-hidden ${className}`}
      style={getBannerStyles()}
    >
      <div className="text-center">
        <div className="text-xs text-gray-500 font-mono">
          📢 Adsterra Banner ({type})
          <br />
          <span className="text-[8px] text-gray-600">(Replace with your Adsterra code)</span>
        </div>
      </div>
    </div>
  );
}