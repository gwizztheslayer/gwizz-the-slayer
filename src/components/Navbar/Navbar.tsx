"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // The definitive list of tabs. Add or remove as needed!
  const tabs = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "#about" },
    { label: "VIDEOS", href: "#videos" },
    { label: "DISCOGRAPHY", href: "#discography" },
    { label: "THE VAULT", href: "#vault" },
    { label: "THE ARSENAL", href: "#arsenal" },
    { label: "SHOWS", href: "#shows" },
    { label: "NETWORK", href: "#network" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[2000] bg-void/90 backdrop-blur-md border-b border-toxic/20 h-16 flex items-center justify-center px-1 sm:px-4 w-full">
      <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar w-full max-w-[1400px] mx-auto items-center h-full">
        
        {/* LOGO SECTION */}
        <Link href="/" className="shrink-0 flex items-center mr-2 sm:mr-4">
          <img 
            src="/logo.png" 
            alt="G-Wizz The Slayer Logo" 
            className="h-8 sm:h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>
        
        {/* TABS SECTION - Ultra compact to fit 9 tabs perfectly */}
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || (pathname === '/' && tab.href === '/');
          
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`text-[9px] sm:text-[11px] font-bold tracking-widest transition-all whitespace-nowrap h-full flex items-center border-b-2 px-1 ${
                isActive 
                  ? "text-toxic border-toxic" 
                  : "text-white/60 border-transparent hover:text-white hover:border-toxic/50"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}