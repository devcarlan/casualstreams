import Head from 'next/head'
import { Featured } from './_components/featured'
import { StreamList } from './_components/streamList'
import SyncStreams from './actions/syncStreams'

export default async function Home() {
  const casuals = await SyncStreams(process.env.CLIENT!, process.env.SECRET!)

  const randomStreamer =
    casuals[Math.floor(Math.random() * casuals.length)].user_name

  return (
    <>
      <Head>
        <title>Casual Streams</title>
      </Head>
      <Featured streamer={randomStreamer} />
      <StreamList streams={casuals} />
    </>
  )
}
