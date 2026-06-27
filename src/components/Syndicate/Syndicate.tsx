"use client";
import { motion } from "framer-motion";

export default function Syndicate() {
  return (
    <section id="syndicate" className="w-full bg-void py-32 px-6 border-t border-toxic/30 relative z-20 text-center">
      <div className="shadow-vignette"></div>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 relative z-10">
        <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase aura-toxic-text">
          The Syndicate
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-4">
          Bypass the algorithm. Join the inner circle to receive classified transmissions, early access to The Arsenal drops, and private gig locations directly to your inbox.
        </p>
        
        {/* FormSubmit Integration */}
        <form 
          action="https://formsubmit.co/gwizztheslayer@gmail.com" 
          method="POST" 
          className="w-full flex flex-col sm:flex-row gap-4"
        >
          {/* FormSubmit Configuration (Hidden Fields) */}
          <input type="hidden" name="_subject" value="New Syndicate Member Registration!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.gwizztheslayer.co.za/" />
          
          <input 
            type="email" 
            name="email"
            placeholder="[ ENTER YOUR EMAIL... ]" 
            className="flex-1 bg-surface border border-toxic/50 p-4 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic focus:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all uppercase tracking-widest"
            required
          />
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-toxic text-void font-black tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap cursor-pointer animate-aura-pulse"
          >
            [ JOIN THE CULT ]
          </motion.button>
        </form>
      </div>
    </section>
  );
}
