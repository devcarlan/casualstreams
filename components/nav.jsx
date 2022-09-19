import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export const Nav = () => {
  const links = [
    { name: 'STREAMS', url: '/' },
    { name: 'ABOUT', url: '/' },
    { name: 'CONTACT', url: '/' },
  ]
  return (
    <div className='py-2 inline-flex min-w-full justify-between items-center md:py-4'>
      <div>
        <Link href='/'>
          <a>
            <p className='text-2xl'>Casual Streams</p>
          </a>
        </Link>
      </div>
      <nav className='hidden md:flex'>
        <ul className='md:inline-flex md:justify-between'>
          {links.map((link, i) => (
            <li
              key={i}
              className='mx-4 cursor-pointer text-zinc-800 hover:text-white'
            >
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='mr-4 md:hidden'>
        <FaBars size={25} className='hover:cursor-pointer' />
      </div>
    </div>
  )
}
