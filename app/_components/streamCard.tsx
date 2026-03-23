import { Eye } from 'lucide-react'
import Image from 'next/image'

type StreamCardProps = {
  user: string
  title: string
  views: number
  game: string
  thumb: string
  type: string
}

export const StreamCard = ({
  user,
  title,
  views,
  game,
  thumb,
  type,
}: StreamCardProps) => {
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
                  <Eye />
                </span>
                <p className='ml-1'>{views}</p>
              </div>
            </div>

            <Image
              src={thumbnail}
              alt={title}
              width={256}
              height={144}
              priority={true}
            />
            <div className='mt-1'>
              <p className='overflow-hidden font-semibold text-ellipsis whitespace-nowrap'>
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
        </div>
      </a>
    </>
  )
}
