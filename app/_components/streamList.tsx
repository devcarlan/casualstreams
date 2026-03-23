'use client'

import { useState } from 'react'
import type { Stream } from '../actions/syncStreams'
import { StreamCard } from './streamCard'

type StreamListProps = {
  streams: Stream[]
}

export const StreamList = ({ streams }: StreamListProps) => {
  const [visible, setVisible] = useState(20)

  const showMore = () => {
    setVisible((prevValue) => prevValue + 20)
  }

  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {streams.slice(0, visible).map((stream, i: number) => (
          <StreamCard
            key={i}
            user={stream.user_name}
            title={stream.title !== '' ? stream.title : 'No Title Provided'}
            views={stream.viewer_count}
            game={
              stream.game_name !== ''
                ? stream.game_name
                : 'No Game Name Provided'
            }
            thumb={stream.thumbnail_url}
            type={stream.type}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <button
          type='button'
          className={
            visible >= streams.length - 1
              ? 'mt-2 px-4 py-2 bg-gray-400 rounded-full text-white text-center hover:cursor-not-allowed'
              : 'mt-2 px-4 py-2 bg-blue-600 rounded-full text-white text-center'
          }
          onClick={showMore}
        >
          {visible >= streams.length - 1 ? 'No More' : 'Show More'}
        </button>
      </div>
    </>
  )
}
