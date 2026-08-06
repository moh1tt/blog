// Purely decorative, CSS only — no JS on the main thread after paint, so it costs
// nothing at runtime.
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
    </div>
  )
}
