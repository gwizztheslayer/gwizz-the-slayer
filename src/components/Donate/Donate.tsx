"use client";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <section id="donate" className="w-full bg-surface py-24 px-6 border-t border-toxic/30 relative z-20 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
          Support The Cult
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-4">
          Independent art relies on the underground. Your contributions directly fuel the next visual, the next studio session, and the next drop from G-Wizz, The Slayer.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(57,255,20,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://paypal.com/@dreamsofcolour', '_blank')}
          className="px-12 py-5 bg-[#0070ba] border border-[#003087] text-white font-black tracking-widest uppercase text-xl hover:bg-white hover:text-[#0070ba] transition-colors duration-300 flex items-center gap-3"
        >
          Donate via PayPal
        </motion.button>
      </div>
    </section>
  );
}
