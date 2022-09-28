import { TwitchPlayer } from 'react-twitch-embed'

export const Featured = ({ streamer }) => {
  return (
    <>
      <div className='py-4 bg-[#d3d3d3] hidden md:flex md:justify-center '>
        <div className='flex-col items-center justify-center'>
          <p className='mb-4 font-start text-center text-xl'>Featured Stream</p>
          <TwitchPlayer
            channel={streamer}
            id={streamer}
            theme='dark'
            width={'640px'}
            height={'368px'}
            muted
          />

          <p className='mt-4 text-center text-sm underline'>
            <a
              href={`https://www.twitch.tv/${streamer}`}
              target='_blank'
              rel='noreferrer'
            >
              Visit Channel
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
