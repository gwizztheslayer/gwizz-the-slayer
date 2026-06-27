"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { inventory } from "@/lib/inventory";
import Image from "next/image";
import Link from "next/link";

export default function ImmersiveComicReader() {
  const [hasEntered, setHasEntered] = useState(false);
  const [page, setPage] = useState(1);
  const [txStatus, setTxStatus] = useState<{ msg: string; type: "error" | "success" | "pending" } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const comicItem = inventory.find((i) => i.id === "comic-digital");
  
  // Set to 4 so they get Cover + Page 1, 2, and 3 before the paywall hits on Page 5.
  const maxFreePages = 4;
  const isLocked = page > maxFreePages;

  // Exact file mapping patched to .png to match your Windows directory
  const mangaPages = [
    "/comic/knysna-saviour-cover.png", 
    "/comic/page-1.png", 
    "/comic/page-2.png", 
    "/comic/page-3.png", 
  ];

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.error("Audio block:", e));
    }
  };

  const handleNext = () => {
    if (page <= maxFreePages) {
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));

  const handleCheckout = (gateway: string) => {
    if (!comicItem) return;
    setTxStatus({ msg: `INITIATING ${gateway} SECURE LINK...`, type: "pending" });
    const targetUrl = gateway === 'STRIPE' ? comicItem.stripeLink : comicItem.paypalLink;
    
    if (targetUrl && !targetUrl.includes("REPLACE_WITH")) {
      window.open(targetUrl, "_blank");
      setTimeout(() => setTxStatus({ msg: `SECURE VAULT OPENED IN NEW TAB.`, type: "success" }), 1000);
    } else {
      setTimeout(() => setTxStatus({ msg: `${gateway} LINK NOT CONFIGURED.`, type: "error" }), 1000);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!hasEntered) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [page, hasEntered]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-mono selection:bg-cyan-500 selection:text-black antialiased">
      
      {/* BACKGROUND AMBIENT AUDIO TRACK */}
      <audio ref={audioRef} src="/audio/ambient-loop.mp3" loop />

      {/* GATEWAY ENTRY SCREEN */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }} 
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 border border-zinc-900 m-2"
          >
            <h1 className="text-3xl md:text-5xl font-black tracking-[0.25em] uppercase mb-6 text-center text-white">
              KNYSNA'S <span className="text-zinc-400">SAVIOUR</span>
            </h1>
            <p className="text-zinc-500 text-[10px] tracking-widest mb-10 uppercase max-w-sm text-center leading-relaxed">
              WARNING: Secure network uplink requires audio initialization protocol.
            </p>
            <button 
              onClick={handleEnter} 
              className="border border-white text-white px-10 py-3 tracking-[0.3em] text-xs font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              [ INITIALIZE UPLINK ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TERMINAL UI CONTAINER */}
      {hasEntered && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="w-full h-screen flex flex-col justify-between p-4 md:p-6"
        >
          {/* TOP HEADER STATUS HUB */}
          <header className="flex justify-between items-center border-b border-zinc-900 pb-4">
            <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-[10px] tracking-widest uppercase">
              {"< RETURN TO BASE"}
            </Link>
            <div className="text-zinc-400 font-bold text-[10px] tracking-[0.2em] uppercase">
              CHAPTER_01 // SEC_DATA_PRV_{page}
            </div>
          </header>

          {/* CENTRAL INTERACTIVE SPLIT MATRIX */}
          <div className="flex-1 my-6 flex flex-col md:flex-row gap-6 items-center justify-center overflow-hidden w-full max-w-6xl mx-auto">
            
            {/* LEFT / MAIN VIEWPORT: MANGA DISPLAY PANEL */}
            <div className={`relative flex items-center justify-center bg-zinc-950 border border-zinc-900 transition-all duration-500 h-full min-h-[400px] ${isLocked ? "w-full md:w-2/3" : "w-full"}`}>
              <AnimatePresence mode="wait">
                {!isLocked ? (
                  <motion.div
                    key={page}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-4"
                  >
                    <Image 
                      src={mangaPages[page - 1] || "/comic/knysna-saviour-cover.png"} 
                      alt={`Manga Data Frame ${page}`} 
                      fill 
                      className="object-contain p-2"
                      priority
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center p-6 text-center space-y-4"
                  >
                    <div className="text-red-500 text-3xl font-bold tracking-widest animate-pulse">[ ACCESS DENIED ]</div>
                    <p className="text-zinc-500 text-xs tracking-widest uppercase max-w-xs">
                      DATA LAYER RETRIEVAL BLOCKED PAST FRAME {maxFreePages}. EXPANSION KEY REQUIRED.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Invisible Nav Hotzones (Only Active When Unlocked) */}
              {!isLocked && (
                <>
                  <div className="absolute inset-y-0 left-0 w-1/4 cursor-w-resize z-20" onClick={handlePrev} />
                  <div className="absolute inset-y-0 right-0 w-1/4 cursor-e-resize z-20" onClick={handleNext} />
                </>
              )}
            </div>

            {/* RIGHT SIDEBAR PANEL: SECURE CHECKOUT VAULT */}
            <AnimatePresence>
              {isLocked && (
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  className="w-full md:w-1/3 h-full bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center p-6 text-center space-y-6"
                >
                  <div className="space-y-1">
                    <div className="text-xs tracking-[0.2em] font-bold text-zinc-400 uppercase">UNLOCK COMPLETE DIGITAL VERSION</div>
                    <div className="text-lg font-black tracking-wider text-white">
                      {comicItem?.priceUSD} USD
                    </div>
                  </div>

                  <div className="w-full max-w-xs space-y-3">
                    <button 
                      onClick={() => handleCheckout('PAYPAL')} 
                      className="w-full bg-white text-black py-4 uppercase font-bold tracking-widest hover:bg-zinc-200 transition-colors text-[10px]"
                    >
                      PAY WITH PAYPAL
                    </button>
                    <button 
                      onClick={() => handleCheckout('STRIPE')} 
                      className="w-full bg-zinc-900 text-white border border-zinc-800 py-4 uppercase font-bold tracking-widest hover:bg-zinc-800 transition-colors text-[10px]"
                    >
                      PAY WITH STRIPE
                    </button>
                  </div>

                  {txStatus && (
                    <div className={`text-[10px] tracking-widest uppercase max-w-xs px-2 ${txStatus.type === "error" ? "text-red-500" : "text-zinc-400"}`}>
                      {txStatus.msg}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* BOTTOM NAVIGATION FOOTER */}
          <footer className="flex justify-between items-center border-t border-zinc-900 pt-4">
            <button 
              onClick={handlePrev} 
              disabled={page === 1}
              className="text-zinc-500 hover:text-white uppercase tracking-widest text-[10px] disabled:opacity-20 transition-colors"
            >
              [ PREVIOUS ]
            </button>
            <div className="text-zinc-600 text-[9px] tracking-widest uppercase hidden sm:block">
              USE KEYBOARD LEFT / RIGHT ARROWS TO NAVIGATE
            </div>
            <button 
              onClick={handleNext} 
              disabled={isLocked}
              className="text-zinc-400 hover:text-white uppercase tracking-widest text-[10px] disabled:opacity-20 transition-colors"
            >
              [ NEXT ]
            </button>
          </footer>

        </motion.div>
      )}
    </main>
  );
}
