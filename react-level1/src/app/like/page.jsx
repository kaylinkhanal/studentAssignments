"use client";
import { ThumbsUp } from "lucide-react"
import { useState } from "react"

const Like = () => {

  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-bold">Social Media Like</h1>
      <div className="flex items-center justify-center mt-4">
        <div className="px-8 py-4 shadow-xl flex items-center gap-5 justify-between rounded-full bg-blue-500 text-white cursor-pointer" onClick={() => setIsLiked(!isLiked) }>
          <ThumbsUp className={isLiked ? 'animate-out text-red-500': 'text-white'}/>
          {isLiked ? likeCount + 1 : likeCount}
        </div>
      </div>
    </div>

  )
}

export default Like