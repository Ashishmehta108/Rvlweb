export default function Gallery() {
  const images = [
    {
      src: "https://rvlpoly.com/wp-content/uploads/2019/07/gallery2-640x480.jpg",
      alt: "Production Line",
      label: "01 // PRODUCTION LINE",
      span: "lg:col-span-2",
    },
    {
      src: "https://rvlpoly.com/wp-content/uploads/2019/07/gallery3-640x480.jpg",
      alt: "Quality Control",
      label: "02 // QUALITY CONTROL",
      span: "",
    },
    {
      src: "https://rvlpoly.com/wp-content/uploads/2019/07/gallery4-640x480.jpg",
      alt: "Manufacturing Area",
      label: "03 // FLOOR OPERATIONS",
      span: "",
    },
    {
      src: "https://rvlpoly.com/wp-content/uploads/2019/07/gallery1-640x480.jpg",
      alt: "Storage and Logistics",
      label: "04 // STORAGE & WAREHOUSING",
      span: "lg:col-span-2",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-on-scroll">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden aspect-[4/3] ${img.span} rounded-3xl`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 img-hover-reveal rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-primary/85 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-mono text-xs tracking-wider">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
