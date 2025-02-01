"use client";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useState } from "react";

const likeUnlike = () => {
  let [like, setLike] = useState(false);
  let [dislike, setDislike] = useState(false);

  const liked = () => {
    setLike(!like);
    setDislike(false)
  };

  const disliked = () => {
    setDislike(!dislike);
    setLike(false)
  };

  return (
    <div className="flex gap-8 mx-10">
      <div className="flex">
        <p className="w-12">{like ? "liked" : ""}</p>
        <ThumbsUp
          onClick={liked}
          className={like ? "text-blue-700" : "text-gray-500"}
        />
      </div>
      <div className="flex">
        <p className="w-12">{dislike ? "dislike" : ""}</p>
        <ThumbsDown
          onClick={disliked}
          className={dislike ? "text-blue-700" : "text-gray-500"}
        />
      </div>
    </div>
  );
};

export default likeUnlike;
