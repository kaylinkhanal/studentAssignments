import SideNav from '@/components/side-nav'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex bg-gray-300 h-screen'>
      <nav>
        <SideNav />
      </nav>
      <main className='w-[100%]'>{children}</main>
    </div>
  )
}

export default Layout