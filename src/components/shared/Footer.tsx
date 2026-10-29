import Link from "next/link";
import { MailIcon, ShieldCheckIcon } from "lucide-react";

import Logo from "@/components/shared/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/shared/SocialIcons";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: YoutubeIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: XIcon,
  },
  {
    label: "Email",
    href: "mailto:hello@mail.com",
    icon: MailIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: WhatsappIcon,
  },
];

const linkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "/travel" },
      { label: "Travel packages", href: "/travel" },
      { label: "Trip guides", href: "/guides" },
      { label: "Deals", href: "/offers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Help center", href: "/help" },
      { label: "Privacy policy", href: "/privacy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Logo />
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Handpicked destinations, verified stays and real human support -
              so every journey feels effortless from the first click.
            </p>

            <ul className="mt-6 flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="flex size-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <social.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-heading text-sm font-semibold">
                {group.title}
              </h2>

              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© Tripnest. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <ShieldCheckIcon className="size-3.5" aria-hidden />
            Secure payments · Verified local partners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
