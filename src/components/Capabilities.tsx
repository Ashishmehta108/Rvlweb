export default function Capabilities() {
  const stats = [
    { value: "14+", label: "Years Exp." },
    { value: "03", label: "Facilities" },
    { value: "9001", label: "ISO Certified" },
    { value: "100%", label: "Quality Checked" },
  ];

  return (
    <section
      id="capabilities"
      className="py-24 md:py-32 bg-background border-t border-surface"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-4">
            Manufacturing Excellence
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Scale. Quality. Trust.
          </h2>
          <p className="text-text-secondary text-lg">
            Our management is driven by ethical practices and rigorous adherence
            to industry standards, ensuring top-tier quality control across all
            production lines.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 animate-on-scroll border-y border-surface py-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-5xl text-primary font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
