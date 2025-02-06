'use client'

import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const Like = () => {
  const [isliked, setIsLiked] = useState(false)

  return (
    <div>
      <ThumbsUp onClick={() => setIsLiked(!isliked)} color={isliked ? 'blue' : 'black'}/>
     
    </div>
  )
}

export default Like