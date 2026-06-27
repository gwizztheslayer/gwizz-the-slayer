'use client';
import React, { useState } from 'react';

export default function Web3Connect() {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Wallet connection denied.");
      }
    } else {
      alert("No Web3 Provider detected. Please install MetaMask or Trust Wallet.");
    }
  };

  return (
    <button 
      onClick={connectWallet}
      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border ${account ? 'border-toxic text-toxic bg-toxic/10' : 'border-zinc-700 text-zinc-400 hover:text-white hover:border-white'}`}
    >
      {account ? `[ ${account.slice(0,6)}...${account.slice(-4)} ]` : '[ CONNECT WALLET ]'}
    </button>
  );
}
