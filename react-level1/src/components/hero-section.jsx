import React from 'react'

const HeroSection = (props) => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            {props.title}
        </h1>
      
    </div>
  )
}

export default HeroSection