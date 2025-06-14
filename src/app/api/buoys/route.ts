import { NextRequest, NextResponse } from 'next/server';
import { BuoyData } from '@/types/buoy';

// Mock data for API endpoint
const mockBuoyData: BuoyData[] = [
  { id: 1, name: "Pacific Buoy Alpha", lat: 35.6762, lng: -120.6878, temp: 18.5, waveHeight: 2.3, windSpeed: 15.2, salinity: 35.1, status: 'active' },
  { id: 2, name: "Atlantic Monitor Beta", lat: 40.7128, lng: -40.0059, temp: 22.1, waveHeight: 1.8, windSpeed: 12.4, salinity: 34.8, status: 'active' },
  // ... other buoys
];

export async function GET(request: NextRequest) {
  try {
    // Simulate real-time data updates
    const updatedData = mockBuoyData.map(buoy => ({
      ...buoy,
      temp: Math.round((buoy.temp + (Math.random() - 0.5) * 0.5) * 10) / 10,
      waveHeight: Math.round((Math.max(0.1, buoy.waveHeight + (Math.random() - 0.5) * 0.3)) * 10) / 10,
      windSpeed: Math.round((Math.max(0, buoy.windSpeed + (Math.random() - 0.5) * 2)) * 10) / 10,
      lastUpdate: new Date()
    }));

    return NextResponse.json({
      success: true,
      data: updatedData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch buoy data' },
      { status: 500 }
    );
  }
}
