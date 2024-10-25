export interface BackgroundPattern {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<PatternProps>;
  category: 'pattern' | 'gradient' | 'noise';
}

export interface PatternProps {
  className?: string;
}
