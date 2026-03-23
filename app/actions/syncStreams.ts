export type Stream = {
  user_name: string
  title: string
  viewer_count: number
  game_name: string
  started_at: string
  thumbnail_url: string
  type: string
}

export type SyncStreamsResult = {
  casuals: Stream[]
  featuredStreamer?: string
}

async function SyncStreams(
  client: string,
  secret: string,
): Promise<SyncStreamsResult> {
  // get credentials
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${client}&client_secret=${secret}&grant_type=client_credentials`,
    {
      method: 'POST',
    },
  )

  const access = await res.json()

  // get live streams
  async function getStreams(after: string) {
    const res = await fetch(
      `https://api.twitch.tv/helix/streams?first=100${
        after ? `&after=${after}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          'Client-ID': client,
          Authorization: 'Bearer ' + access.access_token,
        },
      },
    )

    return await res.json()
  }

  // get live streams with 50 or less viewers
  async function getCasuals(after: string = ''): Promise<Stream[]> {
    let sum = 0
    const streams = await getStreams(after)

    for (const stream of streams.data) {
      sum += stream.viewer_count
    }

    const avg = Math.floor(sum / streams.data.length)

    if (avg > 49 && streams.pagination?.cursor) {
      return getCasuals(streams.pagination.cursor)
    }

    return streams.data
  }

  const casuals = await getCasuals()

  const featuredStreamer =
    casuals[Math.floor(Math.random() * casuals.length)]?.user_name

  return {
    casuals,
    featuredStreamer,
  }
}

export default SyncStreams
