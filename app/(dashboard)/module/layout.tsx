import React from 'react'
import DashboardSidebar from '../dashboard/_components/sidebar'
import DashboardNavbar from '../dashboard/_components/navbar'


const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <DashboardSidebar />
        <DashboardNavbar />
        <div className='ml-20 mt-20'>
            <div className='p-4 md:p-6 lg:p-8 xl:p-10'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout