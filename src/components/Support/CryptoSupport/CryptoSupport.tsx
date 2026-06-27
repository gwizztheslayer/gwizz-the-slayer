export default function CryptoSupport() {
  return (
    <div className="bg-black/80 border border-toxic/30 p-8 rounded-lg text-center shadow-[0_0_20px_rgba(57,255,20,0.05)]">
      <h3 className="text-toxic font-black tracking-widest uppercase mb-4 text-xl">DIRECT CRYPTO SUPPORT</h3>
      <p className="text-white/60 text-sm mb-6 max-w-sm mx-auto">
        Bypass the traditional banking system. Send USDT (TRC20) or BTC directly to the vault.
      </p>
      
      <div className="bg-white p-4 inline-block mb-6">
         {/* Placeholder for your actual QR code image */}
         <div className="w-32 h-32 bg-gray-900 flex items-center justify-center text-toxic text-[10px] font-mono">
           QR_CODE_HERE
         </div>
      </div>
      
      <div className="font-mono text-xs text-toxic break-all border border-toxic/20 p-3 bg-black/50">
        TXy1234567890abcdef1234567890abcdef
      </div>
    </div>
  );
}