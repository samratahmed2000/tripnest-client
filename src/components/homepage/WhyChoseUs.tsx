import {
  HeadsetIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WalletIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: ShieldCheckIcon,
    title: "Handpicked, verified stays",
    description:
      "Every hotel, homestay and experience is inspected by our local team before it reaches your itinerary.",
    metric: "1,200+",
    metricLabel: "stays vetted on site",
  },
  {
    icon: WalletIcon,
    title: "Transparent pricing",
    description:
      "One clear price covers stays, transfers and taxes — no hidden fees at checkout.",
    metric: "0",
    metricLabel: "booking or service fees",
  },
  {
    icon: HeadsetIcon,
    title: "Real humans, 24/7",
    description:
      "Flight delayed or plans changed? Talk to a real travel expert any hour, wherever you are.",
    metric: "< 5 min",
    metricLabel: "average response time",
  },
];

const guarantees = [
  "Free cancellation up to 48 hours",
  "Secure encrypted payments",
  "Flexible rescheduling",
];

const WhyChoseUs = () => {
  return (
    <section
      aria-labelledby="why-tripnest-heading"
      className="border-b bg-muted/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="bg-background px-3 py-1 text-[0.7rem] tracking-wide"
          >
            <SparklesIcon />
            Why Tripnest
          </Badge>

          <h2
            id="why-tripnest-heading"
            className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Travel plans you can trust, before you even pack
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Thousands of travelers book with Tripnest because every trip is
            planned by people who live there, priced without surprises, and
            backed around the clock.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title}>
              <Card className="h-full gap-0 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                    <reason.icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base leading-snug font-semibold tracking-tight text-balance">
                    {reason.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>

                <p className="mt-auto flex items-baseline gap-1.5 pt-6">
                  <span className="font-heading text-sm font-semibold">
                    {reason.metric}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {reason.metricLabel}
                  </span>
                </p>
              </Card>
            </li>
          ))}
        </ul>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:text-sm">
          {guarantees.map((guarantee) => (
            <li
              key={guarantee}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span
                aria-hidden
                className="size-1 rounded-full bg-muted-foreground/40"
              />
              {guarantee}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChoseUs;
