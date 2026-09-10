export function parseLatestVideo(xml: string) {
  const entry = xml.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];
  const id = entry?.match(/<yt:videoId>([\w-]{11})<\/yt:videoId>/)?.[1];
  return id || null;
}
export async function latestVideo(channelId: string) {
  try {
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 900 }, signal: AbortSignal.timeout(6000) },
    );
    return response.ok ? parseLatestVideo(await response.text()) : null;
  } catch {
    return null;
  }
}
