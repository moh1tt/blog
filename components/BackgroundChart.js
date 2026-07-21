// Purely decorative, CSS/SVG only — no JS on the main thread after paint, so it costs
// nothing at runtime. Motion is transform-only (GPU-composited) and disabled entirely
// for users who prefer reduced motion.
const SPARKLINE =
  'M0,60 L40,50 L80,58 L120,35 L160,45 L200,20 L240,48 L280,32 L320,55 L360,22 L400,45 L440,15 L480,50 L520,38 L560,60 L600,28 L640,48 L680,12 L720,42 L760,55 L800,32'

export default function BackgroundChart() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* faint graph-paper grid */}
      <div
        className="absolute inset-0 text-gray-900 opacity-[0.035] dark:text-gray-100 dark:opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* slow-drifting sparklines, evoking a time-series chart */}
      <div className="absolute inset-x-0 top-1/4 h-32 w-[200%] motion-safe:animate-ticker">
        <svg
          className="h-full w-full text-primary-500 opacity-[0.06] dark:opacity-[0.045]"
          viewBox="0 0 1600 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={SPARKLINE}
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={SPARKLINE}
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            transform="translate(800,0)"
          />
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-1/4 h-32 w-[200%] motion-safe:animate-ticker-slow">
        <svg
          className="h-full w-full text-primary-500 opacity-[0.05] dark:opacity-[0.035]"
          viewBox="0 0 1600 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={SPARKLINE}
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={SPARKLINE}
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            transform="translate(800,0)"
          />
        </svg>
      </div>
    </div>
  )
}
