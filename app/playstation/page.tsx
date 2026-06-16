export default function PlayStationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">PlayStation Store</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="text-xl font-bold">PSN Card 10$</h2>
          <p className="text-fuchsia-500">500 EGP</p>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="text-xl font-bold">GTA V PS5</h2>
          <p className="text-fuchsia-500">700 EGP</p>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="text-xl font-bold">EA FC 26 PS5</h2>
          <p className="text-fuchsia-500">1500 EGP</p>
        </div>

      </div>
    </main>
  );
}