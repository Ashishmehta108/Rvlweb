"use client";

import { useState } from "react";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const certificates = [
    {
      id: "iso-9001",
      title: "ISO 9001:2015",
      description:
        "Quality Management Systems certification. Guaranteeing consistent quality in manufacturing operations.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
          <div className="max-w-2xl">
            <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-4">
              Standards & Compliance
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Certified Quality.
            </h2>
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-background border border-surface/50 p-6 group cursor-pointer hover:border-accent/30 transition-colors rounded-3xl"
              onClick={() => setActiveCert(cert.title)}
            >
              <div className="aspect-[3/4] bg-surface mb-6 relative overflow-hidden flex items-center justify-center p-8 rounded-2xl">
                {/* Abstract document representation */}
                <div className="w-full h-full border-2 border-dashed border-text-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="font-mono text-text-secondary/50 rotate-[-45deg] text-xl font-bold">
                    {cert.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-background px-5 py-2.5 text-xs font-medium font-mono transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md border border-surface rounded-full">
                    VIEW CERTIFICATE
                  </div>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-text-secondary text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {activeCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setActiveCert(null)}
          ></div>
          <div className="relative w-full max-w-3xl bg-background border border-surface shadow-2xl z-10 flex flex-col max-h-[90vh] rounded-3xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-surface">
              <h3 className="font-heading font-bold text-lg">
                {activeCert} Certification
              </h3>
              <button
                onClick={() => setActiveCert(null)}
                className="text-text-secondary hover:text-primary p-2 focus:outline-none"
                aria-label="Close Modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 overflow-y-auto flex items-center justify-center bg-surface min-h-[50vh]">
              <div className="text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mx-auto mb-4 text-text-secondary animate-pulse"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p className="font-mono text-sm text-text-secondary font-bold">
                  Official Document View
                </p>
                <p className="text-xs text-text-secondary/60 mt-2">
                  (Authorized personnel only or upon request)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
