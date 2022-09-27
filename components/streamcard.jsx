import Image from 'next/image'
import { AiOutlineEye } from 'react-icons/ai'

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
      <a
        href={`https://www.twitch.tv/${user}`}
        target='_blank'
        rel='noreferrer'
      >
        <div className='p-4 m-4 bg-white shadow-lg rounded-md w-72 h-auto'>
          <div className='flex-col h-auto'>
            <div className='mb-2 flex justify-between'>
              {type === 'live' ? (
                <div className='flex items-center px-2 bg-red-600 rounded-full text-sm text-white text-center tracking-wide'>
                  Live
                </div>
              ) : (
                <div className='flex items-center px-2 bg-black rounded-full text-sm text-white text-center'>
                  Not Live
                </div>
              )}
              <div className='flex items-center ml-2 px-2 bg-blue-600 rounded-full text-sm text-white text-center'>
                <span>
                  <AiOutlineEye />
                </span>
                <p className='ml-1'>{views}</p>
              </div>
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
