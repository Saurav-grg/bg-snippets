import { type BackgroundPattern } from '@/types/background';
import {
  GeometricShapes,
  GradientDots,
  GridLines,
  MorphingShapes,
  NoiseGradient,
  WavePattern,
  //new
  BgLightGrid2,
  BgLightGrid5,
  BgLightGradient1,
} from '@/components/patterns';
export const backgrounds: BackgroundPattern[] = [
  {
    id: 'grid-xy',
    description: 'A subtle dot pattern with a gradient background',
    component: BgLightGrid2,
    theme: 'light',
  },
  {
    id: 'grid-aaaa',
    description: 'A subtle dot pattern with a gradient background',
    component: BgLightGrid5,
    theme: 'light',
  },
  {
    id: 'gradient-x',
    description: 'A subtle dot pattern with a gradient background',
    component: BgLightGradient1,
    theme: 'light',
  },
  {
    id: 'gradient-dots',
    description: 'A subtle dot pattern with a gradient background',
    component: GradientDots,
    theme: 'light',
  },
  {
    id: 'grid-lines',
    description: 'Modern grid pattern with subtle lines',
    component: GridLines,
    theme: 'light',
  },
  {
    id: 'noise-gradient',
    description: 'Grainy noise effect with gradient',
    component: NoiseGradient,
    theme: 'light',
  },
  {
    id: 'morphing-shapes',
    description: 'Animated morphing gradient shapes',
    component: MorphingShapes,
    theme: 'light',
  },
  {
    id: 'wave-pattern',
    description: 'Wavy lines creating a dynamic pattern',
    component: WavePattern,
    theme: 'light',
  },
  {
    id: 'geometric-shapes',
    description: 'Modern geometric pattern with subtle shapes',
    component: GeometricShapes,
    theme: 'light',
  },
];
