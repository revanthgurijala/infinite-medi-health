import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import "./globals.css";

// Loading dual premium fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinite Medi Health | Complete Healthcare Solutions",
  description:
    "End-to-End Healthcare, Compliance, and Infrastructure Solutions through a single integrated platform. Setup labs, hospitals, and corporate health camps.",
  keywords: [
    "healthcare solutions",
    "diagnostic lab setup",
    "hospital compliance",
    "corporate health camps",
    "medical infrastructure",
    "NABH accreditation",
    "Hyderabad healthcare",
  ],
  authors: [{ name: "Infinite Medi Health" }],
  creator: "Infinite Medi Health",
  publisher: "Infinite Medi Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://infinitemedihealth.com",
  },
  openGraph: {
    title: "Infinite Medi Health | Complete Healthcare Solutions",
    description:
      "End-to-End Healthcare, Compliance, and Infrastructure Solutions. Build, Manage & Scale Healthcare.",
    url: "https://infinitemedihealth.com",
    siteName: "Infinite Medi Health",
    images: [
      {
        url: "https://infinitemedihealth.com/Home%201.jpg", // Make sure this URL is correct
        width: 1200,
        height: 630,
        alt: "Infinite Medi Health Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Medi Health | Complete Healthcare Solutions",
    description:
      "End-to-End Healthcare, Compliance, and Infrastructure Solutions.",
    images: ["https://infinitemedihealth.com/Home%201.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/services" },
    { name: "Why Us", link: "/#why-us" },
    { name: "Our Process", link: "/#process" },
    { name: "Start Business", link: "/#high-ticket" },
    { name: "Diagnostic Kart", link: "https://diagnostickart.com" }, // <--- Updated to external link
  ];

  return (
    <html
      lang="en"
      className={`scroll-smooth scroll-pt-24 ${montserrat.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-slate-50 text-slate-600">
        {/* ADVANCED GLASSMORPHISM NAVBAR */}
        <nav className="bg-white/80 backdrop-blur-lg border-b border-slate-100 text-blue-950 w-full sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative">
            <div className="flex justify-between h-20 items-center">
              <a
                href="/"
                className="flex-shrink-0 flex items-center gap-3 group"
              >
                <img
                  src="/imh.png"
                  alt="Infinite Medi Health Logo"
                  className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="hidden sm:flex flex-col justify-center">
                  <span className="font-bold text-lg md:text-xl tracking-tight leading-none font-heading">
                    INFINITE MEDI
                  </span>
                  <span className="font-bold text-lg md:text-xl tracking-tight text-emerald-500 leading-none mt-0.5 group-hover:text-emerald-400 transition-colors duration-300 font-heading">
                    HEALTH
                  </span>
                </div>
              </a>

              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-6 items-center">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="relative font-semibold text-xs uppercase tracking-wide text-slate-600 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}

                <a
                  href="/#contact"
                  className="ml-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold py-2.5 px-6 rounded-full hover:from-emerald-500 hover:to-teal-400 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs uppercase tracking-wide"
                >
                  Book Consultation
                </a>
              </div>

              {/* Mobile Hamburger Menu (CSS Only - No JS Required) */}
              <details className="lg:hidden group relative">
                <summary className="list-none cursor-pointer p-2 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors">
                  <Menu className="w-7 h-7 text-slate-800 group-open:hidden" />
                  <X className="w-7 h-7 text-slate-800 hidden group-open:block" />
                </summary>

                {/* Mobile Dropdown Panel */}
                <div className="absolute top-[60px] right-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-100 rounded-3xl flex flex-col p-6 space-y-5 z-50">
                  {navLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="font-bold text-sm uppercase tracking-widest text-slate-700 hover:text-emerald-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="/#contact"
                      className="block text-center bg-emerald-500 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-400 transition-colors text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/30"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </nav>

        {children}

        {/* ALIGNED FOOTER */}
        <footer className="bg-slate-900 text-white py-16 border-t-4 border-emerald-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 relative z-10">
            <div>
              <p className="text-xl font-bold mb-4 tracking-tight font-heading">
                INFINITE MEDI <span className="text-emerald-400">HEALTH</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed pr-8">
                Precision Diagnostics. Functional Insights. Preventive Outcomes.
                Delivering Next-Generation, Technology-Driven Healthcare
                Solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-slate-300 uppercase tracking-widest border-b border-slate-700 pb-2 inline-block font-heading">
                Contact Support
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-400 text-sm flex items-center gap-3 hover:text-emerald-400 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" /> +91
                  73865 14350
                </li>
                <li className="text-slate-400 text-sm flex items-center gap-3 hover:text-emerald-400 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" /> +91
                  95151 14350
                </li>
                <li className="text-slate-400 text-sm flex items-center gap-3 hover:text-emerald-400 transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                  info@infinitemedihealth.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-slate-300 uppercase tracking-widest border-b border-slate-700 pb-2 inline-block font-heading">
                Headquarters
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span>
                  Plot No-44, 1st floor, Rainbow Meadows,
                  <br />
                  Road no-3, Kista Reddy Pet,
                  <br />
                  Hyderabad, Telangana - 502319
                </span>
              </p>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 border-t border-slate-800 pt-8 text-center relative z-10">
            <p className="text-slate-500 text-xs tracking-wider">
              © 2026 Infinite Medi Health. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
