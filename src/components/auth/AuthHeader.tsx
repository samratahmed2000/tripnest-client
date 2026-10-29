import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import Logo from "@/components/shared/Logo";

const AuthHeader = () => {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
      <Link
        href="/"
        aria-label="Tripnest home"
        className="rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <Logo />
      </Link>

      <Link
        href="/"
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <ArrowLeftIcon className="size-4" aria-hidden />
        Back to home
      </Link>
    </header>
  );
};

export default AuthHeader;
