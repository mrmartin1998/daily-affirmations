'use client'
import { useState } from 'react';
import AffirmationCard from '@/components/AffirmationCard';
import ThemeToggle from '@/components/ThemeToggle';
import affirmations from '@/data/affirmations';

export default function Home() {
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  const toggleFavorite = (id) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const favoriteAffirmations = affirmations.filter(aff => favorites.includes(aff.id));

  return (
    <div className="min-h-screen flex flex-col bg-base-200 dark:bg-gray-900">
      <header className="p-4 flex justify-between items-center">
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="btn btn-ghost gap-2"
        >
          {showFavorites ? '← Back' : `⭐ Favorites (${favorites.length})`}
        </button>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            {showFavorites ? 'My Favorite Affirmations' : 'Daily Affirmations'}
          </h1>
          <div className="flex flex-col items-center gap-4">
            {showFavorites ? (
              favoriteAffirmations.length > 0 ? (
                favoriteAffirmations.map(aff => (
                  <AffirmationCard 
                    key={aff.id}
                    id={aff.id}
                    text={aff.text}
                    author={aff.author}
                    isFavorite={true}
                    onFavoriteToggle={toggleFavorite}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">No favorite affirmations yet</p>
              )
            ) : (
              <>
                <AffirmationCard 
                  id={currentAffirmation.id}
                  text={currentAffirmation.text}
                  author={currentAffirmation.author}
                  isFavorite={favorites.includes(currentAffirmation.id)}
                  onFavoriteToggle={toggleFavorite}
                />
                <button 
                  onClick={getRandomAffirmation}
                  className="btn btn-primary mt-4"
                >
                  New Affirmation
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
