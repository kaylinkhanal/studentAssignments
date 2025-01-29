import React from 'react'

const SideNav = () => {
    const navItems= ['Chat', 'Status', 'Channel' , 'Communities']
  return (
    <div>
        {navItems.map((item)=> {
            return (
                <div>
                    {item}
                </div>
            )
        })}
    </div>
  )
}

export default SideNav