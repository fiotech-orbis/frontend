"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";

const languages = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const [selectedLocale, setSelectedLocale] = useState("vi");

  useEffect(() => {
    // Load saved language preference from localStorage first, then cookie
    const savedLocale =
      localStorage.getItem("preferred-language") ||
      document.cookie
        .split(";")
        .find((c) => c.trim().startsWith("locale="))
        ?.split("=")[1] ||
      "vi";
    setSelectedLocale(savedLocale);

    // Sync localStorage with cookie if they're different
    const cookieLocale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("locale="))
      ?.split("=")[1];
    if (cookieLocale && cookieLocale !== savedLocale) {
      localStorage.setItem("preferred-language", cookieLocale);
      setSelectedLocale(cookieLocale);
    }
  }, []);

  const handleLanguageChange = (locale: string) => {
    setSelectedLocale(locale);
    localStorage.setItem("preferred-language", locale);

    // Set cookie for server-side rendering
    document.cookie = `locale=${locale}; path=/; max-age=31536000`; // 1 year

    // Reload page to apply language change
    window.location.reload();
  };

  const currentLanguage =
    languages.find((lang) => lang.code === selectedLocale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`dark:text-foreground hover:dark:text-primary hover:dark:bg-primary/10 ${className}`}
        >
          <span className="mr-2">{currentLanguage.flag}</span>
          {currentLanguage.name}
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-[#0d1d35] dark:border-white/10"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="dark:text-foreground hover:dark:bg-primary/10 hover:dark:text-primary cursor-pointer"
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
            {selectedLocale === language.code && (
              <Check className="w-4 h-4 ml-auto text-[#f4c430]" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
