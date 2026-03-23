import ClientPlayer from './clientPlayer'

type FeaturedProps = {
  streamer: string
}

export const Featured = ({ streamer }: FeaturedProps) => {
  return (
    <>
      <ClientPlayer channel={streamer} />

      <p className='mt-4 text-center text-sm underline'>
        <a
          href={`https://www.twitch.tv/${streamer}`}
          target='_blank'
          rel='noreferrer'
        >
          Visit Channel
        </a>
      </p>
    </>
  )
}
