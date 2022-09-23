import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/nav'
import { Featured } from '../components/featured'
import syncStreams from '../lib/syncstreams'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const client = process.env.CLIENT
  const secret = process.env.SECRET
  const casuals = await syncStreams(client, secret)

  return {
    props: { casuals },
  }
}

export default function Home({ casuals }) {
  const stream = casuals[Math.floor(Math.random() * 101)]
  const randomStream = stream.user_name

  return (
    <div>
      <Featured streamer={randomStream} />
    </div>
  )
}
