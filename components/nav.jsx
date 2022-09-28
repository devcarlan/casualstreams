import Link from 'next/link'

export const Nav = () => {
  return (
    <div className='py-4 flex min-w-full justify-center items-center shadow-md md:border-none md:shadow-none'>
      <Link href='/'>
        <a>
          <p className='mx-auto font-nabla text-4xl stroke-black text-red-600'>
            Casual Streams
          </p>
        </a>
      </Link>
    </div>
  )
}
