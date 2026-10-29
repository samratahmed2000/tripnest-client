import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

const markStyle: CSSProperties = {
  maskImage: "url(/assets/logo-icon.png)",
  maskRepeat: "no-repeat",
  maskSize: "contain",
  maskPosition: "center",
  WebkitMaskImage: "url(/assets/logo-icon.png)",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskSize: "contain",
  WebkitMaskPosition: "center",
};

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
};

const Logo = ({ className, markClassName, wordmarkClassName }: LogoProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className={cn("size-7 shrink-0 bg-foreground", markClassName)}
        style={markStyle}
      />
      <span
        className={cn(
          "font-heading text-xl font-semibold tracking-tight",
          wordmarkClassName,
        )}
      >
        Tripnest
      </span>
    </span>
  );
};

export default Logo;
