async function syncStreams() {
  let access
  await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_CLIENT}&client_secret=${process.env.NEXT_PUBLIC_SECRET}&grant_type=client_credentials`,
    {
      method: 'POST',
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))

  return access
}

export default syncStreams
