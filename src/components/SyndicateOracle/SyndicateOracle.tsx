"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SyndicateOracle() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: "assistant", content: "THE VAULT IS SECURE. WHAT DO YOU SEEK?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Hooks into your surviving /api/chat backend route
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || data.content || "TRANSMISSION INTERCEPTED. DECRYPTION FAILED." }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "ERROR: SIGNAL LOST. THE ALGORITHM BLOCKED THIS." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 bg-black border-2 border-toxic shadow-[0_0_20px_rgba(57,255,20,0.15)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-toxic text-black px-4 py-3 flex justify-between items-center">
              <span className="font-black font-mono tracking-widest text-xs uppercase">SYNDICATE ORACLE</span>
              <button onClick={() => setIsOpen(false)} className="hover:text-white transition-colors font-bold">X</button>
            </div>

            {/* Chat Log */}
            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3 font-mono text-sm bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:100%_4px]">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] ${msg.role === "user" ? "self-end text-white" : "self-start text-toxic"}`}>
                  <span className="text-[10px] opacity-50 block mb-1 uppercase tracking-widest">
                    {msg.role === "user" ? "GUEST" : "SYSTEM"}
                  </span>
                  <div className={`px-3 py-2 ${msg.role === "user" ? "bg-white/10" : "bg-toxic/10 border border-toxic/30"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="self-start text-toxic px-3 py-2 bg-toxic/10 border border-toxic/30 text-xs animate-pulse">
                  DECRYPTING SIGNAL...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={sendMessage} className="border-t border-toxic/30 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ENTER COMMAND..."
                className="flex-1 bg-black text-toxic px-4 py-3 font-mono text-xs focus:outline-none placeholder-toxic/30"
              />
              <button type="submit" disabled={isLoading || !input.trim()} className="px-4 py-3 bg-toxic text-black font-black text-xs hover:bg-white transition-colors disabled:opacity-50">
                SEND
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-toxic rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.4)] border-2 border-black hover:bg-white transition-colors group"
      >
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
          <circle cx="8" cy="10" r="1.5"/><circle cx="12" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/>
        </svg>
      </motion.button>
    </div>
  );
}