import type { Metadata } from "next";
import Link from "next/link";

import AuthHeader from "@/components/auth/AuthHeader";
import RegisterForm from "@/components/auth/RegisterForm";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Create your account - Tripnest",
  description:
    "Create a Tripnest account to book handpicked destinations, verified stays and 24/7 travel support.",
};

const RegisterPage = () => {
  return (
    <main className="flex flex-1 flex-col bg-muted/30">
      <AuthHeader />

      <div className="flex flex-1 items-center justify-center px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="w-full max-w-md">
          <Card className="gap-0 p-6 sm:p-8">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Start planning your next journey in a couple of minutes.
            </p>

            <RegisterForm />
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
