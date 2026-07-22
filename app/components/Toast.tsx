'use client';

import { createContext, useCallback, useContext, useState } from 'react';

type Toast = { id: number; message: string; kind: 'info' | 'success' | 'error' };

const ToastCtx = createContext<{
  toast: (message: string, kind?: Toast['kind']) => void;
}>({ toast: () => {} });

export function useToast() {
  return useContext(ToastCtx);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, kind: Toast['kind'] = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, kind }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 2600);
  }, []);

  return (
    <ToastCtx.Provider value={{ toast }}>
      {children}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 flex-col items-center gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto animate-fadeInUp rounded-lg border px-4 py-2 font-mono text-sm shadow-lg backdrop-blur ${
              t.kind === 'success'
                ? 'border-ghost-green/40 bg-ghost-dark/90 text-ghost-green'
                : t.kind === 'error'
                ? 'border-ghost-red/40 bg-ghost-dark/90 text-ghost-red'
                : 'border-ghost-cyan/40 bg-ghost-dark/90 text-ghost-cyan'
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}