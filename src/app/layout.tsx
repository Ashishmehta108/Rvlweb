import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RVL Poly Industries - Premium Manufacturing Excellence",
  description: "RVL Poly Industries Private Limited. AN ISO 9001 : 2015 Certified Company. Premium manufacturing of HDPE/PP Woven bags, Printed Laminates, and Polycoated Papers.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ManufacturingBusiness"],
  "name": "RVL Poly Industries",
  "url": "https://rvlpoly.com",
  "logo": "https://rvlpoly.com/wp-content/uploads/2016/10/logo.png",
  "description": "Premium manufacturing of HDPE/PP Woven bags, Printed Laminates, and Polycoated Papers. An ISO 9001:2015 Certified Company.",
  "foundingDate": "2009",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Saidpura Industrial Park Block A, Barwala Road",
    "addressLocality": "Derabassi",
    "addressRegion": "Punjab",
    "postalCode": "140507",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-987-645-7799",
    "contactType": "customer service",
    "email": "rahul.gupta@rvlpoly.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-accent selection:text-white bg-white text-primary font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
