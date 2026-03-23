import Head from 'next/head'
import Streams from './_components/streams'
import SyncStreams from './actions/syncStreams'

export default function Home() {
  const promisedCasuals = SyncStreams(process.env.CLIENT!, process.env.SECRET!)

  return (
    <>
      <Head>
        <title>Casual Streams</title>
      </Head>
      <Streams promisedCasuals={promisedCasuals} />
    </>
  )
}
