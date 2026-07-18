import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Woordmerk "NARAI THAI" in een afgerond rood blokje (Inter Bold, uppercase).
 * Zowel op de lichte header als op de donkere nav-overlay gebruikt Narai het
 * merkrood (het blokje is net iets lichter dan de donkere overlay-achtergrond).
 */
export function Logo({
  className,
  tone = "brand",
  onClick,
}: {
  className?: string;
  tone?: "brand" | "bright";
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Narai Thai - naar home"
      className={cn(
        "inline-flex items-center rounded-md px-3 py-2 text-[15px] font-bold uppercase tracking-[0.06em] text-white shadow-sm",
        tone === "bright" ? "bg-brand" : "bg-brand",
        className,
      )}
    >
      Narai Thai
    </Link>
  );
}
