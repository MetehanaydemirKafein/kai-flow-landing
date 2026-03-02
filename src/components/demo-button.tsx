"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function DemoButton() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const t = useTranslations("hero");

  return (
    <button
      onClick={() => {
        setShowComingSoon(true);
        setTimeout(() => setShowComingSoon(false), 2000);
      }}
      className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2 min-w-[140px] sm:min-w-[160px] justify-center cursor-pointer"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
      <span className="transition-all duration-300">
        {showComingSoon ? t("comingSoon") : t("bookDemo")}
      </span>
    </button>
  );
}
