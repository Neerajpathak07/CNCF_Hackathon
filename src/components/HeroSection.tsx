const HeroSection: React.FC = () => {
  return (
    <div className="text-center py-16 px-4 relative z-10 bg-gradient-to-b from-slate-900/90 to-slate-900/70">
      <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        CloudWave
      </h1>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Real-time monitoring of water buoys across the globe, powered by cloud-native technologies. 
        Track ocean conditions, wave patterns, and environmental data with live updates from our 
        distributed sensor network.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <div className="bg-blue-600/20 border border-blue-400/30 rounded-full px-6 py-2 text-blue-300 text-sm">
          ⚡ Powered by Kubernetes
        </div>
        <div className="bg-green-600/20 border border-green-400/30 rounded-full px-6 py-2 text-green-300 text-sm">
          🌊 Real-time Data
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
