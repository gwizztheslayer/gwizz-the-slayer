export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative z-50">
      <div className="w-16 h-16 border-4 border-toxic/20 border-t-toxic rounded-full animate-spin shadow-[0_0_15px_rgba(57,255,20,0.5)]"></div>
      <p className="text-toxic font-mono tracking-widest mt-6 uppercase text-sm animate-pulse drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">
        Establishing Secure Connection...
      </p>
    </div>
  );
}