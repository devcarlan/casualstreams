import { TwitchPlayer } from 'react-twitch-embed'

export const Featured = ({ streamer }) => {
  return (
    <>
      <div className='py-2 flex items-center justify-center'>
        <div className='flex-col items-center justify-center'>
          <p className='pb-2 text-center text-2xl'>
            Featured Streamer: {streamer}
          </p>
          <TwitchPlayer
            channel={streamer}
            id={streamer}
            theme='dark'
            muted
            onVideoPause={() => console.log(':(')}
          />
        </div>
      </div>
    </>
  )
}
