const StreamListSkeleton = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className='m-4 h-[280px] w-72 rounded-md bg-white p-4 shadow-lg'
          >
            <div className='mb-2 flex justify-between'>
              <div className='h-6 w-14 rounded-full bg-gray-300 animate-pulse' />
              <div className='h-6 w-16 rounded-full bg-gray-300 animate-pulse' />
            </div>
            <div className='h-36 rounded-md bg-gray-300 animate-pulse' />
            <div className='mt-3 space-y-2'>
              <div className='h-4 w-1/2 rounded bg-gray-300 animate-pulse' />
              <div className='h-4 w-2/3 rounded bg-gray-300 animate-pulse' />
              <div className='h-4 w-3/4 rounded bg-gray-300 animate-pulse' />
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <div className='mt-2 h-10 w-28 rounded-full bg-gray-300 animate-pulse' />
      </div>
    </>
  )
}

export default StreamListSkeleton
