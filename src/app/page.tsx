import { LandingLayout } from "@/components/layout/landing-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <LandingLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge className="bg-[#f4c430]/10 text-[#f4c430] border-[#f4c430]/20 hover:bg-[#f4c430]/20">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              LEADING WEB3 SOLUTIONS PROVIDER
            </Badge>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Enterprise
                <br />
                <span className="text-[#f4c430]">Blockchain</span>
                <br />
                Solutions
              </h1>

              <div className="h-1 w-24 bg-gradient-to-r from-[#f4c430] to-transparent" />
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Transforming businesses worldwide with cutting-edge cryptocurrency
              development, blockchain technology, and comprehensive Web3
              platforms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#f4c430]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#f4c430]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#f4c430]">500+</div>
                <div className="text-sm text-gray-400">PROJECTS DELIVERED</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#f4c430]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#f4c430]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#f4c430]">24/7</div>
                <div className="text-sm text-gray-400">EXPERT SUPPORT</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#f4c430]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#f4c430]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#f4c430]">50+</div>
                <div className="text-sm text-gray-400">COUNTRIES SERVED</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/app">
                <Button
                  size="lg"
                  className="bg-[#f4c430] text-[#0a1628] hover:bg-[#e5b520] font-semibold px-8 shadow-lg shadow-[#f4c430]/20"
                >
                  Get Started
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-[#f4c430]/30 text-[#f4c430] hover:bg-[#f4c430]/10 px-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[#f4c430]/20 animate-pulse" />
                <div className="absolute w-[80%] h-[80%] rounded-full border border-[#f4c430]/30" />
                <div className="absolute w-[60%] h-[60%] rounded-full border border-[#f4c430]/40" />
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#f4c430] to-[#d4a520] flex items-center justify-center shadow-2xl shadow-[#f4c430]/30 rotate-12 hover:rotate-0 transition-transform duration-500">
                  <svg
                    className="w-24 h-24 text-[#0a1628]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 right-0 animate-bounce">
                <Badge className="bg-[#1a2f4d] text-white border-[#f4c430]/30 shadow-lg">
                  <span className="text-[#f4c430] mr-2">◆</span>
                  Enterprise Ready
                </Badge>
              </div>
              <div className="absolute bottom-20 left-0 animate-bounce delay-75">
                <Badge className="bg-[#1a2f4d] text-white border-[#f4c430]/30 shadow-lg">
                  <span className="text-[#f4c430] mr-2">◆</span>
                  Premium Quality
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="bg-[#0d1d35] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#f4c430]/10 text-[#f4c430] border-[#f4c430]/20 mb-4">
              OUR SERVICES
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Web3 APIs &{" "}
              <span className="text-[#f4c430]">Blockchain Data</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive blockchain infrastructure for modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-[#0a1628] border border-white/10 rounded-xl p-8 hover:border-[#f4c430]/50 transition-all hover:shadow-lg hover:shadow-[#f4c430]/10">
              <div className="w-14 h-14 rounded-lg bg-[#f4c430]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-[#f4c430]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Real-time Data Streams
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Access live blockchain data with WebSocket connections for
                instant updates on transactions, blocks, and network events.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-[#0a1628] border border-white/10 rounded-xl p-8 hover:border-[#f4c430]/50 transition-all hover:shadow-lg hover:shadow-[#f4c430]/10">
              <div className="w-14 h-14 rounded-lg bg-[#f4c430]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-[#f4c430]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Secure Infrastructure
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Enterprise-grade security with encrypted connections, API key
                management, and role-based access control.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-[#0a1628] border border-white/10 rounded-xl p-8 hover:border-[#f4c430]/50 transition-all hover:shadow-lg hover:shadow-[#f4c430]/10">
              <div className="w-14 h-14 rounded-lg bg-[#f4c430]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-[#f4c430]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Multi-Chain Support
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Connect to multiple blockchain networks including Ethereum, BSC,
                Polygon, and more with unified APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#f4c430] to-[#d4a520] rounded-2xl p-12 lg:p-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6">
              Ready to Build on Web3?
            </h2>
            <p className="text-lg text-[#0a1628]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses leveraging our
              blockchain infrastructure to power the next generation of
              applications.
            </p>
            <Link href="/app">
              <Button
                size="lg"
                className="bg-[#0a1628] text-white hover:bg-[#0a1628]/90 font-semibold px-8 shadow-xl"
              >
                Start Building Now
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
