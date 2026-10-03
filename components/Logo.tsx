import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  showLabel?: boolean;
  className?: string;
};

export function Logo({
  variant = "dark",
  showLabel = true,
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="WebWrite Restaurant SaaS — home"
    >
      <Image
        src="/_Group_-1.png"
        alt="WebWrite"
        width={515}
        height={544}
        className="h-9 w-auto shrink-0 transition-transform duration-200 group-hover:scale-105"
      />
      {showLabel ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-[1.0625rem] font-bold tracking-tight",
              variant === "light" ? "text-white" : "text-ink",
            )}
          >
            WebWrite
          </span>
          <span
            className={cn(
              "mt-0.5 text-[0.6875rem] font-medium tracking-wide",
              variant === "light" ? "text-white/60" : "text-muted",
            )}
          >
            Restaurant SaaS
          </span>
        </span>
      ) : null}
    </Link>
  );
}
