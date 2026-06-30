export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column (Content) */}
        <div className="animate-on-scroll">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-6">
            Our Foundation
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Manufacturing excellence<br />built on integrity.
          </h2>
          <div className="space-y-6 text-text-secondary text-lg font-light">
            <p>
              Incorporated in 2009, RVL Poly Industries has grown into a leading manufacturer of diverse packaging materials. Operating from three advanced manufacturing facilities in Derabassi, Punjab, we cater to the complex packaging needs of top multinational corporations across India.
            </p>
            <p>
              Strategically located on the Delhi-Chandigarh Highway, our facilities benefit from exceptional logistics proximity, allowing us to maintain robust supply chains for our partners.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-surface">
            <div>
              <div className="font-mono text-4xl text-primary font-bold mb-2">2009</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">
                Established
              </div>
            </div>
            <div>
              <div className="font-mono text-4xl text-primary font-bold mb-2">03</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">
                Manufacturing Units
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Image Container) */}
        <div className="relative h-[600px] w-full bg-surface animate-on-scroll rounded-3xl overflow-hidden">
          <img
            src="https://rvlpoly.com/wp-content/uploads/2020/02/profile.jpg"
            alt="RVL Infrastructure"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 border border-primary/10 m-4 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
