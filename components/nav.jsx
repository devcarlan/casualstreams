import Link from 'next/link'

export const Nav = () => {
  return (
    <div className='inline-flex min-w-full justify-between items-center md:py-4'>
      <div className='ml-4'>
        <Link href='/'>
          <p className='text-2xl'>Casual Streams</p>
        </Link>
      </div>
    </div>
  )
}
