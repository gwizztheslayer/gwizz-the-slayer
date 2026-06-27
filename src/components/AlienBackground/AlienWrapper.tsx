"use client";
import dynamic from "next/dynamic";

// OPTIMIZATION: Safely forcing the 3D canvas to only render on the client side
const AlienBackground = dynamic(() => import("./AlienBackground"), { ssr: false });

export default function AlienWrapper() {
  return <AlienBackground />;
}