import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/nav'
import syncStreams from '../lib/syncstreams'
import styles from '../styles/Home.module.css'

export default function Home() {
  syncStreams()
  return <div>HOME</div>
}
