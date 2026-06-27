"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-black border-b border-toxic/20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl sm:text-7xl font-black text-toxic mb-4 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">CONNECT / PRE-ORDER</h2>
        <p className="text-white/50 tracking-widest uppercase text-sm mb-12">BOOKINGS // FEATURES // CUSTOM ORDERS</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#050505] border border-white/10 p-5 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic transition-all" 
            />
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#050505] border border-white/10 p-5 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic transition-all" 
            />
          </div>
          <textarea 
            placeholder="MESSAGE..." 
            rows={6} 
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#050505] border border-white/10 p-5 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic transition-all resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={status === "loading" || status === "success"}
            className="w-full py-5 bg-transparent border-2 border-toxic text-toxic font-black tracking-widest uppercase text-xl hover:bg-toxic hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "UPLOADING..." : status === "success" ? "TRANSMISSION SECURED" : "SEND TRANSMISSION"}
          </button>
          {status === "error" && <p className="text-red-500 font-mono text-center mt-2">Error intercepting transmission. Try again.</p>}
        </form>
      </div>
    </section>
  );
}