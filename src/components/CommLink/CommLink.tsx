"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommLink() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Trigger the interceptor after 12 seconds of engagement
  useEffect(() => {
    const hasSeenCommLink = localStorage.getItem("commlink_cleared");
    if (!hasSeenCommLink) {
      const timer = setTimeout(() => setIsVisible(true), 12000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("commlink_cleared", "true");
  };

  const handleExecute = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/commlink", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => handleDismiss(), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 font-mono"
        >
          {/* Static Noise Overlay */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none animate-pulse"></div>

          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-toxic shadow-[0_0_30px_rgba(57,255,20,0.15)] p-8 overflow-hidden"
          >
            {/* Glitch UI Scanline */}
            <div className="absolute top-0 left-0 w-full h-1 bg-toxic/50 animate-[scan_2s_ease-in-out_infinite]"></div>

            <button onClick={handleDismiss} className="absolute top-4 right-4 text-zinc-600 hover:text-toxic text-xs tracking-widest transition-colors">
              [ X ]
            </button>

            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-toxic font-black text-2xl tracking-[0.2em] uppercase animate-pulse">
                  UPLINK SECURED
                </div>
                <div className="text-zinc-400 text-xs tracking-widest uppercase leading-loose">
                  Your clearance has been granted. The encrypted vault key and unreleased stems will be transmitted to your terminal shortly.
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="text-red-500 font-bold text-[10px] tracking-[0.3em] uppercase mb-2 animate-pulse">
                    // CLASSIFIED TRANSMISSION INCOMING
                  </div>
                  <h2 className="text-2xl text-white font-black tracking-[0.1em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    ENTER THE <span className="text-toxic">SYNDICATE</span>
                  </h2>
                  <p className="text-zinc-400 text-xs tracking-widest leading-loose mt-4 uppercase">
                    You have breached the outer perimeter of the Knysna underground. Establish a direct Comm-Link now to extract unreleased heavy-hitting trap stems, VIP show access, and classified lore directly from G-Wizz, The Slayer.
                  </p>
                </div>

                <form onSubmit={handleExecute} className="space-y-4 pt-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-toxic text-xs">
                      {">"}
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="ENTER_SECURE_EMAIL_ADDRESS..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-toxic placeholder-zinc-700 text-xs tracking-widest py-4 pl-8 pr-4 focus:outline-none focus:border-toxic focus:ring-1 focus:ring-toxic transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full border border-toxic text-toxic py-4 text-xs font-bold tracking-[0.3em] uppercase hover:bg-toxic hover:text-black transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)] disabled:opacity-50"
                  >
                    {status === "loading" ? "[ ENCRYPTING DATA... ]" : "[ INITIATE EXTRACTION ]"}
                  </button>

                  {status === "error" && (
                    <div className="text-red-500 text-[10px] tracking-widest uppercase text-center mt-2">
                      Transmission failed. Connection severed.
                    </div>
                  )}
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
