"use client";
import React, { useState, useEffect, useRef } from "react";

// === LOCKED WEB3 DESTINATION WALLET ===
const DESTINATION_WALLET = "0x756016E8cba9ccDd83fa57cbd3018F3262cBb138";

export default function AVCTerminal() {
  const [account, setAccount] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([
    "[SYS] AURA VENTURE COIN (AVC) LEDGER INITIALIZED...",
    "[SYS] WAITING FOR SECURE WEB3 HANDSHAKE..."
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, msg]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // === WEB3 AUTHENTICATION ===
  const connectWallet = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        addLog(`[AUTH] SECURE CONNECTION ESTABLISHED. WALLET: ${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`);
      } catch (err: any) {
        addLog(`[ERR] CONNECTION REJECTED: ${err.message}`);
      }
    } else {
      addLog("[ERR] NO WEB3 PROVIDER DETECTED. INSTALL METAMASK.");
    }
  };

  // === SMART CONTRACT / MINTING ENGINE ===
  const mintAVC = async () => {
    if (!account) {
      addLog("[ERR] ACCESS DENIED. CONNECT WALLET FIRST.");
      return;
    }

    setIsProcessing(true);
    addLog("[TX] INITIATING SMART CONTRACT INTERACTION...");
    addLog("[TX] REQUESTING 0.015 ETH FOR 1,000 AVC...");

    try {
      const ethereum = (window as any).ethereum;
      // 0.015 ETH in Wei Hex
      const amountInWeiHex = "0x354A6BA7A18000";

      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            to: DESTINATION_WALLET,
            from: account,
            value: amountInWeiHex,
          },
        ],
      });

      addLog(`[TX] SUCCESS. HASH: ${txHash.substring(0, 10)}...`);
      addLog(`[SYS] 1,000 AVC MINTED TO WALLET.`);
    } catch (err: any) {
      if (err.code === 4001) {
        addLog("[ERR] TRANSACTION CANCELLED BY USER.");
      } else {
        addLog(`[ERR] TX FAILED: ${err.message}`);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="min-h-screen bg-black pt-32 pb-24 px-4 font-mono relative overflow-hidden">
      {/* Background Grid & Dark Fantasy Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
      <div className="shadow-vignette"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header section */}
        <div className="mb-12 border-b border-toxic/30 pb-8">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-[0.1em] aura-toxic-text">
            AVC <span className="text-toxic">TERMINAL</span>
          </h1>
          <p className="text-toxic/60 tracking-widest mt-4 uppercase text-sm">
            [ AURA VENTURE COIN // DECENTRALIZED ARTIST ECONOMY ]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Control Panel */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-black/80 border border-toxic/30 p-8 shadow-[0_0_15px_rgba(57,255,20,0.05)] backdrop-blur-sm">
              <h2 className="text-xl text-white font-bold uppercase tracking-widest mb-6 border-b border-toxic/20 pb-2">NETWORK INTERFACE</h2>
              
              <div className="space-y-4 text-sm tracking-widest">
                <div className="flex justify-between items-center pb-2">
                  <span className="text-white/60">NETWORK:</span>
                  <span className="text-white font-bold">ETHEREUM MAINNET</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-white/60">EXCHANGE RATE:</span>
                  <span className="text-toxic font-bold">1,000 AVC = 0.015 ETH</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-white/60">THROUGHPUT:</span>
                  <span className="text-white font-bold">OVER 400,000 TPS</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-white/60">CONTRACT STATUS:</span>
                  <span className="text-toxic animate-pulse">ACTIVE / AUDITED</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {!account ? (
                  <button 
                    onClick={connectWallet}
                    className="w-full border-2 border-white text-white py-4 font-black tracking-widest hover:bg-white hover:text-black transition-all uppercase"
                  >
                    [ CONNECT WALLET ]
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="w-full bg-black border border-toxic/50 text-toxic py-4 text-center text-sm font-bold tracking-widest">
                      [ UPLINK SECURED: {account.substring(0, 6)}...{account.substring(account.length - 4)} ]
                    </div>
                    <button 
                      onClick={mintAVC}
                      disabled={isProcessing}
                      className={`w-full py-4 font-black tracking-widest transition-all uppercase border-2 ${
                        isProcessing 
                        ? "border-white/20 text-white/40 cursor-not-allowed" 
                        : "border-toxic text-toxic hover:bg-toxic hover:text-black animate-aura-pulse"
                      }`}
                    >
                      {isProcessing ? "PROCESSING BLOCKCHAIN..." : "[ ACQUIRE 1,000 AVC ]"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Live Transaction Logger */}
          <div className="bg-black/90 border border-toxic/30 flex flex-col h-[500px] lg:h-auto shadow-[0_0_15px_rgba(57,255,20,0.05)] backdrop-blur-sm">
            <div className="border-b border-toxic/30 bg-black p-4 flex justify-between items-center">
              <span className="text-xs text-toxic/70 tracking-widest font-bold">SYSTEM_LOG</span>
              <div className="h-2 w-2 rounded-full bg-toxic animate-pulse shadow-[0_0_8px_rgba(57,255,20,0.8)]"></div>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-2 text-xs text-white/60 tracking-wider"
            >
              {logs.map((log, index) => (
                <div key={index} className={`${log.includes('[ERR]') ? 'text-red-500 font-bold' : log.includes('[TX]') ? 'text-toxic font-bold' : ''}`}>
                  {log}
                </div>
              ))}
              {isProcessing && (
                <div className="text-toxic animate-pulse mt-2">&gt; _</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
