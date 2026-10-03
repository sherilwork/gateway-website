"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import {
  hasErrors,
  normalizeAuth,
  validateLogin,
  validateSignup,
  MIN_PASSWORD_LENGTH,
  type AuthErrors,
  type LoginValues,
  type SignupValues,
} from "@/lib/validation/auth";
type AuthFormProps = {
  mode: "login" | "signup";
};

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
};

function Field({ id, label, required, error, children, hint }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-0.5 text-brand" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-muted">{hint}</p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-brand">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 aria-[invalid=true]:border-brand";

const emptyLogin: LoginValues = { email: "", password: "" };
const emptySignup: SignupValues = {
  fullName: "",
  restaurantName: "",
  email: "",
  password: "",
};

/**
 * UI-only auth form. Validation runs client-side; submission shows a
 * confirmation state until a real auth endpoint is wired up (see
 * lib/validation/auth.ts — rules must be re-run server-side then).
 */
export function AuthForm({ mode }: AuthFormProps) {
  const formId = useId();
  const isSignup = mode === "signup";

  const [loginValues, setLoginValues] = useState<LoginValues>(emptyLogin);
  const [signupValues, setSignupValues] = useState<SignupValues>(emptySignup);
  const [errors, setErrors] = useState<AuthErrors<LoginValues & SignupValues>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const setLogin = (key: keyof LoginValues, value: string) => {
    setLoginValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const setSignup = (key: keyof SignupValues, value: string) => {
    setSignupValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const nextErrors: AuthErrors<LoginValues & SignupValues> = isSignup
      ? validateSignup(normalizeAuth(signupValues))
      : validateLogin(normalizeAuth(loginValues));

    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      const firstKey = Object.entries(nextErrors).find(
        ([, error]) => error,
      )?.[0];
      if (firstKey) document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }

    setStatus("loading");
    // UI-only for now — simulate the request so the success flow is testable.
    window.setTimeout(() => setStatus("success"), 500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-bold text-ink">
          {isSignup ? "Account details received" : "Welcome back"}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          {isSignup
            ? "Sign-up is working on the front end. Once authentication is connected, your account will be created right away."
            : "Login is working on the front end. Once authentication is connected, you'll be signed in right away."}
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setLoginValues(emptyLogin);
            setSignupValues(emptySignup);
            setErrors({});
            setStatus("idle");
          }}
        >
          {isSignup ? "Sign up another account" : "Back to login"}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {isSignup ? (
        <>
          <Field
            id={`${formId}-fullName`}
            label="Full Name"
            required
            error={errors.fullName}
          >
            <input
              id={`${formId}-fullName`}
              name="fullName"
              type="text"
              autoComplete="name"
              value={signupValues.fullName}
              onChange={(event) => setSignup("fullName", event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? `${formId}-fullName-error` : undefined
              }
              className={inputClass}
              placeholder="Your name"
            />
          </Field>

          <Field
            id={`${formId}-restaurantName`}
            label="Restaurant Name"
            required
            error={errors.restaurantName}
          >
            <input
              id={`${formId}-restaurantName`}
              name="restaurantName"
              type="text"
              autoComplete="organization"
              value={signupValues.restaurantName}
              onChange={(event) =>
                setSignup("restaurantName", event.target.value)
              }
              aria-invalid={Boolean(errors.restaurantName)}
              aria-describedby={
                errors.restaurantName
                  ? `${formId}-restaurantName-error`
                  : undefined
              }
              className={inputClass}
              placeholder="Your restaurant"
            />
          </Field>
        </>
      ) : null}

      <Field id={`${formId}-email`} label="Email" required error={errors.email}>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete={isSignup ? "email" : "username"}
          value={isSignup ? signupValues.email : loginValues.email}
          onChange={(event) =>
            isSignup
              ? setSignup("email", event.target.value)
              : setLogin("email", event.target.value)
          }
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className={inputClass}
          placeholder="you@restaurant.com"
        />
      </Field>

      <Field
        id={`${formId}-password`}
        label="Password"
        required
        error={errors.password}
        hint={
          isSignup
            ? `At least ${MIN_PASSWORD_LENGTH} characters.`
            : undefined
        }
      >
        <input
          id={`${formId}-password`}
          name="password"
          type="password"
          autoComplete={isSignup ? "new-password" : "current-password"}
          value={isSignup ? signupValues.password : loginValues.password}
          onChange={(event) =>
            isSignup
              ? setSignup("password", event.target.value)
              : setLogin("password", event.target.value)
          }
          aria-invalid={Boolean(errors.password)}
          aria-describedby={
            errors.password ? `${formId}-password-error` : undefined
          }
          className={inputClass}
          placeholder={isSignup ? "Create a password" : "Your password"}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? (
          <>
            <span
              aria-hidden
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            />
            Please wait…
          </>
        ) : (
          <>
            {isSignup ? "Create Account" : "Log In"}
            <IconArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              Log in
            </Link>
          </>
        ) : (
          <>
            New to WebWrite?{" "}
            <Link
              href="/signup"
              className="font-semibold text-brand transition-colors hover:text-brand-strong"
            >
              Create an account
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
