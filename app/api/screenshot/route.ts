import { NextRequest, NextResponse } from 'next/server';

const APIS = [
  {
    name: 'Scrnpix',
    url: (url: string, key: string) =>
      `https://api.scrnpix.com/v1/screenshot?url=${encodeURIComponent(url)}&full_page=true&width=1280`,
    key: process.env.NEXT_PUBLIC_SCRNPIX_KEY,
    headers: { 'x-api-key': process.env.NEXT_PUBLIC_SCRNPIX_KEY },
  },
  {
    name: 'Abstract',
    url: (url: string, key: string) =>
      `https://screenshot.abstractapi.com/v1/?api_key=${key}&url=${encodeURIComponent(url)}&width=1280&height=800&capture_full_page=true`,
    key: process.env.NEXT_PUBLIC_ABSTRACT_SCREENSHOT_KEY,
  },
  {
    name: 'SnapAPI',
    url: (url: string) =>
      `https://api.snapapi.pics/v1/screenshot?url=${encodeURIComponent(url)}&format=png&width=1280&height=800`,
    key: process.env.NEXT_PUBLIC_SNAPAPI_KEY,
    headers: { 'x-api-key': process.env.NEXT_PUBLIC_SNAPAPI_KEY },
  },
  {
    name: 'Scrnify',
    url: (url: string, key: string) =>
      `https://api.scrnify.com/capture?key=${key}&url=${encodeURIComponent(url)}&type=image&format=png&width=1280&height=800`,
    key: process.env.NEXT_PUBLIC_SCRNIFY_KEY,
  },
];

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  console.log(`📸 Screenshot request for: ${url}`);

  for (const api of APIS) {
    if (!api.key) {
      console.log(`⏭️ ${api.name}: No API key`);
      continue;
    }

    try {
      const apiUrl = api.url(url, api.key);
      console.log(`🔍 Trying ${api.name}...`);

      // Filter out headers with undefined values
const headers = Object.fromEntries(
  Object.entries(api.headers || {}).filter(([_, v]) => v !== undefined)
) as HeadersInit;

const res = await fetch(apiUrl, {
  headers,
  signal: AbortSignal.timeout(15000),
});

      if (res.ok) {
        console.log(`✅ ${api.name} succeeded!`);
        const buffer = await res.arrayBuffer();
        return new NextResponse(buffer, {
          status: 200,
          headers: {
            'Content-Type': res.headers.get('Content-Type') || 'image/png',
            'Cache-Control': 'public, max-age=3600',
          },
        });
      } else {
        const text = await res.text();
        console.log(`❌ ${api.name} status: ${res.status}`, text.substring(0, 200));
      }
    } catch (error: any) {
      console.log(`❌ ${api.name} exception:`, error.message);
    }
  }

  return NextResponse.json({ error: 'All screenshot APIs failed' }, { status: 500 });
}