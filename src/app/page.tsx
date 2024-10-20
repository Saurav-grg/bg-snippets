'use client';
import BackgroundShowcase from '@/components/bgshow';

export default function Home() {
  return (
    <div className="text-balance">
      hello next
      <span className="text-background bg-foreground"> text </span>
      <span> text</span>
      <BackgroundShowcase />
    </div>
  );
}
