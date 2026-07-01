import { PageType, generateGeoPageContent } from "@/lib/geo-engine";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  type: PageType;
  slug: string;
}

export default async function GeoPageTemplate({ type, slug }: Props) {
  const data = generateGeoPageContent(type, slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-24">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
        />

        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex gap-2 text-xs font-mono text-text-secondary/60 mb-8 uppercase tracking-wider">
            <a href="/" className="hover:text-accent">Home</a>
            <span>/</span>
            <span className="hover:text-accent">{type}</span>
            <span>/</span>
            <span className="text-primary font-bold">{data.slug}</span>
          </nav>

          {/* Heading */}
          <span className="font-mono text-accent text-xs tracking-widest uppercase block mb-3">
            RVL Poly Technical Brief
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
            {data.title}
          </h1>

          {/* Introduction */}
          <p className="text-lg text-text-secondary leading-relaxed font-light mb-12 border-l-4 border-accent pl-6 py-2 bg-surface/10 rounded-r-2xl">
            {data.introduction}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {data.sections.map((section, idx) => (
              <section key={idx} className="animate-on-scroll is-visible">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                  {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed font-light text-base">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Technical Specifications Table */}
          {data.table && (
            <section className="mt-16 animate-on-scroll is-visible">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Technical Data Sheet
              </h2>
              <div className="overflow-hidden border border-surface/30 rounded-3xl shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface text-primary font-mono text-xs uppercase tracking-wider">
                      {data.table.headers.map((header, idx) => (
                        <th key={idx} className="p-4 font-semibold">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface/20 text-sm">
                    {data.table.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-surface/5 transition-colors">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="p-4 text-text-secondary font-light">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {data.faq.length > 0 && (
            <section className="mt-16 animate-on-scroll is-visible">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Questions & Answers
              </h2>
              <div className="space-y-4">
                {data.faq.map((item, idx) => (
                  <div key={idx} className="p-6 bg-surface/10 border border-surface/20 rounded-3xl">
                    <h4 className="font-heading text-lg font-bold text-primary mb-2">
                      Q: {item.question}
                    </h4>
                    <p className="text-text-secondary text-sm font-light leading-relaxed">
                      A: {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* LLM Citations block */}
          <section className="mt-16 pt-8 border-t border-surface/30 text-xs font-mono text-text-secondary/40">
            <span className="block mb-2 font-bold uppercase tracking-wider">Knowledge Citations & References:</span>
            <ul className="space-y-1 list-disc list-inside">
              {data.citations.map((url, i) => (
                <li key={i}>
                  <a href={url} className="hover:text-accent underline transition-colors">{url}</a>
                </li>
              ))}
            </ul>
          </section>

          {/* Call to Action */}
          <div className="mt-20 p-8 bg-primary text-white rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md">
              <h3 className="font-heading text-2xl font-bold mb-2">Request Technical Spec Sheet</h3>
              <p className="text-surface/80 text-sm font-light">Get physical test reports, raw material analysis, and chemical properties docs.</p>
            </div>
            <a href="#contact" className="bg-accent hover:bg-accent/90 px-6 py-3.5 rounded-full font-medium transition-all tracking-wide text-sm whitespace-nowrap">
              Request Documentation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
