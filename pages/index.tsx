import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('../components/MapView'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-screen relative overflow-hidden">
      <div className="absolute top-4 left-4 z-[1000] bg-white p-4 rounded-lg shadow-md max-w-sm">
        <h1 className="text-xl font-bold mb-1">Wisconsin Way</h1>
        <p className="text-xs text-gray-600">Established Terminal-First Blueprint</p>
      </div>
      <MapView />
    </main>
  );
}
