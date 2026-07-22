'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export function IPMap({ lat, lon, label }: { lat: number; lon: number; label?: string }) {
  if (!lat || !lon || lat === 0 || lon === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 font-mono text-sm">
        Location unavailable
      </div>
    );
  }

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      style={{ height: '100%', width: '100%', background: '#0a0a0f' }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          <div className="font-mono text-sm text-black">
            <div className="font-bold text-cyan-600">{label || 'Your IP'}</div>
            <div className="text-gray-500 text-xs">{lat.toFixed(4)}, {lon.toFixed(4)}</div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}