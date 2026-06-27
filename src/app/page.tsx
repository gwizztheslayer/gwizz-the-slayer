import Image from "next/image";
import AuraPlayer from "@/components/AuraPlayer/AuraPlayer";
import Link from "next/link";
import OracleWidget from "@/components/Oracle/OracleWidget";
import dynamic from "next/dynamic";
import Discography from "@/components/Discography/Discography";
import TheSyndicate from "@/components/TheSyndicate/TheSyndicate";
import VaultMatrix from "@/components/VaultMatrix";

const Visuals = dynamic(() => import("@/components/Visuals/Visuals"), { loading: () => <div className="w-full max-w-6xl mx-auto min-h-[400px] border border-toxic/10 bg-black flex items-center justify-center font-mono text-xs text-toxic/40 animate-pulse">[ INITIATING VISUAL FEED... ]</div> });
const Transmissions = dynamic(() => import("@/components/Transmissions/Transmissions"), { loading: () => <div className="w-full max-w-6xl mx-auto min-h-[400px] border border-toxic/10 bg-black flex items-center justify-center font-mono text-xs text-toxic/40 animate-pulse">[ ACCESSING THE VAULT... ]</div> });
const LiveTransmissions = dynamic(() => import("@/components/LiveTransmissions/LiveTransmissions"));
const Arsenal = dynamic(() => import("@/components/Arsenal/Arsenal"), { loading: () => <div className="w-full max-w-6xl mx-auto min-h-[400px] border border-toxic/10 bg-black flex items-center justify-center font-mono text-xs text-toxic/40 animate-pulse">[ ACCESSING WEAPONRY SYSTEM... ]</div> });
const About = dynamic(() => import("@/components/About/About"));
const PressKit = dynamic(() => import("@/components/PressKit/PressKit"), { loading: () => <div className="w-full max-w-6xl mx-auto min-h-[400px] border border-toxic/10 bg-black flex items-center justify-center font-mono text-xs text-toxic/40 animate-pulse">[ LOADING PRESS TERMINAL... ]</div> });
const ContactForm = dynamic(() => import("@/components/ContactForm/ContactForm"));
const Support = dynamic(() => import("@/components/Support/Support"));
const LyricsSector = dynamic(() => import("@/components/LyricsSector/LyricsSector"), { loading: () => <div className="w-full max-w-6xl mx-auto min-h-[400px] border border-toxic/10 bg-black flex items-center justify-center font-mono text-xs text-toxic/40 animate-pulse">[ INITIATING LYRICS ENGINE... ]</div> });

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "G-Wizz, The Slayer | Modern Trap, Music & Lore",
  description: "Emerging from the Knysna underground, G-Wizz, The Slayer is an architect of urban-industrial modern trap music. Stream the discography, read Knysna's Saviour, and access Web3 assets.",
  keywords: ["G-Wizz The Slayer", "modern trap music", "Knysna rap", "South African trap", "Knysna's Saviour", "urban-industrial rap", "Aura Venture Coin"],
  openGraph: {
    title: "G-Wizz, The Slayer | Official Hub",
    description: "Music, Lore, and the Knysna Underground.",
    type: "website",
    url: "https://www.gwizztheslayer.co.za",
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "G-Wizz, The Slayer",
    "genre": ["Hip-Hop", "Rap", "Modern Trap"],
    "image": "https://gwizztheslayer.co.za/images/slayer-photo.jpg",
    "description": "Emerging from the Knysna underground, G-Wizz, The Slayer is an architect of urban-industrial modern trap music.",
    "url": "https://gwizztheslayer.co.za",
    "sameAs": [
      "https://open.spotify.com/artist/1GM9nGfwFjiwZtgIWO3sh2",
      "https://soundcloud.com/gwizztheslayer",
      "https://audiomack.com/gwizztheslayer",
      "https://www.youtube.com/@gwizztheslayer",
      "https://instagram.com/gwizztheslayer",
      "https://twitter.com/gwizz_theslayer"
    ],
    "subjectOf": {
      "@type": "VideoObject",
      "name": "G-Wizz, The Slayer - Taking Over Ft. Ace Mclein (music video)",
      "description": "Official music video for Taking Over by G-Wizz, The Slayer featuring Ace Mclein, utilizing 1934 public domain archive footage.",
      "thumbnailUrl": "https://gwizztheslayer.co.za/icon.png",
      "uploadDate": "2026-06-19",
      "contentUrl": "https://drive.google.com/file/d/1T4g1HitxceZnGPcA35UfhFjeQ7VziAKg/preview"
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-toxic selection:text-black font-sans pb-24 relative overflow-hidden">
      <div className="shadow-vignette"></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-toxic/20 z-[1000] px-6 py-4 flex items-center justify-between shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center">
           <div className="text-toxic font-black tracking-widest text-lg uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">G-WIZZ, THE SLAYER</div>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase">
          <a href="#home" className="hover:text-toxic transition-colors text-toxic">HOME</a>
          <a href="#about" className="hover:text-toxic transition-colors">ABOUT</a>
          <a href="#videos" className="hover:text-toxic transition-colors">VIDEOS</a>
          <a href="#music" className="hover:text-toxic transition-colors">DISCOGRAPHY</a>
          <a href="#lyrics" className="hover:text-toxic transition-colors">LYRICS</a>
          <a href="#transmissions" className="hover:text-toxic transition-colors">THE VAULT</a>
          <a href="#arsenal" className="hover:text-toxic transition-colors">THE ARSENAL</a>
          <a href="#shows" className="hover:text-toxic transition-colors">SHOWS</a>
          <a href="#network" className="hover:text-toxic transition-colors">NETWORK</a>
          <a href="#contact" className="hover:text-toxic transition-colors">CONTACT</a>
        </div>
      </nav>

      <section id="home" className="relative flex flex-col items-center justify-center pt-32 pb-12 min-h-[70vh]">
        <div className="relative w-full max-w-5xl mx-auto px-4 flex justify-center mb-12 z-10 pointer-events-none">
          <Image src="/logo.png" alt="G-Wizz, The Slayer" width={1024} height={300} priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
        </div>
        
        <div className="flex flex-col items-center gap-6 z-10 w-full max-w-2xl px-4">
          <a href="https://ffm.to/demonsdontsleepalbum" target="_blank" rel="noopener noreferrer" className="border-2 border-toxic text-toxic font-black tracking-widest px-8 py-5 uppercase hover:bg-toxic hover:text-black transition-all bg-black/80 shadow-[0_0_15px_rgba(57,255,20,0.2)] backdrop-blur-sm text-center animate-aura-pulse aura-toxic-text">
            STREAM DEMONS DON'T SLEEP
          </a>

          <div className="flex flex-wrap justify-center gap-4 w-full font-mono text-xs mt-4">
            <Link href="/comic" className="border border-toxic/40 text-toxic/80 bg-black/60 px-6 py-3 uppercase tracking-widest hover:border-toxic hover:text-toxic transition-all text-center flex-1 min-w-[200px]">
              [ ENTER COMIC READER ]
            </Link>
            
            <Link href="/avc" className="border border-toxic/40 text-toxic/80 bg-black/60 px-6 py-3 uppercase tracking-widest hover:border-toxic hover:text-toxic transition-all text-center flex-1 min-w-[200px]">
              [ AVC TERMINAL ]
            </Link>
          </div>
        </div>
      </section>

      <Discography />

      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 mb-24">
        <VaultMatrix />
      </section>

      <Visuals />
      <Transmissions />
      <LiveTransmissions />
      <About />
      <PressKit />
      
      <div id="arsenal">
        <Arsenal />
      </div>
      
      <TheSyndicate />
      <LyricsSector />

      <section id="network" className="py-24 bg-black/80 border-y border-toxic/20 relative z-10 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white uppercase mb-12 tracking-[0.2em]">THE NETWORK</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "SPOTIFY", url: "https://open.spotify.com/artist/1GM9nGfwFjiwZtgIWO3sh2" },
              { name: "SOUNDCLOUD", url: "https://soundcloud.com/gwizztheslayer" },
              { name: "YOUTUBE", url: "https://www.youtube.com/@gwizztheslayer" },
              { name: "INSTAGRAM", url: "https://instagram.com/gwizztheslayer" },
              { name: "X / TWITTER", url: "https://twitter.com/gwizz_theslayer" },
              { name: "AUDIOMACK", url: "https://audiomack.com/gwizztheslayer" }
            ].map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="border border-toxic text-toxic px-8 py-4 uppercase hover:bg-toxic hover:text-black transition-all font-bold tracking-widest text-xs bg-black/50">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Support />

      <section className="w-full bg-black border-t-2 border-toxic/20 hover:border-toxic transition-all duration-700 relative z-50">
        <a href="https://dreams-of-colour.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full group relative overflow-hidden">
          <div className="absolute inset-0 bg-toxic/0 group-hover:bg-toxic/20 transition-colors duration-500 z-10 mix-blend-overlay"></div>
          <Image src="/doc-footer.png" alt="Dreams Of Colour - Independent Record Label" width={1920} height={400} className="w-full h-auto max-h-[400px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 backdrop-blur-sm bg-black/60">
            <span className="text-toxic text-xs md:text-sm font-black tracking-[0.3em] uppercase border border-toxic px-8 py-4 bg-black/90 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
              [ ENTER INDEPENDENT RECORD LABEL ]
            </span>
          </div>
        </a>
      </section>
      <OracleWidget />
      <AuraPlayer />
    </main>
  );
}