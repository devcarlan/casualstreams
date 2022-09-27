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
  }, [streamers])

  const randomStreamer = randomStream.user_name

  return (
    <>
      <Head>
        <title>Casual Streams</title>
      </Head>
      <Featured streamer={randomStreamer} />
      <StreamList streams={streamers} />
    </>
  )
}
