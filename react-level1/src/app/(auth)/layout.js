import React from 'react'
//HOC
const layout = ({children}) => {
  return (
    <div className='bg-red-500 p-40'>
       <p>
       XYZ:
        </p> 
        {children}
    </div>
  )
}

export default layout