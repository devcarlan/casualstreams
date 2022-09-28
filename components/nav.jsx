import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export const Nav = () => {
  return (
    <div className='py-2 flex min-w-full justify-center items-center md:py-4'>
      <Link href='/'>
        <a>
          <p className='mx-auto font-nabla text-4xl'>Casual Streams</p>
        </a>
      </Link>

      {/*<nav className='hidden md:flex'>
        <ul className='md:inline-flex md:justify-between'>
          <li className='mx-4 cursor-pointer text-zinc-800 hover:text-white'>
            <Link href='/about'>ABOUT</Link>
          </li>
        </ul>
  </nav>
      <div className='mr-4 md:hidden'>
        <FaBars size={25} className='hover:cursor-pointer' />
      </div>*/}
    </div>
  )
}
