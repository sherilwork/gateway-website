import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { Logo } from "@/components/Logo";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Sign Up",
  description:
    "Create your WebWrite Restaurant SaaS account and launch your own branded restaurant app, dashboard and rider platform.",
  path: "/signup",
  noIndex: true,
});

export default function SignupPage() {
  return (
    <section className="ww-section bg-surface">
      <div className="ww-container">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          <Logo showLabel={false} className="justify-center" />

          <div className="mt-6 w-full rounded-2xl border border-line bg-white p-6 shadow-float sm:p-8">
            <h1 className="text-2xl font-bold tracking-tight">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-muted">
              Set up your WebWrite account to run your branded ordering,
              dashboard and rider apps.
            </p>

            <div className="mt-6">
              <AuthForm mode="signup" />
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted">
            By creating an account you agree to our{" "}
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
