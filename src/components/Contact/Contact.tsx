"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-surface py-24 px-6 border-t border-toxic/30 relative z-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
            Connect / Pre-Order
          </h2>
          <p className="text-white/70 mt-4 tracking-widest uppercase">Bookings // Features // Merch Orders</p>
        </div>

        <form 
          action="https://formsubmit.co/gwizztheslayer@gmail.com" 
          method="POST" 
          className="flex flex-col gap-6"
        >
          <input type="hidden" name="_subject" value="New Inquiry / Pre-Order from Slayer Portal" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="YOUR NAME" required className="w-full bg-void border border-toxic/30 p-4 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic transition-all" />
            <input type="email" name="email" placeholder="YOUR EMAIL" required className="w-full bg-void border border-toxic/30 p-4 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic transition-all" />
          </div>

          {/* New Fields for Order Sync */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input type="text" name="item_name" placeholder="ITEM (e.g. Metamorphosis Tee)" className="w-full bg-void border border-toxic/30 p-4 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic" />
            <input type="text" name="size" placeholder="SIZE" className="w-full bg-void border border-toxic/30 p-4 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic" />
            <input type="text" name="color" placeholder="COLOR" className="w-full bg-void border border-toxic/30 p-4 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic" />
          </div>

          <textarea 
            name="message" 
            placeholder="ADDITIONAL DETAILS / MESSAGE..." 
            rows={6}
            className="w-full bg-void border border-toxic/30 p-4 text-white font-mono placeholder:text-white/30 focus:outline-none focus:border-toxic transition-all resize-none"
          ></textarea>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-transparent border-2 border-toxic text-toxic font-black tracking-widest uppercase text-xl hover:bg-toxic hover:text-void transition-all duration-300 cursor-pointer"
          >
            Submit Order / Transmission
          </motion.button>
        </form>
      </div>
    </section>
  );
}