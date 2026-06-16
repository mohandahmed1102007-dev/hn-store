export default function PubgPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">PUBG UC</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="text-xl font-bold">60 UC</h2>
          <p className="text-fuchsia-500">50 EGP</p>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="text-xl font-bold">325 UC</h2>
          <p className="text-fuchsia-500">250 EGP</p>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="text-xl font-bold">660 UC</h2>
          <p className="text-fuchsia-500">500 EGP</p>
        </div>

      </div>
    </main>
  );
}