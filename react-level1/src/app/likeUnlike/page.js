"use client";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useState } from "react";

const likeUnlike = () => {
  let [like, setLike] = useState(false);
  let [dislike, setDislike] = useState(false);

  const liked = () => {
    setLike(!like);
  };

  const disliked = () => {
    setDislike(!dislike)
  }

  return (
    <div className="flex gap-8 mx-10">
      <div className="flex">
        <p>{like ? "liked" : ""}</p>
        <ThumbsUp
          onClick={liked}
          className={like ? "text-blue-700" : "text-gray-500"}
        />
      </div>
      <div className="flex">
        <p>{dislike ? "dislike" : ""}</p>
        <ThumbsDown
        onClick={disliked}
        className={dislike ? "text-blue-700" : "text-gray-500"}
        />
      </div>
    </div>
  );
};

export default likeUnlike;
