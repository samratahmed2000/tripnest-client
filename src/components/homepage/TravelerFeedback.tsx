"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { MapPinIcon, QuoteIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    image: "/assets/testimonials/traveler1.png",
    alt: "Portrait of Ayesha Rahman",
    quote:
      "The hot air balloon morning over Cappadocia was planned down to the minute — pickup, weather window, even a quiet spot for photos. I have never felt so looked after on a trip.",
    name: "Ayan Rahman",
    location: "Dhaka, Bangladesh",
    destination: "Cappadocia",
    trip: "Cappadocia & Istanbul · 7 days",
    rating: 5,
  },
  {
    image: "/assets/testimonials/traveler2.png",
    alt: "Portrait of Marco Bianchi",
    quote:
      "Our flight to Venice was delayed by six hours and Tripnest had a new driver waiting before we landed. No arguing, no extra invoice. That is why I keep booking with them.",
    name: "Marco Bianchi",
    location: "Milan, Italy",
    destination: "Venice",
    trip: "Venice & Amalfi Coast · 6 days",
    rating: 5,
  },
  {
    image: "/assets/testimonials/traveler3.png",
    alt: "Portrait of Priya Nair",
    quote:
      "The desert camp they picked was small, family-run and nothing like the crowded tourist resorts. Every stay felt handpicked rather than copied from a brochure.",
    name: "Priya Nair",
    location: "Bengaluru, India",
    destination: "Jaisalmer",
    trip: "Jaisalmer & Udaipur · 8 days",
    rating: 5,
  },
  {
    image: "/assets/testimonials/traveler4.png",
    alt: "Portrait of Daniel Okafor",
    quote:
      "One transparent price, including transfers and taxes. I compared it with three other sites and still came back — no surprise charges appeared at checkout.",
    name: "Daniel Okafor",
    location: "Lagos, Nigeria",
    destination: "Da Nang",
    trip: "Da Nang & Hoi An · 5 days",
    rating: 5,
  },
];

const TravelerFeedback = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const [autoplay] = useState(() =>
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    }),
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      aria-labelledby="traveler-feedback-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="bg-background px-3 py-1 text-[0.7rem] tracking-wide"
          >
            <QuoteIcon />
            Traveler Stories
          </Badge>

          <h2
            id="traveler-feedback-heading"
            className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Trusted by travelers in 40+ countries
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Real trips, real people. Here is what booking with Tripnest felt
            like for them.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay]}
          className="mt-10 sm:mt-12"
          aria-label="Traveler testimonials"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name}>
                <article className="grid overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10 md:grid-cols-[18rem_1fr] lg:grid-cols-[20rem_1fr]">
                  <div className="flex items-center justify-center bg-muted/40 p-5 sm:p-6 md:p-4 lg:p-6">
                    <div className="relative aspect-2/3 w-full max-w-52 overflow-hidden rounded-xl sm:max-w-56 md:max-w-none">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        fill
                        sizes="(min-width: 1024px) 272px, (min-width: 768px) 256px, 208px"
                        className="object-cover object-center"
                      />
                      <Badge className="absolute top-3 left-3 gap-1 bg-background/90 text-foreground shadow-sm backdrop-blur-sm">
                        <MapPinIcon />
                        {testimonial.destination}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-8 p-6 sm:p-8 lg:p-10">
                    <div>
                      <div
                        role="img"
                        className="flex items-center gap-1"
                        aria-label={`Rated ${testimonial.rating} out of 5`}
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <StarIcon
                            key={index}
                            aria-hidden
                            className={cn(
                              "size-4",
                              index < testimonial.rating
                                ? "fill-amber-300 text-amber-300"
                                : "text-muted-foreground/40",
                            )}
                          />
                        ))}
                      </div>

                      <blockquote className="mt-4 font-heading text-base leading-relaxed font-normal text-pretty sm:text-lg">
                        “{testimonial.quote}”
                      </blockquote>
                    </div>

                    <footer className="flex flex-wrap items-end justify-between gap-4 border-t pt-4">
                      <div>
                        <p className="font-heading text-sm font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.trip}
                      </p>
                    </footer>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div
              role="group"
              aria-label="Choose a testimonial"
              className="flex items-center gap-2"
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-current={index === activeIndex}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-7 bg-foreground"
                      : "w-3 bg-foreground/20 hover:bg-foreground/40",
                  )}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TravelerFeedback;
