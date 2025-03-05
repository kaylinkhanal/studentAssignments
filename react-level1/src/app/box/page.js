'use client'
import { incrementHeight, incrementWidth } from '@/lib/features/box/boxSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const {width, height, backgroundColor} = useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
    <div>
        
        <div style={{width:width,height:height, backgroundColor:backgroundColor}}> 

        </div>

        <button onClick={()=> dispatch(incrementWidth())}>Increment width</button>
        <button onClick={()=> dispatch(incrementHeight())} >Increment height</button>

    </div>
  )
}

export default Box