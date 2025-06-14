'use client';

import dynamic from 'next/dynamic';
import { useBuoyData } from '@/hooks/useBuoyData';
import HeroSection from '@/components/HeroSection';
import StatusBar from '@/components/StatusBar';

const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[70vh] bg-slate-800 rounded-2xl flex items-center justify-center">
      <div className="text-blue-400 text-xl">Loading World Map...</div>
    </div>
  )
});

export default function Home() {
  const { buoyData, isConnected } = useBuoyData();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroSection />
      
      <div className="relative px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            <WorldMap buoyData={buoyData} />
            <StatusBar 
              isConnected={isConnected}
              buoyCount={buoyData.filter((b: { status: string; }) => b.status === 'active').length}
            />
          </div>
        </div>
      </div>
      
      <div className="wave-animation" />
    </div>
  );
}