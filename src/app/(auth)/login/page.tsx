import type { Metadata } from "next";
import Link from "next/link";
import AuthHeader from "@/components/auth/AuthHeader";
import LoginForm from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Log in - Tripnest",
  description:
    "Log in to your Tripnest account to manage bookings, saved trips and travel support.",
};

const LoginPage = () => {
  return (
    <main className="flex flex-1 flex-col bg-muted/30">
      <AuthHeader />

      <div className="flex flex-1 items-center justify-center px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="w-full max-w-md">
          <Card className="gap-0 p-6 sm:p-8">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Log in to keep planning your next trip.
            </p>

            <LoginForm />
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
