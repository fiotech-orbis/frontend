"use client";

import Link from "next/link";
import { OrbisLogo } from "@/components/common/orbis-logo";
import { useTranslations } from "next-intl";

export function LandingFooter() {
  const t = useTranslations();

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <OrbisLogo href="/" showText={true} />
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#f4c430]">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-400 hover:text-[#f4c430] transition-colors"
                >
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#solutions"
                  className="text-sm text-gray-400 hover:text-[#f4c430] transition-colors"
                >
                  {t("navigation.solutions")}
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-sm text-gray-400 hover:text-[#f4c430] transition-colors"
                >
                  {t("navigation.howItWorks")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-[#f4c430]">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">{t("footer.support")}</li>
              <li className="text-sm text-gray-400">{t("footer.countries")}</li>
              <li className="text-sm text-gray-400">{t("footer.projects")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
