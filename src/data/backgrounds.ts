import { type BackgroundPattern } from '@/types/background';
import {
  GeometricShapes,
  GradientDots,
  GridLines,
  MorphingShapes,
  NoiseGradient,
  WavePattern,
} from '@/components/patterns';
export const backgrounds: BackgroundPattern[] = [
  {
    id: 'gradient-dots',
    name: 'Gradient Dots',
    description: 'A subtle dot pattern with a gradient background',
    component: GradientDots,
    category: 'pattern',
  },
  {
    id: 'grid-lines',
    name: 'Grid Lines',
    description: 'Modern grid pattern with subtle lines',
    component: GridLines,
    category: 'pattern',
  },
  {
    id: 'noise-gradient',
    name: 'Noise Gradient',
    description: 'Grainy noise effect with gradient',
    component: NoiseGradient,
    category: 'noise',
  },
  {
    id: 'morphing-shapes',
    name: 'Morphing Shapes',
    description: 'Animated morphing gradient shapes',
    component: MorphingShapes,
    category: 'gradient',
  },
  {
    id: 'wave-pattern',
    name: 'Wave Pattern',
    description: 'Wavy lines creating a dynamic pattern',
    component: WavePattern,
    category: 'gradient',
  },
  {
    id: 'geometric-shapes',
    name: 'Geometric Shapes',
    description: 'Modern geometric pattern with subtle shapes',
    component: GeometricShapes,
    category: 'pattern',
  },
];
