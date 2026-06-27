"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const merchItems = [
  { id: 1, name: "Metamorphosis Tee", price: "R250", image: "/images/metamorphosis tee.png", status: "Pre-Order", availableColors: ["White", "Black"], sizes: ["S", "M", "L", "XL"] },
  { id: 2, name: "Taking Over T-Shirt", price: "R300", image: "/images/Taking Over T-Shirt.png", status: "Pre-Order", availableColors: ["Black", "White"], sizes: ["S", "M", "L", "XL"] }
];

function ArsenalItem({ item }: { item: typeof merchItems[0] }) {
    const [size, setSize] = useState(item.sizes[0]);
    const [color, setColor] = useState(item.availableColors[0]);

    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-950 border border-toxic/20 p-6 flex flex-col gap-6 group hover:border-toxic transition-all duration-300"
        >
            <div className="aspect-square bg-black border border-toxic/10 flex items-center justify-center overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                    <p className="text-toxic font-mono text-xl">{item.price}</p>
                </div>
                <span className="px-3 py-1 bg-toxic/10 border border-toxic/30 text-toxic text-xs font-bold uppercase tracking-widest">
                    {item.status}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase text-white/50 tracking-widest">Color</label>
                    <select 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)}
                        className="bg-black border border-toxic/30 p-2 text-white text-sm focus:outline-none focus:border-toxic"
                    >
                        {item.availableColors.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase text-white/50 tracking-widest">Size</label>
                    <select 
                        value={size} 
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-black border border-toxic/30 p-2 text-white text-sm focus:outline-none focus:border-toxic"
                    >
                        {item.sizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
            </div>

            <a href="#contact" className="w-full py-4 bg-toxic text-black font-black tracking-widest uppercase text-center hover:bg-white transition-colors">
                Secure Your Size
            </a>
        </motion.div>
    );
}

export default function Arsenal() {
  return (
    <section id="arsenal" className="w-full bg-black py-24 px-6 border-y border-toxic/30 relative z-20 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* HEADER */}
        <div className="text-center">
            <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                THE ARSENAL
            </h2>
            <p className="text-white/70 mt-4 tracking-widest uppercase text-xs">
                Physical Apparel // Digital Assets // Web3 Economy
            </p>
        </div>

        {/* SECTION 1: PHYSICAL APPAREL */}
        <div className="flex flex-col gap-8">
            <h3 className="text-xl text-white font-black tracking-widest uppercase border-b border-toxic/30 pb-2">
               [ PHYSICAL_GEAR ]
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {merchItems.map((item) => (
                <ArsenalItem key={item.id} item={item} />
              ))}
            </div>
        </div>

        {/* SECTION 2: DIGITAL ASSETS & PAYMENT GATEWAYS */}
        <div className="flex flex-col gap-8 mt-12">
            <h3 className="text-xl text-white font-black tracking-widest uppercase border-b border-toxic/30 pb-2">
               [ DIGITAL_VAULT_&_WEB3 ]
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Comic / Digital Asset */}
                <div className="border border-toxic/30 bg-zinc-950 p-6 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all flex flex-col">
                    <div className="aspect-video bg-black relative overflow-hidden mb-6 border border-zinc-800">
                        {/* Fallback to toxic gradient if image is missing */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black to-toxic/20 opacity-50"></div>
                        <div className="absolute top-4 right-4 bg-toxic text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest z-10">
                            DIGITAL ASSET
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center font-black tracking-[0.3em] text-white/20 text-2xl uppercase mix-blend-overlay">
                            KNYSNA'S SAVIOUR
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Knysna's Saviour [Issue 01]</h3>
                    <p className="text-toxic font-mono text-xl mb-4">R150</p>
                    <p className="text-zinc-400 text-xs mb-8 flex-1 leading-relaxed">
                        Official digital comic tie-in. Expand the lore. High-resolution PDF delivery via encrypted protocol immediately upon clearance.
                    </p>
                    
                    <div className="flex flex-col gap-3 mt-auto">
                        <button className="w-full bg-toxic text-black font-black uppercase tracking-widest py-4 text-xs hover:bg-white transition-colors">
                            [ CHECKOUT VIA STRIPE ]
                        </button>
                        <button className="w-full border border-zinc-600 text-zinc-300 font-bold uppercase tracking-widest py-3 text-xs hover:border-toxic hover:text-toxic transition-colors">
                            PAY WITH PAYPAL
                        </button>
                    </div>
                </div>

                {/* Crypto / Web3 Node */}
                <div className="border border-toxic/30 bg-zinc-950 p-6 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all flex flex-col">
                    <div className="aspect-video bg-black relative overflow-hidden mb-6 border border-zinc-800 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-20"></div>
                        <div className="text-toxic text-6xl animate-pulse drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">◆</div>
                        <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest z-10">
                            WEB3 NODE
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Aura Venture Coin (AVC)</h3>
                    <p className="text-toxic font-mono text-xl mb-4">LIVE MARKET RATE</p>
                    <p className="text-zinc-400 text-xs mb-8 flex-1 leading-relaxed">
                        Tap into the decentralized economy. Purchase exclusive governance rights, early track drops, and secure your place in the syndicate.
                    </p>
                    
                    <div className="flex flex-col gap-3 mt-auto">
                        <button className="w-full border-2 border-toxic text-toxic font-black uppercase tracking-widest py-4 text-xs hover:bg-toxic hover:text-black transition-colors shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                            [ CONNECT WALLET ]
                        </button>
                        <button className="w-full border border-zinc-600 text-zinc-300 font-bold uppercase tracking-widest py-3 text-xs hover:border-white hover:text-white transition-colors">
                            PAY VIA CRYPTO
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}