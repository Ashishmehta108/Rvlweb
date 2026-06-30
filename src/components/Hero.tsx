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
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/60 to-slate-950/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 pt-20 animate-fade-in">
        <div className="inline-block mb-6 px-4 py-1.5 border border-[#ADE1FB]/40 text-[#ADE1FB] font-mono text-xs tracking-[0.3em] uppercase bg-slate-950/60 backdrop-blur-md rounded-full">
          ISO 9001:2015 Certified Manufacturing
        </div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 mb-6 leading-[1.0] tracking-tight">
          Precision in<br />Polymer Solutions
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Engineering premium packaging materials since 2009. We deliver quality, scale, and trust to top corporations across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-[#0F2573] text-slate-100 px-8 py-4 font-medium hover:bg-[#041D56] transition-colors duration-200 tracking-wide rounded-full"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border border-slate-500 text-slate-200 px-8 py-4 font-medium hover:bg-slate-800 hover:text-white transition-colors tracking-wide rounded-full bg-slate-900/40 backdrop-blur-sm"
          >
            Request Capabilities
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20 opacity-70">
        <span className="text-[10px] text-slate-400 font-mono tracking-[0.3em] uppercase mb-2">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#ADE1FB]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Infinite Scrolling Ribbon */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-slate-950/80 backdrop-blur-md border-t border-slate-800 py-4 flex z-10">
        <div className="flex whitespace-nowrap animate-infinite-scroll w-max font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
          {/* Double list render for seamless scrolling */}
          {[...ribbonItems, ...ribbonItems].map((item, index) => (
            <span key={index} className="mx-8 flex items-center gap-4">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 bg-[#ADE1FB] rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
