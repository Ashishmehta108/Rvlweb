export default function Hero() {
  const ribbonItems = [
    "HDPE/PP WOVEN BAGS",
    "PRINTED LAMINATES",
    "POLY COATED PAPERS",
    "LDPE POLYBAGS/LINERS",
    "SHRINK FILM",
    "STRETCH FILM",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <video
          src="/gemini_generated_video_ad26284b.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 pt-20 animate-fade-in">
        <div className="inline-block mb-6 px-4 py-1.5 border border-accent/30 text-accent font-mono text-xs tracking-widest uppercase bg-primary/50 backdrop-blur-sm rounded-full">
          ISO 9001:2015 Certified Manufacturing
        </div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Precision in<br />Polymer Solutions
        </h1>
        <p className="text-surface/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Engineering premium packaging materials since 2009. We deliver quality, scale, and trust to top corporations across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-accent text-white px-8 py-4 font-medium hover:bg-accent/90 transition-colors tracking-wide rounded-full"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border border-surface text-white px-8 py-4 font-medium hover:bg-surface hover:text-primary transition-colors tracking-wide rounded-full"
          >
            Request Capabilities
          </a>
        </div>
      </div>

      {/* Infinite Scrolling Ribbon */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-black/30 backdrop-blur-xs border-t border-white/5 py-3 flex z-10">
        <div className="flex whitespace-nowrap animate-infinite-scroll w-max font-mono text-[10px] uppercase tracking-[0.25em] text-white/55">
          {/* Double list render for seamless scrolling */}
          {[...ribbonItems, ...ribbonItems].map((item, index) => (
            <span key={index} className="mx-10 flex items-center gap-4">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
