export async function fetchYoutubeSearchResults(query: string) {
    const apiKey = process.env.YOUTUBE_DATA_API_KEY
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&type=video&part=snippet&videoDuration=long&maxResults=10`)
    const data = await response.json()
    return data
}