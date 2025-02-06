'use client'
import SideNav from '@/components/side-nav'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="flex gap-4 bg-gray-200 min-h-screen">
      {/* Sidebar */}
      <div className="w-56">
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex- p-2">
        {children}
      </div>
    </div>
  )
}

export default Layout;
