import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Demons Don't Sleep | Gwizz The Slayer | Modern Trap",
  description: "Stream the new modern trap album Demons Don't Sleep by Gwizz The Slayer. Produced by Ceoxcam88. Released via G-Wizz, The Slayer.",
};

export default function DemonsDontSleep() {
  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
      <main className="max-w-6xl mx-auto px-6 py-16 border-l border-r border-gray-800/50">
        <header className="mb-16 border-b border-gray-800 pb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Demons Don't Sleep
          </h1>
          <p className="mt-4 text-xl text-cyan-400 font-bold uppercase tracking-widest">
            Gwizz The Slayer
          </p>
          <p className="mt-2 text-sm text-gray-400 uppercase tracking-widest">
            G-Wizz, The Slayer &mdash; Modern Trap
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden flex items-center justify-center group">
            <div className="text-gray-700 font-mono text-sm uppercase">
              [ Album Art Visual ]
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-white border-l-4 border-cyan-500 pl-4">
                Modern Trap Energy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The definitive new release driving the sound of the streets. Heavy-hitting 808s, relentless lyrical precision, and an uncompromising urban-industrial sonic landscape.
              </p>
              <p className="text-gray-400 text-sm font-mono uppercase bg-gray-900 p-3 border border-gray-800 inline-block">
                Lead Production: Ceoxcam88
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors text-center">
                Return to Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

