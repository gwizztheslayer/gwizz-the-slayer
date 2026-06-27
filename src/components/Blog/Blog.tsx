"use client";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  { 
    id: 1, 
    date: "06.01.2026", 
    title: "Demons Don't Sleep: The Awakening", 
    excerpt: "Diving into the production, the gritty trap aesthetic, and the psychological depths behind the latest album.",
    content: "The process behind 'Demons Don't Sleep' wasn't just about recording tracks; it was about capturing a dark frequency. Late nights in the studio turned into early mornings, fueled by the raw, unfiltered energy of the underground trap scene. Every 808, every distorted snare, and every cinematic loop was meticulously crafted to reflect the chaos of the mind.\n\nThis album is a reflection of confronting the shadows. It is aggressive, unapologetic, and deeply atmospheric. By pushing the boundaries of traditional trap, we managed to create a soundscape that feels less like a playlist and more like a descent into the void. The demons don't sleep, and neither did we until this vision was fully realized."
  },
  { 
    id: 2, 
    date: "05.15.2026", 
    title: "G-Wizz, The Slayer: Visualizing The Void", 
    excerpt: "How the cinematic horror visualizers and music videos are shot, edited, and brought to life.",
    content: "When the G-Wizz, The Slayer media house was established, the directive was absolute: audio alone is not enough. The visual identity of G-Wizz, The Slayer demands cinematic, horror-infused elements that grip the viewer. We don't just shoot music videos; we construct visual nightmares.\n\nCreating the atmospheric horror loops and editing tracks like 'Drip' requires a specialized approach to color grading, framing, and visual distortion. We use heavy contrast, toxic green undertones, and rapid, jarring cuts to induce a sense of adrenaline and dread. G-Wizz, The Slayer serves as the creative engine ensuring that every piece of media released under the Slayer brand is a high-voltage, premium production."
  },
  { 
    id: 3, 
    date: "03.20.2026", 
    title: "Knysna's Underground: The Collaborations", 
    excerpt: "Behind the scenes of the heaviest collaborations in the vault, featuring Icebergh, Acidiq Truth, and Ceoxcam88.",
    content: "The energy in the Knysna underground scene is unmatched, and tapping into that local grit has been crucial to the evolution of the brand. Linking up with artists like Icebergh and Acidiq Truth for our recent studio sessions felt like catching lightning in a bottle. There's a competitive yet unified spirit when we hit the booth—iron sharpens iron.\n\nWorking with producers like Ceoxcam88 on tracks like 'Drip' brought a completely different bounce to the catalog. We aren't just making tracks in isolation; we are building an entire network of heavy-hitters. This collaboration is the foundation of the 'Knysna's Saviours' movement, proving that world-class, ground-shaking trap music can emerge from our own backyard."
  },
];

export default function Blog() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const togglePost = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="blog" className="w-full bg-surface py-24 px-6 border-t border-toxic/30 relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <h2 className="text-5xl md:text-7xl text-toxic font-black tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
          Transmissions
        </h2>

        <div className="flex flex-col border-t border-toxic/20">
          {posts.map((post) => (
            <div key={post.id} className="border-b border-toxic/20">
              <article 
                onClick={() => togglePost(post.id)}
                className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-void transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col gap-2 md:w-3/4">
                  <span className="text-toxic/60 text-sm font-black tracking-widest uppercase">{post.date}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-toxic transition-colors uppercase tracking-wide">{post.title}</h3>
                  <p className="text-white/60 tracking-wider text-sm mt-2 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-16 h-16 border border-white/10 group-hover:border-toxic group-hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all">
                  <motion.div
                    animate={{ rotate: expandedId === post.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedId === post.id ? (
                        <X className="w-6 h-6 text-toxic" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-white/30 group-hover:text-toxic" />
                    )}
                  </motion.div>
                </div>
              </article>

              <AnimatePresence>
                {expandedId === post.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-void/50 border-l-2 border-toxic mb-8 text-white/80 leading-relaxed space-y-4">
                      {post.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-lg">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
