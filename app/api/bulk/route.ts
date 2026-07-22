import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { ips } = await req.json()
    if (!ips || !Array.isArray(ips) || ips.length === 0) {
      return NextResponse.json({ error: 'Invalid IP list' }, { status: 400 })
    }

    const IP_API_URL = process.env.IP_API_URL || 'http://ip-api.com/json'

    const results = await Promise.all(
      ips.slice(0, 10).map(async (ip: string) => {
        try {
          const res = await fetch(`${IP_API_URL}/${ip}?fields=status,country,regionName,city,isp,org,as,query`)
          const data = await res.json()
          return data
        } catch {
          return { query: ip, status: 'fail' }
        }
      })
    )

    return NextResponse.json({ results }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}