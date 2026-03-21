'use client'

import { useEffect } from 'react'

type Props = {
  channel: string
}

const TwitchPlayer = ({ channel }: Props) => {
  useEffect(() => {
    import('twitch-video-element')
  }, [])

  return (
    <div className='w-200 aspect-video'>
      <twitch-video
        src={`https://www.twitch.tv/${channel}`}
        parent={window.location.hostname}
        autoplay
        muted
        className='block w-125 h-full'
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default TwitchPlayer
