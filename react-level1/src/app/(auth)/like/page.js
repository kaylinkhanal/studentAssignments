'use client'
import { Button } from '@/components/ui/button'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const LikeUnlike = () => {
    let [isLike, setIsLike] = useState(false)

    const likeButton = () =>{

    }

  return (
    <div>
        <ThumbsUp onClick={ ()=> setIsLike(!isLike)} color={isLike ? 'blue' : 'black'} />
    </div>
    
  )
}

export default LikeUnlike