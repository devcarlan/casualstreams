import { StreamCard } from './streamcard'

export const StreamList = ({ streams }) => {
  return (
    <>
      <div className='mt-2 py-4 flex-col'>
        <p className='font-start text-xl text-center'>Stream List</p>
        <div className='flex flex-wrap justify-center'>
          {streams.map((stream, i) => (
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
      </div>
    </>
  )
}
