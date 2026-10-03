import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { Logo } from "@/components/Logo";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Log In",
  description:
    "Log in to your WebWrite Restaurant SaaS account to manage your branded restaurant apps, dashboard and rider platform.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <section className="ww-section bg-surface">
      <div className="ww-container">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          <Logo showLabel={false} className="justify-center" />

          <div className="mt-6 w-full rounded-2xl border border-line bg-white p-6 shadow-float sm:p-8">
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="mt-2 text-sm text-muted">
              Log in to manage your restaurant&apos;s apps, orders and team.
            </p>

            <div className="mt-6">
              <AuthForm mode="login" />
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted">
            By continuing you agree to our{" "}
            <a href="/terms" className="font-semibold text-brand hover:text-brand-strong">
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="font-semibold text-brand hover:text-brand-strong"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
