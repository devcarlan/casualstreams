import { useState } from 'react'
import { StreamCard } from './streamcard'

export const StreamList = ({ streams }) => {
  const [visible, setVisible] = useState(20)

  const showMore = () => {
    setVisible((prevValue) => prevValue + 20)
  }

  return (
    <>
      <div className='mt-2 py-4 flex-col'>
        <p className='font-start text-xl text-center'>Stream List</p>
        <div className='flex flex-wrap justify-center'>
          {streams.slice(0, visible).map((stream, i) => (
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
              start={stream.started_at}
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
      </div>
    </>
  )
}
