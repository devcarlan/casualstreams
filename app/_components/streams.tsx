import { Suspense, use } from 'react'
import type { SyncStreamsResult } from '../actions/syncStreams'
import { Featured } from './featured'
import FeaturedSkeleton from './featuredSkeleton'
import { StreamList } from './streamList'
import StreamListSkeleton from './streamListSkeleton'

type StreamsProps = {
  promisedCasuals: Promise<SyncStreamsResult>
}

const FeaturedContent = ({ promisedCasuals }: StreamsProps) => {
  const { featuredStreamer } = use(promisedCasuals)

  return featuredStreamer ? <Featured streamer={featuredStreamer} /> : null
}

const CasualsContent = ({ promisedCasuals }: StreamsProps) => {
  const { casuals } = use(promisedCasuals)

  return <StreamList streams={casuals} />
}

const Streams = ({ promisedCasuals }: StreamsProps) => {
  return (
    <>
      <section className='hidden border-blue-600 border-y-2 bg-[#d3d3d3] py-4 md:flex md:justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <p className='mb-4 font-start text-center text-xl'>Featured Stream</p>
          <Suspense fallback={<FeaturedSkeleton />}>
            <FeaturedContent promisedCasuals={promisedCasuals} />
          </Suspense>
        </div>
      </section>

      <section className='mt-2 flex flex-col py-4'>
        <p className='font-start text-center text-xl'>Stream List</p>
        <Suspense fallback={<StreamListSkeleton />}>
          <CasualsContent promisedCasuals={promisedCasuals} />
        </Suspense>
      </section>
    </>
  )
}

export default Streams
