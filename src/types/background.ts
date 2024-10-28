export interface BackgroundPattern {
  id: string;
  description: string;
  component: React.FC;
  theme: 'light' | 'dark';
}
