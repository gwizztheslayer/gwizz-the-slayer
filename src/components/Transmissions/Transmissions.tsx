import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

// Helper to convert Sanity image objects to usable URLs
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// Ensure this component refetches data dynamically
export const revalidate = 60; 

export default async function Transmissions() {
  // Query the Sanity Database for Transmissions, ordered by date
  const query = `*[_type == "transmission"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage
  }`;
  
  let transmissions = [];
  try {
    transmissions = await client.fetch(query);
  } catch (error) {
    console.error("Failed to fetch transmissions:", error);
  }

  // Format date safely
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <section id="transmissions" className="py-24 bg-black/80 border-t border-toxic/20 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-black text-toxic mb-12 uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">THE VAULT: TRANSMISSIONS</h2>
        
        {transmissions.length === 0 ? (
          <div className="border border-white/10 p-8 text-center bg-black/50 font-mono text-white/50 uppercase tracking-widest">
            NO CLASSIFIED TRANSMISSIONS AT THIS TIME.
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {transmissions.map((post: any) => (
              <div key={post._id} className="group border border-white/10 bg-black/60 hover:border-toxic/50 transition-colors flex flex-col md:flex-row overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                
                {post.mainImage && (
                  <div className="w-full md:w-1/3 relative aspect-video md:aspect-square border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                    <Image 
                      src={urlFor(post.mainImage).width(600).url()} 
                      alt={post.title} unoptimized 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                    />
                  </div>
                )}
                
                <div className={`p-8 flex flex-col justify-center ${post.mainImage ? 'md:w-2/3' : 'w-full'}`}>
                  <div className="text-toxic font-black text-xs tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-toxic rounded-full animate-pulse shadow-[0_0_8px_#39ff14]"></span>
                    {formatDate(post.publishedAt)}
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tight leading-none group-hover:text-toxic transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 font-mono text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button className="self-start text-xs font-bold text-black bg-toxic px-6 py-2 uppercase tracking-widest hover:bg-white transition-colors">
                    DECRYPT
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
