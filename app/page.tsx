import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/hn-logo.png"
            alt="HN Store"
            width={60}
            height={60}
          />

          <h1 className="text-2xl font-bold text-fuchsia-500">
            HN Store
          </h1>
        </div>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Games</a>
          <a href="#">Gift Cards</a>
          <a href="#">Deals</a>
        </div>
      </nav>

      <section className="text-center py-20">
        <h2 className="text-5xl font-bold mb-4">
          discover the best games at unbeatable prices
        </h2>

        <p className="text-gray-400 mb-8">
          Steam - PlayStation - Xbox - PUBG
        </p>

        <button className="bg-fuchsia-600 px-6 py-3 rounded-lg">
     shop now
        </button>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-8">
    Deals
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-zinc-900 rounded-xl p-4">
      <img
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold">GTA V</h3>
      <p className="text-fuchsia-500">600 EGP</p>
      <a
  href="https://wa.me/201005224150?text=أريد شراء GTA V"
  target="_blank"
  className="bg-fuchsia-600 px-4 py-2 rounded-lg mt-3 inline-block"
>
  buy now
</a>
    </div>

    <div className="bg-zinc-900 rounded-xl p-4">
      <img
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold">EA FC 26</h3>
      <p className="text-fuchsia-500">1500 EGP</p>
      <a
  href="https://wa.me/201005224150?text=أريد شراء EA FC 26"
  target="_blank"
  className="bg-fuchsia-600 px-4 py-2 rounded-lg mt-3 inline-block"
>
  buy now
</a>
    </div>

    <div className="bg-zinc-900 rounded-xl p-4">
      <img
        src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold">Red Dead Redemption 2</h3>
      <p className="text-fuchsia-500">800 EGP</p>
      <a
  href="https://wa.me/201005224150?text=أريد شراء Red Dead Redemption 2"
  target="_blank"
  className="bg-fuchsia-600 px-4 py-2 rounded-lg mt-3 inline-block"
>
buy now
</a>
    </div>

  </div>
</section>
<section className="py-12">
  <h2 className="text-3xl font-bold text-center mb-8">
    Categories
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <Link href="/xbox">
      <div className="bg-zinc-900 p-6 rounded-xl text-center cursor-pointer hover:bg-zinc-800">
        <h3 className="text-green-500 text-2xl font-bold">Xbox</h3>
        <p className="mt-2 text-gray-400">
          Xbox Games & Gift Cards
        </p>
      </div>
    </Link>

    <Link href="/playstation">
      <div className="bg-zinc-900 p-6 rounded-xl text-center cursor-pointer hover:bg-zinc-800">
        <h3 className="text-blue-500 text-2xl font-bold">PlayStation</h3>
        <p className="mt-2 text-gray-400">
          PS Games & Gift Cards
        </p>
      </div>
    </Link>

    <Link href="/pubg">
      <div className="bg-zinc-900 p-6 rounded-xl text-center cursor-pointer hover:bg-zinc-800">
        <h3 className="text-yellow-500 text-2xl font-bold">PUBG</h3>
        <p className="mt-2 text-gray-400">
          UC & PUBG Items
        </p>
      </div>
    </Link>

  </div>
</section>
    </main>
  );
}