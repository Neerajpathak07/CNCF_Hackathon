import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { BuoyData } from '@/types/buoy';

interface BuoyMarkerProps {
  buoy: BuoyData;
}

const createBuoyIcon = (status: BuoyData['status']) => {
  const color = status === 'active' ? '#60a5fa' : status === 'maintenance' ? '#f59e0b' : '#ef4444';
  
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="24" height="24">
        <circle cx="12" cy="12" r="10" fill="${color}" stroke="#ffffff" stroke-width="2"/>
        <circle cx="12" cy="12" r="6" fill="#ffffff" opacity="0.8"/>
      </svg>
    `)}`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};

const BuoyMarker: React.FC<BuoyMarkerProps> = ({ buoy }) => {
  return (
    <Marker
      position={[buoy.lat, buoy.lng]}
      icon={createBuoyIcon(buoy.status)}
    >
      <Popup className="custom-popup">
        <div className="bg-slate-900/95 text-white p-4 rounded-lg backdrop-blur-md border border-blue-400/20 min-w-[300px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🌊</span>
            <h3 className="text-lg font-bold text-blue-400">{buoy.name}</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/70 p-3 rounded-lg border-l-2 border-green-400">
              <div className="text-xs text-slate-400 mb-1">Temperature</div>
              <div className="text-lg font-bold">{buoy.temp}°C</div>
            </div>
            
            <div className="bg-slate-800/70 p-3 rounded-lg border-l-2 border-blue-400">
              <div className="text-xs text-slate-400 mb-1">Wave Height</div>
              <div className="text-lg font-bold">{buoy.waveHeight}m</div>
            </div>
            
            <div className="bg-slate-800/70 p-3 rounded-lg border-l-2 border-yellow-400">
              <div className="text-xs text-slate-400 mb-1">Wind Speed</div>
              <div className="text-lg font-bold">{buoy.windSpeed} km/h</div>
            </div>
            
            <div className="bg-slate-800/70 p-3 rounded-lg border-l-2 border-purple-400">
              <div className="text-xs text-slate-400 mb-1">Salinity</div>
              <div className="text-lg font-bold">{buoy.salinity} PSU</div>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>Status: <span className={`font-semibold ${buoy.status === 'active' ? 'text-green-400' : 'text-yellow-400'}`}>
              {buoy.status.toUpperCase()}
            </span></span>
            <span>ID: {buoy.id}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default BuoyMarker;