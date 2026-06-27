"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { inventory } from "@/lib/inventory";
import { useAudio } from "@/context/AudioContext";
import { ThirdwebProvider, TransactionButton } from "thirdweb/react";
import { prepareTransaction, toWei } from "thirdweb";
import { ethereum } from "thirdweb/chains";
import { client } from "@/lib/thirdweb";

const TARGET_WALLET = "0x9c71a4aE6a3B68Af592F0791352c72024507edcd";

export default function Arsenal() {
  const [txStatus, setTxStatus] = useState<{ id: string; msg: string; type: "error" | "success" | "pending" } | null>(null);
  const { playTrack, currentTrack, isPlaying, togglePlayPause } = useAudio();

  const physicalDrops = inventory.filter((item) => item.type === "physical");
  const digitalDrops = inventory.filter((item) => item.type === "digital");

  const handlePreview = (item: any) => {
    if (!item.previewUrl) return;
    const trackInfo = { title: `${item.name} (PREVIEW)`, artist: "G-Wizz, The Slayer", url: item.previewUrl, cover: item.image };
    if (currentTrack?.title === trackInfo.title) { togglePlayPause(); } else { playTrack(trackInfo, [trackInfo]); }
  };

  const handleFiatCheckout = (item: any, gateway: string) => {
    setTxStatus({ id: item.id, msg: `REDIRECTING TO ${gateway}...`, type: "pending" });
    const targetUrl = gateway === 'STRIPE' ? item.stripeLink : item.paypalLink;
    
    if (targetUrl && !targetUrl.includes("REPLACE_WITH") && !targetUrl.includes("PASTE_")) {
      window.open(targetUrl, "_blank");
      setTimeout(() => setTxStatus({ id: item.id, msg: `SECURE VAULT OPENED IN NEW TAB.`, type: "success" }), 1000);
    } else {
      setTimeout(() => setTxStatus({ id: item.id, msg: `${gateway} LINK NOT CONFIGURED.`, type: "error" }), 1000);
    }
  };

  const renderGrid = (items: typeof inventory) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.id} className="group flex flex-col justify-between border border-zinc-900/30 bg-zinc-950/40 p-4 rounded-sm hover:border-toxic/30 transition-all duration-300">
          <div>
            <Link href={`/arsenal/${item.id}`} className="w-full aspect-square bg-black border border-zinc-900 mb-6 flex items-center justify-center relative p-4 overflow-hidden block cursor-pointer">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
              />
            </Link>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-zinc-300 uppercase tracking-wide">{item.name}</h4>
              <p className="text-sm font-mono text-toxic mt-2">
                {item.priceUSD} USDT / ${item.priceUSD} // {item.priceETH} ETH
              </p>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs font-bold w-full mt-auto">
            {item.previewUrl && (
              <button 
                onClick={() => handlePreview(item)} 
                className="w-full border border-zinc-800 text-zinc-300 py-4 uppercase tracking-widest hover:border-toxic hover:text-toxic transition-colors"
              >
                {currentTrack?.title === `${item.name} (PREVIEW)` && isPlaying ? '[ PAUSE PREVIEW ]' : '[ PLAY AUDIO PREVIEW ]'}
              </button>
            )}

            <button 
              onClick={() => handleFiatCheckout(item, 'PAYPAL')} 
              className="w-full bg-[#FFC439] text-black py-4 uppercase tracking-widest hover:bg-[#F4BB33] transition-colors"
            >
              PAY WITH PAYPAL
            </button>

            <button 
              onClick={() => handleFiatCheckout(item, 'STRIPE')} 
              className="w-full bg-[#635BFF] text-white py-4 uppercase tracking-widest hover:bg-[#5851E5] transition-colors"
            >
              PAY WITH STRIPE
            </button>

            {/* LIVE WEB3 TRANSACTION GATEWAY */}
            <TransactionButton
              transaction={() => prepareTransaction({
                to: TARGET_WALLET,
                chain: ethereum,
                client: client,
                value: toWei(item.priceETH.toString()),
              })}
              onTransactionSent={() => setTxStatus({ id: item.id, msg: "AWAITING BLOCKCHAIN CONFIRMATION...", type: "pending" })}
              onTransactionConfirmed={() => setTxStatus({ id: item.id, msg: "PAYMENT SECURED. ASSET UNLOCKED.", type: "success" })}
              onError={(error) => setTxStatus({ id: item.id, msg: "TRANSACTION REJECTED.", type: "error" })}
              className="!w-full !border !border-zinc-900 !bg-black !text-toxic !py-4 !uppercase !tracking-widest hover:!bg-zinc-900/40 !transition-colors !rounded-none !font-mono !text-xs !font-bold"
            >
              PAY WITH CRYPTO (WEB3)
            </TransactionButton>
            
            {txStatus?.id === item.id && (
              <div className={`p-3 text-center border text-[10px] tracking-widest uppercase mt-4 ${ txStatus.type === "error" ? "border-red-900/50 text-red-400 bg-red-950/20" : "border-toxic/30 text-toxic bg-toxic/5"}`}>
                {txStatus.msg}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <ThirdwebProvider>
      <section id="arsenal" className="w-full bg-black py-24 px-6 border-y border-toxic/30 relative z-20 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
              THE ARSENAL
            </h2>
            <p className="text-white/70 mt-4 tracking-widest uppercase text-xs">
              Physical Apparel // Digital Assets // Web3 Economy
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-white font-black tracking-widest uppercase border-b border-toxic/30 pb-2 mb-8">
               [ PHYSICAL_SUPPLY ]
            </h3>
            {renderGrid(physicalDrops)}
          </div>

          <div>
            <h3 className="text-xl text-white font-black tracking-widest uppercase border-b border-toxic/30 pb-2 mb-8">
               [ DIGITAL_DROPS ]
            </h3>
            {renderGrid(digitalDrops)}
          </div>

        </div>
      </section>
    </ThirdwebProvider>
  );
}