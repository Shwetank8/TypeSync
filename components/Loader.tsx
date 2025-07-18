import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex size-full h-screen items-center justify-center gap-3 text-white'>
        <Image
            src="/assets/icons/loader.svg"
            alt='loading..'
            width={32}
            height={32}
            className='animate-spin'
        />
        Loading...
    </div>
  )
}

export default Loader
