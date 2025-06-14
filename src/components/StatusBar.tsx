
'use client';

import React, { useEffect, useState } from 'react';

interface StatusBarProps {
  isConnected: boolean;
  buoyCount: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ isConnected, buoyCount }) => {
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setLastUpdate(new Date());
    updateTime(); // set immediately on mount

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-5 right-5 z-50 bg-slate-900/90 backdrop-blur-md border border-blue-400/20 rounded-full px-4 py-2 flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
      <span className="text-white text-sm font-medium">
        {isConnected ? 'Live Data' : 'Disconnected'} • {buoyCount} Active Buoys
      </span>
      <span className="text-slate-400 text-xs">
        {lastUpdate ? lastUpdate.toLocaleTimeString('en-US', { hour12: true }) : ''}
      </span>
    </div>
  );
};

export default StatusBar;













// import React from 'react';

// interface StatusBarProps {
//   isConnected: boolean;
//   buoyCount: number;
//   lastUpdate: Date;
// }

// const StatusBar: React.FC<StatusBarProps> = ({ isConnected, buoyCount, lastUpdate }) => {
//   return (
//     <div className="absolute top-5 right-5 z-50 bg-slate-900/90 backdrop-blur-md border border-blue-400/20 rounded-full px-4 py-2 flex items-center gap-3">
//       <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
//       <span className="text-white text-sm font-medium">
//         {isConnected ? 'Live Data' : 'Disconnected'} • {buoyCount} Active Buoys
//       </span>
//       <span className="text-slate-400 text-xs">
//         {lastUpdate.toLocaleTimeString()}
//       </span>
//     </div>
//   );
// };

// export default StatusBar;