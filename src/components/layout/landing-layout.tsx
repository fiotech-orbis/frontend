import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OrbisLogo } from "@/components/common/orbis-logo";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Navigation */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-[#0a1628]/80">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <OrbisLogo href="/" />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#services"
                className="text-sm font-medium text-gray-300 hover:text-[#f4c430] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  SERVICES
                </div>
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-gray-300 hover:text-[#f4c430] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  HOW IT WORKS
                </div>
              </Link>
              <Link
                href="#solutions"
                className="text-sm font-medium text-gray-300 hover:text-[#f4c430] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  SOLUTIONS
                </div>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link href="/app">
                <Button
                  className="bg-[#f4c430] text-[#0a1628] hover:bg-[#e5b520] font-semibold px-6 shadow-lg shadow-[#f4c430]/20"
                  size="lg"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  LOGIN
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <OrbisLogo href="/" showText={true} />
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Transforming businesses worldwide with cutting-edge
                cryptocurrency development, blockchain technology, and
                comprehensive Web3 platforms.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-[#f4c430]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-gray-400 hover:text-[#f4c430] transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#solutions"
                    className="text-sm text-gray-400 hover:text-[#f4c430] transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-sm text-gray-400 hover:text-[#f4c430] transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-[#f4c430]">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400">24/7 Expert Support</li>
                <li className="text-sm text-gray-400">Serving 50+ Countries</li>
                <li className="text-sm text-gray-400">500+ Projects</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Fiotech Orbis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
