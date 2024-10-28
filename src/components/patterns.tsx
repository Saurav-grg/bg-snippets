export function BgLightGrid2() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}

export function BgLightGrid5() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  );
}

export function BgLightGradient1() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
    </div>
  );
}
//not complete
export function GeometricShapes() {
  return (
    <div
      className=" bg-white dark:bg-gray-950 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px),radial-gradient(#e5e7eb_1px,transparent_1px)] 
        [background-size:48px_48px] [background-position:0_0,24px_24px] 
        dark:[background-image:radial-gradient(#1f2937_1px,transparent_1px),radial-gradient(#1f2937_1px,transparent_1px)] "
    />
  );
}
export function GradientDots() {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
        [mask-image:radial-gradient(circle_at_center,white_24px,transparent_25px)] 
        [mask-size:48px_48px] "
    />
  );
}
export function GridLines() {
  return (
    <div
      className="bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] 
        bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] "
    />
  );
}
export function MorphingShapes() {
  return (
    <div
      className="bg-white dark:bg-gray-950 relative overflow-hidden [&:before]:absolute [&:before]:inset-0 
        [&:before]:bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] dark:[&:before]:bg-[radial-gradient(circle_500px_at_50%_200px,#1F2937,transparent)] "
    />
  );
}
export function NoiseGradient() {
  return (
    <div
      className="from-rose-100 to-teal-100 dark:from-rose-950 dark:to-teal-950 [background-image:linear-gradient(110deg,#00000010_1px,transparent_1px),
        linear-gradient(90deg,#00000010_1px,transparent_1px)] [background-size:48px_48px] "
    />
  );
}
export function WavePattern() {
  return (
    <div
      className="bg-gray-50 dark:bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] 
        dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "
    />
  );
}
