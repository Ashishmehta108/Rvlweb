"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API request delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-4">
                Get In Touch
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                Ready to discuss your packaging requirements?
              </h2>

              <div className="space-y-8 mt-12">
                <div>
                  <h4 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-2">
                    Corporate Office & Manufacturing
                  </h4>
                  <p className="text-lg font-medium">
                    Saidpura Industrial Park Block A,
                    <br />
                    Barwala Road, Derabassi,
                    <br />
                    Punjab 140507
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-2">
                    Contact Details
                  </h4>
                  <p className="text-lg font-mono mb-1">(+91) 987-645-7799</p>
                  <p className="text-lg">
                    <a
                      href="mailto:rahul.gupta@rvlpoly.com"
                      className="hover:text-accent transition-colors"
                    >
                      rahul.gupta@rvlpoly.com
                    </a>
                  </p>
                  <p className="text-lg">
                    <a
                      href="mailto:rvlpoly@yahoo.co.in"
                      className="hover:text-accent transition-colors"
                    >
                      rvlpoly@yahoo.co.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-surface p-8 md:p-12 animate-on-scroll rounded-2xl">
              {status === "success" ? (
                <div className="h-full flex flex-col justify-center items-center text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    Inquiry Sent!
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-widest text-text-secondary mb-2"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-surface/50 p-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans rounded-2xl text-primary"
                      required
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-widest text-text-secondary mb-2"
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-surface/50 p-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans rounded-2xl text-primary"
                      required
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-widest text-text-secondary mb-2"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-background border border-surface/50 p-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans resize-none rounded-2xl text-primary"
                      required
                      disabled={status === "submitting"}
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 font-medium text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-full flex justify-center items-center gap-2"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.698229274805!2d76.85954591445757!3d30.586063199738973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fbff7c4484a57%3A0xc5621b8046d4addf!2sRVL%20POLY%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1579961641111!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map location of RVL Poly Industries"
        ></iframe>
      </section>
    </div>
  );
}
