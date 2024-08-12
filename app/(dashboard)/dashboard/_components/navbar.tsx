import Link from 'next/link'
import React from 'react'
import CarryAIChatBot from './chatbot'
import { UserButton } from '@clerk/nextjs'

const DashboardNavbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex flex-col z-[200] '>
        <div className="h-9 w-screen py-3 flex items-center border-b justify-center backdrop-blur-md text-center bg-emerald-400/5 text-emerald-100 text-xs font-medium border-emerald-500/30 px-4">
          CarryAI is a free project because of this it can&apos;t generate all the modules at once. We are working hard to bring you the best experience. Thank you for your patience.
        </div>
        <div className='flex items-center justify-end gap-7 w-full px-10 py-4 '>
          <div className='flex items-center gap-7 backdrop-blur-md p-3 px-7 rounded-full border'>
            <CarryAIChatBot />
            {/* <Link className='text-sm font-medium' href={`/pomodoro`}>
                Timer
            </Link> */}

            <UserButton />
          </div>
        </div>
    </div>
  )
}

export default DashboardNavbar