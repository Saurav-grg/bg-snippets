import { type PatternProps } from '@/types/background';
export function GeometricShapes({ className = '' }: PatternProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-950 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px),radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:48px_48px] [background-position:0_0,24px_24px] dark:[background-image:radial-gradient(#1f2937_1px,transparent_1px),radial-gradient(#1f2937_1px,transparent_1px)] ${className}`}
    />
  );
}
export function GradientDots({ className = '' }: PatternProps) {
  return (
    <div
      className={`bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 [mask-image:radial-gradient(circle_at_center,white_24px,transparent_25px)] [mask-size:48px_48px] ${className}`}
    />
  );
}
export function GridLines({ className = '' }: PatternProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] ${className}`}
    />
  );
}
export function MorphingShapes({ className = '' }: PatternProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-950 relative overflow-hidden [&:before]:absolute [&:before]:inset-0 [&:before]:bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] dark:[&:before]:bg-[radial-gradient(circle_500px_at_50%_200px,#1F2937,transparent)] ${className}`}
    />
  );
}
export function NoiseGradient({ className = '' }: PatternProps) {
  return (
    <div
      className={`from-rose-100 to-teal-100 dark:from-rose-950 dark:to-teal-950 [background-image:linear-gradient(110deg,#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] [background-size:48px_48px] ${className}`}
    />
  );
}
export function WavePattern({ className = '' }: PatternProps) {
  return (
    <div
      className={`bg-gray-50 dark:bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ${className}`}
    />
  );
}
