import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Medi Health | Advanced Diagnostics",
  description: "Infinite Care. Intelligent Healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added scroll-pt-24 here to fix the link overlap issue!
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={inter.className}>
        {/* PREMIUM NAVIGATION BAR */}
        <nav className="bg-white text-blue-950 shadow-md w-full sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24 items-center">
              {/* Logo Area - Fixed to Single Line */}
              <div className="flex-shrink-0 flex items-center gap-3">
                <img
                  src="/imh.png"
                  alt="Infinite Medi Health Logo"
                  className="h-16 w-auto object-contain"
                />
                <div className="hidden sm:block">
                  <span className="font-extrabold text-2xl tracking-tight">
                    INFINITE MEDI{" "}
                  </span>
                  <span className="font-extrabold text-2xl tracking-tight text-blue-600">
                    HEALTH
                  </span>
                </div>
              </div>

              {/* Menu Links */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="/"
                  className="hover:text-blue-600 transition font-bold text-sm uppercase tracking-wide"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-blue-600 transition font-bold text-sm uppercase tracking-wide"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition font-bold text-sm uppercase tracking-wide"
                >
                  Medical
                </a>
                <a
                  href="#fitness"
                  className="hover:text-emerald-600 transition font-bold text-sm uppercase tracking-wide"
                >
                  Fitness
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-600 transition font-bold text-sm uppercase tracking-wide"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

        {/* ENHANCED FOOTER */}
        <footer className="bg-blue-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Column 1 */}
            <div>
              <p className="text-2xl font-extrabold mb-4">
                INFINITE MEDI <span className="text-blue-400">HEALTH</span>
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Precision Diagnostics. Functional Insights. Preventive Outcomes.
                Delivering next-generation healthcare solutions to improve
                patient outcomes.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
                Contact Information
              </h3>
              <p className="text-gray-300 text-sm mb-2 flex items-center gap-2">
                📞 +91 73865 14350
              </p>
              <p className="text-gray-300 text-sm mb-2 flex items-center gap-2">
                ✉️ info@infinitemedihealth.com
              </p>
              <p className="text-gray-300 text-sm mb-2 flex items-center gap-2">
                ✉️ sales@infinitemedihealth.com
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
                Headquarters
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Plot No-44, 1st floor, Rainbow Meadows,
                <br />
                Road no-3, Kista Reddy Pet,
                <br />
                Hyderabad, Telangana - 502319
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-blue-900 pt-8 text-center">
              <p className="text-gray-500 text-xs">
                © 2026 Infinite Medi Health. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
