import TwitchPlayer from './twitchPlayer'

type FeaturedProps = {
  streamer: string
}

export const Featured = ({ streamer }: FeaturedProps) => {
  return (
    <>
      <div className='py-4 bg-[#d3d3d3] border-blue-600 border-b-2 border-t-2 hidden md:flex md:justify-center '>
        <div className='flex-col items-center justify-center'>
          <p className='mb-4 font-start text-center text-xl'>Featured Stream</p>
          <TwitchPlayer channel={streamer} />

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
