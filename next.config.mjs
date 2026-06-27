/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.scdn.co" },             // Spotify Artwork
      { protocol: "https", hostname: "is1-ssl.mzstatic.com" },  // Apple Music Artwork
      { protocol: "https", hostname: "i.ytimg.com" },           // YouTube Thumbnails
      { protocol: "https", hostname: "i1.sndcdn.com" }          // SoundCloud Artwork
    ],
  },
};

export default nextConfig;
