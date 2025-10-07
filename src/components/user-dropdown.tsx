"use client";

import { Logout } from "@/components/logout";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface UserDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  className?: string;
}

export default function UserDropdown({ user, className }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} flex items-center gap-2`}
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
        ) : (
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xs font-medium">
              {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
            </span>
          </div>
        )}
        <span className="hidden sm:block">{user.name || user.email}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
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
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass rounded-lg shadow-lg z-50">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-white/70 border-b border-white/10">
              <div className="font-medium">{user.name}</div>
              <div className="text-xs">{user.email}</div>
            </div>
            <a
              href="/dashboard"
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
            >
              Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
            >
              Settings
            </a>
            <div className="border-t border-white/10">
              <Logout />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
