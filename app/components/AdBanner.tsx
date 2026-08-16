'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  type: 'native' | 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile';
  className?: string;
}

export default function AdBanner({ type = 'leaderboard', className = '' }: AdBannerProps) {
  useEffect(() => {
    try {
      // ==========================================
      // NATIVE BANNER
      // ==========================================
      if (type === 'native') {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://pl30882513.effectivecpmnetwork.com/b690125a61f7b7f4ef6d67d25cade33d/invoke.js';
        document.body.appendChild(script);
        
        // Create container if it doesn't exist
        if (!document.getElementById('container-b690125a61f7b7f4ef6d67d25cade33d')) {
          const container = document.createElement('div');
          container.id = 'container-b690125a61f7b7f4ef6d67d25cade33d';
          const parent = document.querySelector('.ad-container');
          if (parent) {
            parent.appendChild(container);
          }
        }
      }

      // ==========================================
      // LEADERBOARD - 728x90
      // ==========================================
      if (type === 'leaderboard') {
        const s1 = document.createElement('script');
        s1.innerHTML = `
          atOptions = {
            'key' : '93f926b3be881e3571fb55049087e2d5',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `;
        document.head.appendChild(s1);
        const s2 = document.createElement('script');
        s2.src = 'https://www.highperformanceformat.com/93f926b3be881e3571fb55049087e2d5/invoke.js';
        document.body.appendChild(s2);
      }

      // ==========================================
      // RECTANGLE - 300x250 (FIXED)
      // ==========================================
      if (type === 'rectangle') {
        const s1 = document.createElement('script');
        s1.innerHTML = `
          atOptions = {
            'key' : '962f19dabcc463b4c39ffe6d5f169807',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        `;
        document.head.appendChild(s1);
        const s2 = document.createElement('script');
        s2.src = 'https://www.highperformanceformat.com/962f19dabcc463b4c39ffe6d5f169807/invoke.js';
        document.body.appendChild(s2);
      }

      // ==========================================
      // SKYSCRAPER - 160x600
      // ==========================================
      if (type === 'skyscraper') {
        const s1 = document.createElement('script');
        s1.innerHTML = `
          atOptions = {
            'key' : '501685e48da3d5bd81efb4602695e21f',
            'format' : 'iframe',
            'height' : 600,
            'width' : 160,
            'params' : {}
          };
        `;
        document.head.appendChild(s1);
        const s2 = document.createElement('script');
        s2.src = 'https://www.highperformanceformat.com/501685e48da3d5bd81efb4602695e21f/invoke.js';
        document.body.appendChild(s2);
      }

      // ==========================================
      // MOBILE - 320x50
      // ==========================================
      if (type === 'mobile') {
        const s1 = document.createElement('script');
        s1.innerHTML = `
          atOptions = {
            'key' : 'a56c67f58ec5272d7683872900e65529',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        `;
        document.head.appendChild(s1);
        const s2 = document.createElement('script');
        s2.src = 'https://www.highperformanceformat.com/a56c67f58ec5272d7683872900e65529/invoke.js';
        document.body.appendChild(s2);
      }
    } catch (e) {
      console.error('Ad error:', e);
    }
  }, [type]);

  const styles: Record<string, React.CSSProperties> = {
    native: { width: '100%', minHeight: '120px' },
    leaderboard: { width: '728px', height: '90px', maxWidth: '100%' },
    rectangle: { width: '300px', height: '250px', maxWidth: '100%' },
    skyscraper: { width: '160px', height: '600px', maxWidth: '100%' },
    mobile: { width: '320px', height: '50px', maxWidth: '100%' },
  };

  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={styles[type] || styles.leaderboard}
    >
      {type === 'native' && (
        <div id="container-b690125a61f7b7f4ef6d67d25cade33d" />
      )}
    </div>
  );
}