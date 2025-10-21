"use client";

import { LandingHeader } from "@/components/common/landing-header";
import { LandingFooter } from "@/components/common/landing-footer";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <LandingHeader />
      <main>{children}</main>
      <LandingFooter />
    </div>
  );
}
