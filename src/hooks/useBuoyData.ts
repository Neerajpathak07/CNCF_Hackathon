import { useState, useEffect, useCallback } from 'react';
import { BuoyData } from '@/types/buoy';

const MOCK_BUOY_DATA: BuoyData[] = [
  { id: 1, name: "Pacific Buoy Alpha", lat: 35.6762, lng: -120.6878, temp: 18.5, waveHeight: 2.3, windSpeed: 15.2, salinity: 35.1, status: 'active' },
  { id: 2, name: "Atlantic Monitor Beta", lat: 40.7128, lng: -40.0059, temp: 22.1, waveHeight: 1.8, windSpeed: 12.4, salinity: 34.8, status: 'active' },
  { id: 3, name: "Indian Ocean Gamma", lat: -25.2744, lng: 57.2769, temp: 26.3, waveHeight: 3.1, windSpeed: 18.7, salinity: 35.4, status: 'active' },
  { id: 4, name: "Mediterranean Delta", lat: 36.1408, lng: 12.3642, temp: 24.7, waveHeight: 1.2, windSpeed: 8.9, salinity: 38.2, status: 'active' },
  { id: 5, name: "North Sea Echo", lat: 56.4907, lng: 3.2044, temp: 12.8, waveHeight: 2.9, windSpeed: 22.1, salinity: 34.5, status: 'active' },
  { id: 6, name: "Caribbean Foxtrot", lat: 18.7357, lng: -64.8963, temp: 28.4, waveHeight: 1.5, windSpeed: 14.3, salinity: 36.1, status: 'active' },
  { id: 7, name: "Baltic Sea Golf", lat: 59.3293, lng: 18.0686, temp: 8.2, waveHeight: 0.8, windSpeed: 11.6, salinity: 7.8, status: 'maintenance' },
  { id: 8, name: "Bering Strait Hotel", lat: 65.7792, lng: -168.9689, temp: 2.1, waveHeight: 4.2, windSpeed: 28.5, salinity: 32.1, status: 'active' }
];

export const useBuoyData = () => {
  const [buoyData, setBuoyData] = useState<BuoyData[]>(MOCK_BUOY_DATA);
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const updateBuoyData = useCallback(() => {
    setBuoyData((prevData: any[]) => 
      prevData.map(buoy => ({
        ...buoy,
        temp: Math.round((buoy.temp + (Math.random() - 0.5) * 0.5) * 10) / 10,
        waveHeight: Math.round((Math.max(0.1, buoy.waveHeight + (Math.random() - 0.5) * 0.3)) * 10) / 10,
        windSpeed: Math.round((Math.max(0, buoy.windSpeed + (Math.random() - 0.5) * 2)) * 10) / 10,
        lastUpdate: new Date()
      }))
    );
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    setIsConnected(true);
    const interval = setInterval(updateBuoyData, 5000);
    return () => clearInterval(interval);
  }, [updateBuoyData]);

  return { buoyData, isConnected, lastUpdate, updateBuoyData };
};
