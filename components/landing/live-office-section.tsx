export function LiveOfficeSection() {
  const shots = [
    "https://occaai.com/assets/occa-3d-1.png",
    "https://occaai.com/assets/occa-3d-2.png",
    "https://occaai.com/assets/occa-3d-3.png",
  ];

  return (
    <section className="bg-[color:var(--accent)] py-20 text-[color:var(--background)] md:py-28">
      <div className="layout-shell">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--surface-3)]">05 / 3D LIVE OFFICE</p>
        <h2 className="mt-5 text-center text-4xl font-black uppercase leading-tight md:text-5xl">Your agents, at their desks</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-[color:var(--surface-2)]">
          Ambient 3D office behind OS. Agent move while task run, idle when done. Operator focus on floating work windows, not dashboard noise.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {shots.map((src) => (
            <div key={src} className="overflow-hidden rounded-lg border border-[color:var(--border-subtle)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="3D office scene" className="h-64 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
