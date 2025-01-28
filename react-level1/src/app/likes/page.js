'use client'
import { Button } from "@/components/ui/button"
// import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LikeDislike({ initialLikes = 0, initialDislikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [userAction, setUserAction] = useState(null)

  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1)
      setUserAction(null)
    } else {
      setLikes(likes + 1)
      if (userAction === "dislike") {
        setDislikes(dislikes - 1)
      }
      setUserAction("like")
    }
  }

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1)
      setUserAction(null)
    } else {
      setDislikes(dislikes + 1)
      if (userAction === "like") {
        setLikes(likes - 1)
      }
      setUserAction("dislike")
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <Button
        variant={userAction === "like" ? "default" : "outline"}
        size="sm"
        className="flex items-center space-x-2"
        onClick={handleLike}
      >
        <span role="img" aria-label="Like">
          👍
        </span>
        <span>{likes}</span>
      </Button>
      <Button
        variant={userAction === "dislike" ? "default" : "outline"}
        size="sm"
        className="flex items-center space-x-2"
        onClick={handleDislike}
      >
        <span role="img" aria-label="Dislike">
          👎
        </span>
        <span>{dislikes}</span>
      </Button>
    </div>
  )
}

