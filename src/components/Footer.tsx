export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <span className="font-heading font-bold text-2xl tracking-tight mb-6 block">
              RVL POLY
            </span>
            <p className="text-zinc-400 max-w-sm font-light text-sm">
              Premium industrial packaging solutions engineered with precision. Serving
              top corporations since 2009.
            </p>
            <div className="mt-6 inline-block border border-white/20 px-4 py-1.5 font-mono text-xs text-white/80 uppercase tracking-widest rounded-full bg-white/5">
              ISO 9001:2015 Certified
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-surface/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light text-surface/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="hover:text-accent transition-colors"
                >
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-surface/40 mb-6">
              Products
            </h4>
            <ul className="space-y-3 text-sm font-light text-surface/80">
              <li>HDPE/PP Woven Bags</li>
              <li>Printed Laminates</li>
              <li>Poly Coated Papers</li>
              <li>LDPE Polybags & Liners</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-surface/40">
          <p>
            &copy; {new Date().getFullYear()} RVL Poly Industries Private Limited. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
