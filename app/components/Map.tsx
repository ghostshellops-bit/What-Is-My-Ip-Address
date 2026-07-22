'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface MapProps {
  lat: number
  lon: number
  city?: string
  country?: string
}

export default function Map({ lat, lon, city, country }: MapProps) {
  if (!lat || !lon || lat === 0 || lon === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-ghost-dark/50 rounded-xl border border-ghost-cyan/10">
        <span className="text-gray-500 font-mono text-sm">📍 Location unavailable</span>
      </div>
    )
  }

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      style={{ height: '100%', width: '100%', background: '#0a0a0f', borderRadius: '12px' }}
      className="rounded-xl overflow-hidden border border-ghost-cyan/10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup className="bg-ghost-dark text-white border-ghost-cyan/30">
          <div className="font-mono text-sm">
            <div className="font-bold text-ghost-cyan">📍 {city || 'Unknown'}</div>
            <div className="text-gray-400">{country || ''}</div>
            <div className="text-[10px] text-gray-500">{lat.toFixed(4)}, {lon.toFixed(4)}</div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}