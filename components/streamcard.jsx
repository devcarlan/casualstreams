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
        <div className='p-8 m-4 shadow-md rounded-md w-80 h-80'>
          <div className='flex-col h-72 overflow-hidden border-b-8 border-transparent border-solid text-ellipsis'>
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
            <p>{user}</p>
            <p>{game}</p>
            <p>{title}</p>
          </div>
        </div>
      </a>
    </>
  )
}
