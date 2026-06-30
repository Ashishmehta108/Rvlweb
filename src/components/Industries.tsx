export default function Industries() {
  const industries = [
    {
      id: 1,
      title: "Food & Beverage",
      image: "https://rvlpoly.com/wp-content/uploads/2020/01/greaseproof-paper-500x480.jpg",
      description: "Food-grade laminates and grease proof papers.",
    },
    {
      id: 2,
      title: "Agriculture",
      image: "https://rvlpoly.com/wp-content/uploads/2016/10/hdpe-pp-woven-sacks-and-bags-500x480.jpg",
      description: "Heavy-duty woven sacks for seeds and fertilizers.",
    },
    {
      id: 3,
      title: "Chemicals",
      image: "https://rvlpoly.com/wp-content/uploads/2016/10/packing-material-rvl-500x480.jpg",
      description: "Chemically resistant and leak-proof bulk packaging.",
    },
    {
      id: 4,
      title: "Logistics & Supply",
      image: "https://rvlpoly.com/wp-content/uploads/2019/07/gallery1-640x480.jpg",
      description: "Stretch films and polybags for secure transit.",
    },
  ];

  return (
    <section id="industries" className="py-24 md:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-4">
            Industries Served
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Supporting diverse industrial sectors.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-on-scroll">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="relative h-80 group overflow-hidden bg-white/5 border border-white/5"
            >
              <img
                src={ind.image}
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-primary to-transparent">
                <h3 className="font-heading text-xl font-bold">{ind.title}</h3>
                <p className="text-surface/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
