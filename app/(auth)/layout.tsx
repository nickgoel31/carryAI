import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
      <span className='w-screen h-screen overflow-hidden absolute z-[1] opacity-50'></span>
      <div className='z-[2]'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout