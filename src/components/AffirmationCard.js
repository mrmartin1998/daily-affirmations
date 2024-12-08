'use client'
import { useState } from 'react';

export default function AffirmationCard({ text, author }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-xl font-semibold text-center">{text}</p>
        {author && (
          <p className="text-right text-sm text-gray-600">- {author}</p>
        )}
        <div className="card-actions justify-end mt-4">
          <button 
            onClick={handleLike}
            className={`btn btn-sm ${isLiked ? 'btn-primary' : 'btn-outline'}`}
          >
            {isLiked ? '❤️' : '🤍'} {likes}
          </button>
        </div>
      </div>
    </div>
  );
}
