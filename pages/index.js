import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Featured } from '../components/featured'
import { StreamList } from '../components/streamlist'
import syncStreams from '../lib/syncstreams'

export async function getServerSideProps() {
  const client = process.env.CLIENT
  const secret = process.env.SECRET
  const casuals = await syncStreams(client, secret)

  return {
    props: { casuals },
  }
}

export default function Home({ casuals }) {
  const [streamers, setStreamers] = useState(casuals)
  const [randomStream, setRandomStream] = useState({})

  useEffect(() => {
    setRandomStream(streamers[Math.floor(Math.random() * 101)])
  }, [])

  const randomStreamer = randomStream.user_name

  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nabla&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Featured streamer={randomStreamer} />
      <StreamList streams={streamers} />
    </>
  )
}
