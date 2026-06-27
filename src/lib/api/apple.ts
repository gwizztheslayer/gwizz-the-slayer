export async function fetchAppleStreams() {
  try {
    // Pulls from .env, but falls back to your hardcoded ID to guarantee stability
    const artistId = process.env.APPLE_ARTIST_ID || "973272178"; 

    if (!artistId || artistId === "your_apple_artist_id_here") {
      console.warn("[ APPLE MUSIC ] Missing Artist ID. Bypassing uplink.");
      return { platform: "Apple Music", status: "OFFLINE", data: [] };
    }

    // Ping the free iTunes/Apple Music lookup endpoint (Filtered for ZA market)
    const res = await fetch(`https://itunes.apple.com/lookup?id=${artistId}&entity=song&limit=5&country=za`, {
      next: { revalidate: 3600 } // Cache data for 1 hour to optimize performance
    });

    if (!res.ok) throw new Error("Apple network rejected the transmission.");
    const data = await res.json();

    // The first result is the artist metadata, the rest are the actual tracks
    const tracks = data.results.filter((item: any) => item.wrapperType === "track");

    return {
      platform: "Apple Music",
      status: "ACTIVE",
      data: tracks.map((track: any) => ({
        id: track.trackId,
        title: track.trackName,
        url: track.trackViewUrl,
        // Apple returns 100x100 artwork by default, we swap the URL string to grab the high-res 600x600 version
        artwork: track.artworkUrl100.replace("100x100bb", "600x600bb"),
        plays: "N/A" // Apple does not publicly expose play counts
      }))
    };
  } catch (error) {
    console.error("[ APPLE MUSIC MATRIX FAILURE ]:", error);
    return { platform: "Apple Music", status: "ERROR", data: [] };
  }
}
