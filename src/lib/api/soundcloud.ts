export async function fetchSoundCloudStreams() {
  try {
    const clientId = process.env.SOUNDCLOUD_CLIENT_ID;
    const userId = process.env.SOUNDCLOUD_USER_ID;

    // Failsafe: Prevent crashing if keys are missing
    if (!clientId || !userId || clientId === "your_soundcloud_client_id_here") {
      console.warn("[ SOUNDCLOUD ] Missing API credentials. Bypassing uplink.");
      return { platform: "SoundCloud", status: "OFFLINE", data: [] };
    }

    const res = await fetch(`https://api.soundcloud.com/users/${userId}/tracks?client_id=${clientId}&limit=5`, {
      next: { revalidate: 3600 } // Cache data for 1 hour to prevent rate-limiting
    });
    
    if (!res.ok) throw new Error("SoundCloud API rejected the transmission.");

    const data = await res.json();
    
    return { 
      platform: "SoundCloud", 
      status: "ACTIVE", 
      data: data.map((track: any) => ({
        id: track.id,
        title: track.title,
        url: track.permalink_url,
        artwork: track.artwork_url,
        plays: track.playback_count
      }))
    };
  } catch (error) {
    console.error("[ SOUNDCLOUD MATRIX FAILURE ]:", error);
    return { platform: "SoundCloud", status: "ERROR", data: [] };
  }
}
