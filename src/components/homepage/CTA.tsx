import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CompassIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CTA = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden"
    >
      <Image
        src="/assets/cta.png"
        alt="Traveler in a conical hat looking out over a river valley between limestone cliffs"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/65 via-black/45 to-black/75"
      />

      <div className="relative z-10 mx-auto flex min-h-80 max-w-2xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:min-h-96 sm:px-6 sm:py-20 lg:min-h-120 lg:px-8">
        <Badge
          variant="outline"
          className="border-white/25 bg-white/10 px-3 py-1 text-[0.7rem] tracking-wide text-white backdrop-blur-sm"
        >
          <CompassIcon />
          Start planning
        </Badge>

        <h2
          id="cta-heading"
          className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          Your Next Journey Is One Step Away
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 text-pretty sm:text-base">
          Tell us where you want to go and our travel experts will build the
          trip around you - verified stays, transparent pricing and support at
          every step.
        </p>

        <Link
          href="/travel"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 h-11 gap-2 bg-teal-700 px-6 text-white shadow-md shadow-black/10 hover:bg-teal-800 focus-visible:ring-teal-300/60 sm:h-12 sm:px-7",
          )}
        >
          Book Now
          <ArrowRightIcon className="transition-transform group-hover/button:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
