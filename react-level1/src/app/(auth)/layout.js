import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {

  return (
    <div>
        <header className="w-full bg-gray-500 text-white py-4 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My App</h1>
                <nav>
                <ul className="flex space-x-4">
                    <li>
                    <Link href="/login" className="hover:underline">
                        Login
                    </Link>
                    </li>
                    <li>
                    <Link href="/register" className="hover:underline">
                        Sign Up
                    </Link>
                    </li>
                </ul>
                </nav>
            </div>
        </header>        
        {children}
    </div>
  )
}

export default layout