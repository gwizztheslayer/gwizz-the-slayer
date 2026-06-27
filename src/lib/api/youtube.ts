export async function fetchYouTubeStreams() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    // Failsafe: Prevent crashing if keys are missing
    if (!apiKey || !channelId || apiKey === "your_youtube_api_key_here") {
      console.warn("[ YOUTUBE ] Missing API credentials. Bypassing uplink.");
      return { platform: "YouTube", status: "OFFLINE", data: [] };
    }

    // Fetch the 5 most recent videos from the channel
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5&type=video`, {
      next: { revalidate: 3600 } // Cache data for 1 hour to protect API quotas
    });

    if (!res.ok) throw new Error("YouTube API rejected the transmission.");
    const data = await res.json();

    return {
      platform: "YouTube",
      status: "ACTIVE",
      data: data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        artwork: item.snippet.thumbnails.high.url,
        plays: "N/A" // The basic search endpoint does not expose view counts
      }))
    };
  } catch (error) {
    console.error("[ YOUTUBE MATRIX FAILURE ]:", error);
    return { platform: "YouTube", status: "ERROR", data: [] };
  }
}
