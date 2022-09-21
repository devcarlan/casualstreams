async function syncStreams() {
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_CLIENT}&client_secret=${process.env.NEXT_PUBLIC_SECRET}&grant_type=client_credentials`,
    {
      method: 'POST',
    }
  )

  const access = await res.json()

  async function getStreams(after) {
    const req = await fetch(
      `https://api.twitch.tv/helix/streams?first=50${
        after ? `&after=${after}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          'Client-ID': process.env.NEXT_PUBLIC_CLIENT,
          Authorization: 'Bearer ' + access.access_token,
        },
      }
    )

    const streams = await req.json()
    console.log(streams)
  }

  getStreams()
}

export default syncStreams
