import { NextResponse } from "next/server";
import { fetchSoundCloudStreams } from "@/lib/api/soundcloud";
import { fetchSpotifyStreams } from "@/lib/api/spotify";
import { fetchYouTubeStreams } from "@/lib/api/youtube";
import { fetchAppleStreams } from "@/lib/api/apple";

export async function GET() {
  try {
    // Initiate all 4 uplinks in parallel for maximum performance
    const [soundcloudData, spotifyData, youtubeData, appleData] = await Promise.all([
      fetchSoundCloudStreams(),
      fetchSpotifyStreams(),
      fetchYouTubeStreams(),
      fetchAppleStreams()
    ]);

    return NextResponse.json({ 
        status: "ACTIVE",
        message: "Unified Audio Engine Fully Operational.",
        streams: {
            soundcloud: soundcloudData,
            spotify: spotifyData,
            youtube: youtubeData,
            apple: appleData
        }
    }, { status: 200 });
  } catch (error) {
    console.error("Audio Engine Matrix Failure:", error);
    return NextResponse.json({ error: "Failed to resolve stream connections." }, { status: 500 });
  }
}
