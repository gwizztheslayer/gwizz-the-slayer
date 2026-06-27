"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="flex flex-col items-center gap-12 z-10">
        {/* Logo */}
        <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/logo.png" 
            alt="G-Wizz, The Slayer" 
            className="w-full max-w-2xl h-auto"
        />

        {/* CTA Button */}
        <motion.a 
            href="https://ffm.to/demonsdontsleepalbum"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-toxic px-8 py-4 text-toxic font-bold uppercase tracking-widest hover:bg-toxic hover:text-void transition-all duration-300 drop-shadow-[0_0_30px_rgba(57,255,20,0.4)]"
        >
            Stream Demons Don't Sleep
        </motion.a>
      </div>
    </section>
  );
}