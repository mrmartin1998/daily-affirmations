'use client'
import { useState } from 'react';

export default function AffirmationCard({ text, author, id, isFavorite, onFavoriteToggle }) {
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
          <p className="text-right text-sm text-gray-600 dark:text-gray-400">- {author}</p>
        )}
        <div className="card-actions justify-end mt-4 gap-2">
          <button 
            onClick={() => onFavoriteToggle(id)}
            className={`btn btn-sm ${isFavorite ? 'btn-secondary' : 'btn-outline btn-secondary'}`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
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
