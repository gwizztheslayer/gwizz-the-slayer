import MetaPixel from "@/components/MetaPixel/MetaPixel";
// @ts-nocheck
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import { AudioProvider } from "@/context/AudioContext";
import { Space_Grotesk } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AudioPlayer from "@/components/AudioPlayer";
import Script from "next/script";
import CommLink from "@/components/CommLink/CommLink";
import KairoWidget from "@/components/KairoWidget/KairoWidget";

const mainFont = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.gwizztheslayer.co.za"),
  title: "G-Wizz, The Slayer",
  description: "The official digital hub for G-Wizz, The Slayer. Stream heavy-hitting modern trap anthems, dive into dark urban-industrial visuals, and explore the full discography including 'Demons Don't Sleep' and 'Knysna's Saviour'.",
  keywords: ["G-Wizz The Slayer", "Modern Trap", "Knysna Music", "South African Rap", "Trap Music", "Knysna's Saviour manga", "Dreams Of Colour"],
  verification: {
    other: {
      "p:domain_verify": "64694b793816c01bce092bf33f4e5710"
    }
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "G-Wizz, The Slayer | Official Hub",
    description: "The official digital hub for G-Wizz, The Slayer. Stream heavy-hitting modern trap anthems directly out of Knysna.",
    url: "https://www.gwizztheslayer.co.za",
    siteName: "G-Wizz, The Slayer",
    images: [{ 
      url: "/comic/knysna-saviour-cover.png", 
      width: 1200, 
      height: 630, 
      alt: "Knysna's Saviour Manga Cover" 
    }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G-Wizz, The Slayer",
    description: "Stream heavy-hitting modern trap anthems directly out of Knysna. Enter the underground.",
    images: ["/comic/knysna-saviour-cover.png"],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "G-Wizz, The Slayer",
    "url": "https://www.gwizztheslayer.co.za",
    "image": "https://www.gwizztheslayer.co.za/comic/knysna-saviour-cover.png",
    "genre": ["Trap", "Hip-Hop", "Modern Trap"],
    "origin": {
      "@type": "Place",
      "name": "Knysna, South Africa"
    }
  };

  return (
    <html lang="en" className="bg-black">
      <body className={mainFont.className + " bg-black text-white selection:bg-cyan-500 selection:text-black antialiased"}>
        <MetaPixel />
        {/* === META PIXEL === */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* === GOOGLE ANALYTICS 4 === */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LazyMotion features={domAnimation}>
          <AudioProvider>
            <PageTransition>
              {children}
            </PageTransition>
            <AudioPlayer />
          </AudioProvider>
        </LazyMotion>
                {/* === GLOBAL EVENT TRACKER === */}
        <Script id="global-event-tracker" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('click', function(e) {
            var target = e.target.closest('a');
            if (!target || !window.fbq) return;
            var href = target.href;
            if (href.includes('ffm.to/demonsdontsleepalbum')) window.fbq('trackCustom', 'Stream_DemonsDontSleep');
            else if (href.includes('/avc')) window.fbq('trackCustom', 'Enter_AVC_Terminal');
            else if (href.includes('dreams-of-colour.vercel.app')) window.fbq('trackCustom', 'Label_Crossover_DreamsOfColour');
            else if (/spotify|soundcloud|youtube|instagram|twitter|audiomack/.test(href)) window.fbq('trackCustom', 'Network_Outbound');
          });
        ` }} />
        <Analytics />
        <SpeedInsights />
                                <KairoWidget />
      </body>
    </html>
  );
}





