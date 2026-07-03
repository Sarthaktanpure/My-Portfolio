export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="bg-noise" />
      <div className="mesh-orb mesh-orb-a" />
      <div className="mesh-orb mesh-orb-b" />
      <div className="mesh-orb mesh-orb-c" />
      <div className="mesh-grid" />
    </div>
  );
}
