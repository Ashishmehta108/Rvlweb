export default function Gallery() {
  const images = [
    {
      src: "/images/extrusion_line.png",
      alt: "Advanced Extrusion Lines",
      label: "01 // EXTRUSION LINES",
      title: "High-Output Polymer Extrusion",
      description: "High-output blow molding systems ensuring uniform gauge thickness and optimal tensile strength.",
      className: "lg:col-span-2 lg:row-span-2 min-h-[380px] lg:min-h-[500px]",
    },
    {
      src: "/images/qc_lab.png",
      alt: "Quality Control Lab",
      label: "02 // QUALITY CONTROL",
      title: "Rigorously Monitored Lab",
      description: "Equipped with advanced tensile testers, melt flow indexers, and drop-testing rigs.",
      className: "lg:col-span-1 lg:row-span-1 min-h-[220px]",
    },
    {
      src: "/images/printing_press.png",
      alt: "Multi-color Printing Press",
      label: "03 // FLEXO PRINTING",
      title: "High-Speed Flexographic Printing",
      description: "Multi-color precision printing for corporate branding and industrial compliance marks.",
      className: "lg:col-span-1 lg:row-span-1 min-h-[220px]",
    },
    {
      src: "/images/recycling.png",
      alt: "Eco-friendly recycling",
      label: "04 // RECYCLING UNIT",
      title: "Closed-Loop Recycling",
      description: "In-house recovery and pelletizing of production scrap into reusable polymers.",
      className: "lg:col-span-2 lg:row-span-1 min-h-[240px]",
    },
    {
      src: "/images/warehouse.png",
      alt: "Warehouse Storage",
      label: "05 // STORAGE & DISPATCH",
      title: "Strategic Dispatch Terminal",
      description: "Large-capacity automated warehouses optimizing transit and scheduling.",
      className: "lg:col-span-1 lg:row-span-1 min-h-[240px]",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background border-t border-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-4">
            Facility Gallery
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Inside our operations.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto animate-on-scroll">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-surface/10 ${img.className}`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 img-hover-reveal"
              />
              
              {/* Dark Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-black/20 group-hover:from-primary/95 group-hover:via-primary/60 transition-all duration-500" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                {/* Top: label badge */}
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase rounded-full">
                    {img.label}
                  </span>
                </div>
                
                {/* Bottom: Title & description (slides up/fades in) */}
                <div className="text-white transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                    {img.title}
                  </h3>
                  <p className="text-surface/85 text-xs md:text-sm font-light leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
