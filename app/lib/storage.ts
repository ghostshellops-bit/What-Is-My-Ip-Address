export const HISTORY_KEY = 'ipHistory';

export function getHistory(): any[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
}

export function addToHistory(entry: any) {
  if (typeof window === 'undefined') return;
  const history = getHistory();
  const updated = [entry, ...history.filter((h: any) => h.ip !== entry.ip)].slice(0, 5);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
}

export function clearHistory() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(HISTORY_KEY);
}

export function flagEmoji(code: string): string {
  if (!code) return '🌍';
  return code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}