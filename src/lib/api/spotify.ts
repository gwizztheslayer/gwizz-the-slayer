export async function fetchSpotifyStreams() {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    
    // Explicit public artist profile mapping for G-Wizz, The Slayer
    const artistId = "1GM9nGfwFjiwZtgIWO3sh2";

    if (!clientId || !clientSecret || clientId === "your_spotify_client_id_here") {
      console.warn("[ SPOTIFY ] Missing API credentials. Bypassing uplink.");
      return { platform: "Spotify", status: "OFFLINE", data: [] };
    }

    // Authenticate clean server-to-server connection
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
      next: { revalidate: 3500 }
    });

    if (!tokenResponse.ok) throw new Error("Spotify token authorization failed.");
    const { access_token } = await tokenResponse.json();

    // Pull verified public catalog items via ZA market mapping
    const tracksResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ZA`, {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 3600 }
    });

    if (!tracksResponse.ok) throw new Error("Spotify catalog sync failed.");
    const tracksData = await tracksResponse.json();

    return {
      platform: "Spotify",
      status: "ACTIVE",
      data: tracksData.tracks.slice(0, 5).map((track: any) => ({
        id: track.id,
        title: track.name,
        artists: track.artists.map((a: any) => a.name).join(', '),
        url: track.external_urls.spotify,
        artwork: track.album.images[0]?.url,
        plays: "N/A"
      }))
    };
  } catch (error) {
    console.error("[ SPOTIFY ENGINE FAULT ]:", error);
    return { platform: "Spotify", status: "ERROR", data: [] };
  }
}
