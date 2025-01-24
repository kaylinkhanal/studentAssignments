import React from 'react'
//HOC: higher order component
const layout = ({children}) => {
  return (
    <div className='bg-red-500 p-40'>
       <p>
       
        </p> 
        {children}
    </div>
  )
}

export default layout