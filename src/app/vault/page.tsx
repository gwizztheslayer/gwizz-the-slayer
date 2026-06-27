import VaultMatrix from "@/components/VaultMatrix";

export default function VaultPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 p-8 font-mono selection:bg-zinc-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="border-b border-zinc-800 pb-6">
          <h1 className="text-4xl font-bold tracking-tighter text-white uppercase shadow-sm shadow-zinc-900">
            Aura System Vault
          </h1>
          <p className="text-zinc-500 mt-3 text-sm tracking-widest uppercase">
            Global Audio Matrix // Secure Data Uplink
          </p>
        </header>
        
        {/* The Matrix Component Injected Here */}
        <VaultMatrix />
        
        {/* Future expansion zone for the Digital Economy and Crypto Wallets */}
        <div className="w-full h-32 border border-zinc-900 bg-zinc-950 flex items-center justify-center rounded border-dashed">
          <span className="text-zinc-700 text-xs tracking-widest">[ DIGITAL ECONOMY NODE - OFFLINE ]</span>
        </div>
      </div>
    </main>
  );
}
