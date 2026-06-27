"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";

export default function BookingForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.sendForm(
      "service_2skajqn",
      "template_3dzofli",
      form.current!,
      "xUjCntL_4vrC6PDwQ"
    ).then(
      (result: any) => {
        console.log("SUCCESS!", result.text);
        setStatus("success");
        form.current?.reset();
      },
      (error: any) => {
        console.log("FAILED...", error.text);
        setStatus("error");
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-zinc-900/50 p-8 border border-zinc-800 shadow-[0_0_30px_rgba(0,188,212,0.05)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Name / Organization</label>
          <input type="text" name="name" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Who are you?" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Email Address</label>
          <input type="email" name="email" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Where do we reply?" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Inquiry Type</label>
        <select name="title" className="w-full bg-black border border-zinc-800 p-3 text-zinc-400 focus:outline-none focus:border-cyan-500 transition-colors appearance-none">
          <option value="Live Performance">Live Performance / Show</option>
          <option value="Feature Verse">Feature Verse</option>
          <option value="Press / Interview">Press / Interview</option>
          <option value="General Business">General Business</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Details</label>
        <textarea name="message" rows={5} required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Provide dates, locations, and budget expectations..."></textarea>
      </div>

      <button type="submit" disabled={status === "loading" || status === "success"} className="w-full bg-cyan-500 text-black font-bold uppercase tracking-widest p-4 hover:bg-cyan-400 transition-colors hover:shadow-[0_0_20px_rgba(0,188,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3">
        {status === "loading" ? (
          <><Loader2 className="animate-spin" size={20} /> TRANSMITTING...</>
        ) : status === "success" ? (
          "REQUEST RECEIVED"
        ) : (
          "TRANSMIT REQUEST"
        )}
      </button>
      
      {status === "error" && (
        <p className="text-red-500 text-xs font-mono text-center mt-2">Error sending transmission. Please try again.</p>
      )}
    </form>
  );
}
