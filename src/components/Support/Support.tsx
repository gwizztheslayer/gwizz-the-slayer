"use client";
import CryptoSupport from "./CryptoSupport/CryptoSupport";
import { motion } from "framer-motion";

export default function Support() {
  return (
    <section id="support" className="py-24 bg-black/90 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black text-toxic uppercase mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] tracking-widest">ACQUIRE / SUPPORT</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-mono">
          To purchase merch from The Arsenal or support the movement, use one of the secured gateways below. All orders are manually verified and fulfilled by G-Wizz, The Slayer.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <CryptoSupport />
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-black/80 border border-toxic/30 p-8 shadow-[0_0_20px_rgba(57,255,20,0.05)] flex flex-col justify-between items-center group hover:border-toxic/60 transition-colors">
            <div>
              <h3 className="text-toxic font-black tracking-widest uppercase mb-4 text-xl">PAYPAL</h3>
              <p className="text-white/60 text-sm mb-6 max-w-sm mx-auto font-mono">Pay securely via PayPal. Send the exact fiat amount for your merch or kit.</p>
            </div>
            <a href="https://paypal.me/dreamsofcolour?locale.x=en_US&country.x=ZA" target="_blank" rel="noopener noreferrer" className="inline-block border border-toxic text-toxic px-8 py-4 uppercase hover:bg-toxic hover:text-black transition-colors font-bold tracking-widest w-full">PAY VIA PAYPAL</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-black/80 border border-toxic/30 p-8 shadow-[0_0_20px_rgba(57,255,20,0.05)] flex flex-col justify-between items-center group hover:border-toxic/60 transition-colors">
            <div>
              <h3 className="text-toxic font-black tracking-widest uppercase mb-4 text-xl">STRIPE / CARD</h3>
              <p className="text-white/60 text-sm mb-6 max-w-sm mx-auto font-mono">Pay using any major Credit or Debit card securely via Stripe Checkout.</p>
            </div>
            <p className="text-toxic text-xs font-mono uppercase">Use the buttons inside The Arsenal section to initiate secure Stripe payment.</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-black/80 border border-toxic/30 p-8 shadow-[0_0_20px_rgba(57,255,20,0.05)] max-w-4xl mx-auto text-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-toxic drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div>
              <h3 className="text-white font-black tracking-widest uppercase mb-2 text-2xl">MERCH FULFILLMENT INSTRUCTIONS</h3>
              <p className="text-white/70 text-sm mb-6 font-mono leading-relaxed">After completing your payment via Crypto, PayPal, or Stripe, click the button below to send your <strong>TXID / Receipt Number</strong>, the <strong>name of the item</strong> you are purchasing, and your <strong>shipping address</strong> (or email for digital drops). I personally verify every transfer before dispatching your assets.</p>
              <a href="#contact" className="inline-block bg-toxic text-black px-10 py-3 uppercase hover:bg-white transition-colors font-black tracking-widest">SEND RECEIPT DETAILS</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}