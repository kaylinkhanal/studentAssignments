import React from 'react'

const HeroSection = (props) => {
  return (
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] via-[#FFE4B5] to-[#87CEEB] animate-gradient-x">
            {props.title}
              </h1>
          
  )
}

export default HeroSection