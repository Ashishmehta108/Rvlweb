export default function Products() {
  const products = [
    {
      id: 1,
      title: "HDPE/PP Woven Sacks",
      category: "BAGS / SACKS",
      image: "https://rvlpoly.com/wp-content/uploads/2016/10/hdpe-pp-woven-sacks-and-bags-500x480.jpg",
      description:
        "Manufactured with avant-garde techniques using high-density polyethylene and polypropylene. Renowned for optimum storage capacity, widely demanded by industrial sectors.",
      tags: ["High Density", "Durable"],
      delay: "0ms",
    },
    {
      id: 2,
      title: "HDPE/Paper Sandwich Bags",
      category: "LAMINATED BAGS",
      image: "https://rvlpoly.com/wp-content/uploads/2016/10/packing-material-rvl-500x480.jpg",
      description:
        "Premium sandwich construction featuring outside paper with inside HDPE lamination. Engineered to meet various specialized customer requirements.",
      tags: ["Reel Form", "Ready Bags"],
      delay: "100ms",
    },
    {
      id: 3,
      title: "Grease Proof & Freezer Paper",
      category: "SPECIALTY PAPERS",
      image: "https://rvlpoly.com/wp-content/uploads/2020/01/greaseproof-paper-500x480.jpg",
      description:
        "Quality range made using tested raw materials and cutting-edge technology. Ideal for food packaging, cooking, and baking applications.",
      tags: ["Food Grade", "Custom Sizes"],
      delay: "200ms",
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
          <div className="max-w-2xl">
            <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-4">
              Product Portfolio
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Engineered for<br />industrial demands.
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent"
            >
              Request full catalog
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-background p-6 animate-on-scroll border border-transparent hover:border-accent/20 transition-colors rounded-3xl"
              style={{ transitionDelay: product.delay }}
            >
              <div className="aspect-square bg-surface mb-6 overflow-hidden relative rounded-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover img-hover-reveal"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 font-mono text-xs text-primary rounded-full">
                  {product.category}
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">
                {product.title}
              </h3>
              <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-text-secondary">
                {product.tags.map((tag, i) => (
                  <span key={i} className="bg-surface px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
