"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSession } from "@/lib/auth-client";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Travel", href: "/travel" },
];

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  // console.log(user, "user");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight"
        >
          Tripnest
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
            Login
          </Link>
          <Link href="/register" className={buttonVariants()}>
            Register
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>

          <SheetContent side="right" className="data-[side=right]:w-72">
            <SheetHeader>
              <SheetTitle className="font-heading text-lg">Tripnest</SheetTitle>
              <SheetDescription>Menu</SheetDescription>
            </SheetHeader>

            <nav aria-label="Mobile" className="px-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <SheetClose
                      nativeButton={false}
                      render={<Link href={link.href} />}
                      className="flex h-10 items-center rounded-lg px-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <Separator />

            <SheetFooter>
              <SheetClose
                nativeButton={false}
                render={<Link href="/login" />}
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Login
              </SheetClose>
              <SheetClose
                nativeButton={false}
                render={<Link href="/register" />}
                className={buttonVariants({ className: "w-full" })}
              >
                Register
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
