import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView() {
  useEffect(() => {
    const map = L.map('map-container').setView([44.5, -89.5], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div id="map-container" className="w-full h-full min-h-screen" />
    </div>
  );
}
