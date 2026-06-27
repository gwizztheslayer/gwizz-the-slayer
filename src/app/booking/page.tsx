import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking & Contact | G-Wizz, The Slayer",
  description: "Direct contact for live performances, feature verses, and press inquiries for South African modern trap artist G-Wizz, The Slayer.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 pt-24 pb-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-cyan-500 mb-4 uppercase tracking-tighter border-b border-cyan-500/20 pb-4">
          BOOKING & INQUIRIES
        </h1>
        <p className="text-lg text-zinc-400 mb-12">
          Secure G-Wizz, The Slayer for live stage performances, feature verses, and event appearances.
        </p>

        <form action="mailto:contact@gwizztheslayer.co.za" method="POST" encType="text/plain" className="space-y-6 bg-zinc-900/50 p-8 border border-zinc-800 shadow-[0_0_30px_rgba(0,188,212,0.05)]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Name / Organization</label>
              <input type="text" name="Name" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Who are you?" />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Email Address</label>
              <input type="email" name="Email" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Where do we reply?" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Inquiry Type</label>
            <select name="Type" className="w-full bg-black border border-zinc-800 p-3 text-zinc-400 focus:outline-none focus:border-cyan-500 transition-colors appearance-none">
              <option value="Live Performance">Live Performance / Show</option>
              <option value="Feature Verse">Feature Verse</option>
              <option value="Press / Interview">Press / Interview</option>
              <option value="General Business">General Business</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Details</label>
            <textarea name="Message" rows={5} required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Provide dates, locations, and budget expectations..."></textarea>
          </div>

          <button type="submit" className="w-full bg-cyan-500 text-black font-bold uppercase tracking-widest p-4 hover:bg-cyan-400 transition-colors hover:shadow-[0_0_20px_rgba(0,188,212,0.4)]">
            TRANSMIT REQUEST
          </button>
        </form>

        <div className="mt-12 text-center border-t border-zinc-800 pt-8">
           <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Direct Comms</p>
           <a href="mailto:contact@gwizztheslayer.co.za" className="text-white hover:text-cyan-400 transition-colors text-xl font-bold mt-2 inline-block">
             contact@gwizztheslayer.co.za
           </a>
        </div>
      </div>
    </main>
  );
}
