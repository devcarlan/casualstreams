async function syncStreams(client, secret) {
  // get credentials
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${client}&client_secret=${secret}&grant_type=client_credentials`,
    {
      method: 'POST',
    }
  )

  const access = await res.json()

  // get live streams
  async function getStreams(after) {
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
      }
    )

    return await res.json()
  }

  // get live streams with 50 or less viewers
  async function getCasuals(after) {
    let sum = 0
    let streams = await getStreams(after)

    for (let stream of streams.data) {
      sum += stream.viewer_count
    }

    let avg = Math.floor(sum / streams.data.length)

    if (avg > 49) return await getCasuals(streams.pagination.cursor)

    return streams.data
  }

  return await getCasuals()
}

export default syncStreams
