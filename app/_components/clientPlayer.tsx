'use client'

import dynamic from 'next/dynamic'

const TwitchPlayer = dynamic(() => import('./twitchPlayer'), {
  ssr: false,
  loading: () => (
    <div className='aspect-video w-[800px] max-w-full rounded-md bg-gray-300 animate-pulse' />
  ),
})

type Props = {
  channel: string
}

const ClientPlayer = ({ channel }: Props) => {
  return <TwitchPlayer channel={channel} />
}
export default ClientPlayer
