"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black/50 relative z-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 relative aspect-square border border-toxic/50 shadow-[0_0_15px_rgba(57,255,20,0.1)]"
        >
          <Image src="/images/slayer-photo.jpg" alt="G-Wizz, The Slayer" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <h2 className="text-5xl font-black text-toxic mb-6 uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
            G-WIZZ, THE SLAYER
          </h2>
          <p className="text-white/80 text-lg leading-relaxed font-mono">
            G-Wizz, The Slayer is a recording artist from Knysna, South Africa, blending hip-hop influences with self-produced work. As a multidisciplinary creative, the artist manages video direction, sound production, and graphic design for their releases. The brand focuses on an authentic, alien sci-fi aesthetic, purposefully avoiding cyberpunk themes or external genre labels. Driven by a mission to inspire local youth, G-Wizz, The Slayer continues to grow an international collaborative network and expand their digital presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}