"use client";
import { useState } from "react";

export default function TheSyndicate() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleJoin = async () => {
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-black/60 text-center relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-black text-toxic mb-6 uppercase tracking-tight drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">THE SYNDICATE</h2>
        <p className="text-white/80 text-lg mb-12 font-mono">Bypass the algorithm. Join the inner circle.</p>
        
        {status === "success" ? (
          <div className="border border-toxic text-toxic p-6 bg-toxic/10 font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            TRANSMISSION RECEIVED. CHECK YOUR INBOX.
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-center gap-0">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/80 border border-white/10 text-white p-5 w-full sm:w-[400px] focus:outline-none focus:border-toxic font-mono transition-colors" 
              placeholder="ENTER YOUR EMAIL..." 
            />
            <button 
              onClick={handleJoin}
              disabled={status === "loading"}
              className="bg-toxic text-black font-black px-10 py-5 uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "UPLOADING..." : "JOIN"}
            </button>
          </div>
        )}
        {status === "error" && <p className="text-red-500 font-mono mt-4 text-xs uppercase">Error securing connection. Please try again.</p>}
      </div>
    </section>
  );
}