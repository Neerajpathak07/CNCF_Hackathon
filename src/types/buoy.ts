export interface BuoyData {
  id: number;
  name: string;
  lat: number;
  lng: number;
  temp: number;
  waveHeight: number;
  windSpeed: number;
  salinity: number;
  lastUpdate?: Date;
  status: 'active' | 'inactive' | 'maintenance';
}

export interface BuoyUpdateEvent {
  type: 'buoy_update';
  data: BuoyData;
}

export interface MapConfig {
  center: [number, number];
  zoom: number;
  theme: 'dark' | 'light';
}