'use client'; // Marca este como um Client Component

import { useState } from 'react';
import { Heart } from 'lucide-react'; // Ícone para o botão

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300
        ${isLiked 
          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' 
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
    >
      <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
      <span>{likes}</span>
    </button>
  );
}