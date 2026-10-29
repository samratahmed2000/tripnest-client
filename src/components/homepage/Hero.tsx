"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { MapPinIcon, StarIcon, UsersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    src: "/assets/hero-image1.png",
    alt: "Venice canal lined with historic buildings glowing at sunset",
    destination: "Venice",
    country: "Italy",
  },
  {
    src: "/assets/hero-image2.png",
    alt: "Golden sandstone ramparts of Jaisalmer Fort under a blue sky",
    destination: "Jaisalmer",
    country: "India",
  },
  {
    src: "/assets/hero-image3.png",
    alt: "Hot air balloons drifting over the rock valleys of Cappadocia",
    destination: "Cappadocia",
    country: "Turkey",
  },
  {
    src: "/assets/hero-image4.png",
    alt: "Golden Bridge held by giant stone hands above the Vietnamese hills",
    destination: "Da Nang",
    country: "Vietnam",
  },
];

const stats = [
  {
    icon: StarIcon,
    value: "4.9 / 5",
    label: "From 12k+ reviews",
    iconClassName: "fill-amber-300 text-amber-300",
  },
  {
    icon: UsersIcon,
    value: "50k+",
    label: "Happy travelers",
    iconClassName: "text-white",
  },
  {
    icon: MapPinIcon,
    value: "120+",
    label: "Destinations",
    iconClassName: "text-white",
  },
];

const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const activeSlide = slides[activeIndex];

  return (
    <section
      aria-label="Featured destinations"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-neutral-950 text-white"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[autoplay]}
        className="absolute inset-0 h-full w-full **:data-[slot=carousel-content]:h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.src} className="h-full pl-0">
              <div className="relative h-full w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  loading="eager"
                  fetchPriority={index === 0 ? "high" : "low"}
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-black/80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="border-white/25 bg-white/10 px-3 py-1 text-[0.7rem] tracking-wide text-white backdrop-blur-sm"
          >
            <MapPinIcon />
            Destination · {activeSlide.destination}, {activeSlide.country}
          </Badge>

          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Find Your Next Destination
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Explore beautiful destinations, discover unique experiences, and
            make every journey unforgettable with Tripnest.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <stat.icon className={cn("size-4", stat.iconClassName)} />
              </span>
              <div>
                <p className="text-sm font-semibold">{stat.value}</p>
                <p className="text-xs text-white/60">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
