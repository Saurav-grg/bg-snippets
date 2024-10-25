'use client';

import { BackgroundCard } from '@/components/background-card';
import { backgrounds } from '@/data/backgrounds';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {backgrounds.map((pattern) => (
          <BackgroundCard key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </div>
  );
}
