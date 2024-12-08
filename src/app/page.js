'use client'
import { useState } from 'react';
import AffirmationCard from '@/components/AffirmationCard';
import ThemeToggle from '@/components/ThemeToggle';
import affirmations from '@/data/affirmations';

export default function Home() {
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);

  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200 dark:bg-gray-900">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Daily Affirmations</h1>
          <div className="flex flex-col items-center gap-4">
            <AffirmationCard 
              text={currentAffirmation.text}
              author={currentAffirmation.author}
            />
            <button 
              onClick={getRandomAffirmation}
              className="btn btn-primary mt-4"
            >
              New Affirmation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
