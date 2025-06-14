
'use client';


import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import BuoyMarker from './BuoyMarker';
import { BuoyData } from '@/types/buoy';
import 'leaflet/dist/leaflet.css';

interface WorldMapProps {
  buoyData: BuoyData[];
}

const WorldMap: React.FC<WorldMapProps> = ({ buoyData }) => {
  const [mounted, setMounted] = useState(false);
  
  const mapCenter: LatLngExpression = [20, 0];
  const mapZoom = 2;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full bg-slate-800 rounded-2xl flex items-center justify-center">
        <div className="text-blue-400 text-xl">Loading Map...</div>
      </div>
    );
  }

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      style={{ height: '500px', width: '1500px' }}
      className="rounded-2xl z-10"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
      
      {buoyData.map((buoy) => (
        <BuoyMarker key={buoy.id} buoy={buoy} />
      ))}
    </MapContainer>
  );
};

export default WorldMap;