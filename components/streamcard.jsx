import Image from 'next/image'

export const StreamCard = ({
  user,
  title,
  views,
  game,
  start,
  thumb,
  type,
}) => {
  let thumbnail
  thumbnail = thumb.replace('{width}', '256')
  thumbnail = thumbnail.replace('{height}', '144')
  return (
    <>
      <a href={`https://www.twitch.tv/${user}`} target='_blank'>
        <div className='p-4 m-4 shadow-md rounded-md w-72 h-auto'>
          <div className='flex-col h-auto'>
            <div className='flex justify-between'>
              {type === 'live' ? (
                <p className='flex items-center'>
                  &#128308; <span className='ml-1 text-lg'>Live</span>
                </p>
              ) : (
                <p className='flex items-center'>
                  &#9033; <span className='text-lg'>Not Live</span>
                </p>
              )}
              <div>{views}</div>
            </div>

            <Image src={thumbnail} width={256} height={144} />

            <p className='overflow-hidden text-ellipsis whitespace-nowrap'>
              {user}
            </p>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap'>
              {game}
            </p>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap'>
              {title}
            </p>
          </div>
        </div>
      </a>
    </>
  )
}
