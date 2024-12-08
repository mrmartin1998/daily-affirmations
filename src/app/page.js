import AffirmationCard from '@/components/AffirmationCard';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Daily Affirmations</h1>
        <AffirmationCard 
          text="I am capable of achieving great things"
          author="Daily Affirmations"
        />
      </main>
    </div>
  );
}
