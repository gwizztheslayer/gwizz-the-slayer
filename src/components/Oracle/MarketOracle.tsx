"use client";
import React, { useEffect, useState } from 'react';

export default function MarketOracle() {
  const [market, setMarket] = useState<{ eth: number; btc: number } | null>(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd')
      .then(res => res.json())
      .then(data => setMarket({ eth: data.ethereum.usd, btc: data.bitcoin.usd }))
      .catch(err => console.error("Oracle offline", err));
  }, []);

  return (
    <div className="w-full bg-black border-y border-toxic/20 p-2 font-mono text-[10px] text-toxic flex justify-between uppercase tracking-widest overflow-hidden whitespace-nowrap">
      <span className="animate-pulse">[ LIVE NETWORK ORACLE ]</span>
      <div className="flex gap-8">
        <span>ETH/USD: ${market ? market.eth.toLocaleString() : '---'}</span>
        <span>BTC/USD: ${market ? market.btc.toLocaleString() : '---'}</span>
        <span>AURA/USDT: [ INITIALIZING PHASE 1 ]</span>
      </div>
    </div>
  );
}
