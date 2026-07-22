import Image from 'next/image';

export function FlagIcon({ countryCode, size = 24 }: { countryCode: string; size?: number }) {
  if (!countryCode) return <span className="text-gray-500">🌍</span>;
  const code = countryCode.toLowerCase();
  return (
    <Image
      src={`https://flagcdn.com/${size}x${Math.round(size * 0.75)}/${code}.png`}
      alt={countryCode}
      width={size}
      height={Math.round(size * 0.75)}
      className="rounded-sm"
    />
  );
}