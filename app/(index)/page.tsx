"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const lang = navigator.language.startsWith("en") ? "en" : "es";
    router.replace(`/${lang}/`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCF9]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#2D5016]/20 border-t-[#2D5016] rounded-full animate-spin"></div>
        <p className="text-[#2D5016] font-medium font-serif">Sierra Negra</p>
      </div>
    </div>
  );
}
