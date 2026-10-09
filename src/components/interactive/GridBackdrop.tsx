/**
 * Drifting grid backdrop for the hero. Pure CSS — no JavaScript, no client
 * component, and it stops entirely under `prefers-reduced-motion` (handled
 * globally in globals.css).
 */
export function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* The grid itself, drifting slowly upward. */}
      <div
        className="absolute -inset-x-8 -top-16 bottom-0 motion-safe:animate-drift"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(91,192,190,0.055) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(91,192,190,0.055) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
        }}
      />

      {/* Fade the grid out at the edges so it doesn't fight the content. */}
      <div className="absolute inset-0 bg-gradient-to-b from-prussian-blue-500/20 via-prussian-blue-500/70 to-prussian-blue-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(111,255,233,0.07),transparent_60%)]" />
    </div>
  );
}
