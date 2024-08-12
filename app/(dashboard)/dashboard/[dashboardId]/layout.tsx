import React from 'react'
import DashboardSidebar from '../_components/sidebar'
import DashboardNavbar from '../_components/navbar'

const DashboardLayout = ({children, params}:{children:React.ReactNode, params:{dashboardId:string}}) => {
  
  return (
    <div>
        <DashboardSidebar />
        <DashboardNavbar />
        <div className='ml-20 mt-10'>
            <div className='p-4 md:p-6 lg:p-8 xl:p-10'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout