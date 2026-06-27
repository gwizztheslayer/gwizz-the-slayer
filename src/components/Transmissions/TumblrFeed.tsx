"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TumblrFeed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tumblr')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn("[ TRANSMISSIONS ] Uplink severed.", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="transmissions" className="w-full bg-black py-24 px-6 border-y border-toxic/30 font-mono relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-toxic font-black uppercase tracking-[0.2em] mb-12">
          [ DECRYPTED TRANSMISSIONS ]
        </h2>
        
        {loading ? (
          <div className="text-toxic animate-pulse text-xs tracking-widest uppercase">
            [ ESTABLISHING CONNECTION TO TUMBLR SERVERS... ]
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a 
                key={post.id} 
                href={post.post_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border border-zinc-900 bg-zinc-950 p-4 hover:border-toxic transition-all duration-300 block relative overflow-hidden"
              >
                {/* Visual Glitch Overlay */}
                <div className="absolute inset-0 bg-toxic/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
                
                {/* Render Photos if they exist */}
                {post.photos && post.photos.length > 0 && (
                  <div className="relative w-full h-48 mb-4 border border-zinc-800 group-hover:border-toxic/50 transition-colors overflow-hidden">
                    <Image 
                      src={post.photos[0].original_size.url} 
                      alt="Transmission Visual" 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                )}
                
                {/* Post Data */}
                <div className="text-zinc-500 text-[10px] mb-2 uppercase tracking-widest border-b border-zinc-900 pb-2">
                  ID: {post.id} // {new Date(post.timestamp * 1000).toLocaleDateString()}
                </div>
                
                {/* Render Text Snippet */}
                <div 
                  className="text-zinc-300 text-xs line-clamp-4 mt-2"
                  dangerouslySetInnerHTML={{ __html: post.summary || post.trail?.[0]?.content_raw || "[ ENCRYPTED VISUAL DATA ]" }}
                />
              </a>
            ))}
          </div>
        ) : (
          <div className="border border-zinc-900 bg-zinc-950 p-8 text-center text-zinc-600 text-xs tracking-widest uppercase">
            [ NO RECENT TRANSMISSIONS FOUND IN THE ARCHIVE. ]
          </div>
        )}
      </div>
    </section>
  );
}
