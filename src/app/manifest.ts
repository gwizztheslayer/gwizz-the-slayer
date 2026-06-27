import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "G-Wizz, The Slayer | Official Hub",
    short_name: "The Slayer",
    description: "Classified transmissions, merch, and audio-visual horror from the Western Cape underground.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#39ff14",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}