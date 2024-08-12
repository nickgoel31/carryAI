import Loader from '@/components/loader'
import React from 'react'

const loading = () => {
  return (
    <div className='w-screen h-screen z-[20] bg-black/50 backdrop-blur-md flex items-center justify-center'>
        <Loader />
    </div>
  )
}

export default loading