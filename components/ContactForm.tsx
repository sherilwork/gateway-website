"use client";

import { useId, useState, type FormEvent } from "react";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import {
  hasErrors,
  normalizeLead,
  orderingMethods,
  validateLead,
  type LeadErrors,
  type LeadPayload,
} from "@/lib/validation/lead";
import { cn } from "@/lib/utils";

const emptyForm: LeadPayload = {
  fullName: "",
  restaurantName: "",
  mobile: "",
  email: "",
  city: "",
  outlets: "",
  orderingMethod: "",
  message: "",
  intent: "demo",
};

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  hint?: string;
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

export function ContactForm({ defaultIntent = "demo" }: { defaultIntent?: string }) {
  const formId = useId();
  const [values, setValues] = useState<LeadPayload>({
    ...emptyForm,
    intent: defaultIntent,
  });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [feedback, setFeedback] = useState<{
    variant: "success" | "error";
    title: string;
    description: string;
  } | null>(null);

  const update = (key: keyof LeadPayload, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const payload = normalizeLead(values);
    const nextErrors = validateLead(payload);
    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setFeedback({
        variant: "error",
        title: "Please check the form",
        description: "Some required details are missing or invalid.",
      });
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }

    // UI-only for now — no backend is connected. Simulate the request so the
    // success flow is testable; wire up /api/leads when the backend lands.
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-bold text-ink">
          Thank you — we&apos;ll be in touch
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Your request has been received. A member of the WebWrite team will
          reach out to arrange your demo.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setValues({ ...emptyForm, intent: defaultIntent });
            setStatus("idle");
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {feedback ? (
        <div
          role="status"
          className={cn(
            "rounded-xl border px-4 py-3 text-sm",
            feedback.variant === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-brand/30 bg-brand-soft text-ink",
          )}
        >
          <p className="font-semibold">{feedback.title}</p>
          <p className="mt-0.5 text-muted">{feedback.description}</p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-fullName`} label="Full Name" required error={errors.fullName}>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
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
            value={values.restaurantName}
            onChange={(event) => update("restaurantName", event.target.value)}
            aria-invalid={Boolean(errors.restaurantName)}
            aria-describedby={
              errors.restaurantName ? `${formId}-restaurantName-error` : undefined
            }
            className={inputClass}
            placeholder="Your restaurant"
          />
        </Field>

        <Field id={`${formId}-mobile`} label="Mobile" required error={errors.mobile}>
          <input
            id={`${formId}-mobile`}
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.mobile}
            onChange={(event) => update("mobile", event.target.value)}
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={errors.mobile ? `${formId}-mobile-error` : undefined}
            className={inputClass}
            placeholder="98765 43210"
          />
        </Field>

        <Field id={`${formId}-email`} label="Email" required error={errors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={inputClass}
            placeholder="you@restaurant.com"
          />
        </Field>

        <Field id={`${formId}-city`} label="City" error={errors.city}>
          <input
            id={`${formId}-city`}
            name="city"
            type="text"
            autoComplete="address-level2"
            value={values.city}
            onChange={(event) => update("city", event.target.value)}
            aria-invalid={Boolean(errors.city)}
            className={inputClass}
            placeholder="Your city"
          />
        </Field>

        <Field id={`${formId}-outlets`} label="Number of Outlets">
          <input
            id={`${formId}-outlets`}
            name="outlets"
            type="number"
            min={1}
            inputMode="numeric"
            value={values.outlets}
            onChange={(event) => update("outlets", event.target.value)}
            className={inputClass}
            placeholder="1"
          />
        </Field>
      </div>

      <Field id={`${formId}-orderingMethod`} label="Current Ordering Method">
        <select
          id={`${formId}-orderingMethod`}
          name="orderingMethod"
          value={values.orderingMethod}
          onChange={(event) => update("orderingMethod", event.target.value)}
          className={cn(inputClass, "appearance-none bg-white")}
        >
          <option value="">Select an option</option>
          {orderingMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </Field>

      <Field id={`${formId}-message`} label="Message" error={errors.message}>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={cn(inputClass, "resize-y")}
          placeholder="Tell us a little about your restaurant and what you're looking for."
        />
      </Field>

      {/* Honeypot — hidden from users, catches naive bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <span
              aria-hidden
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            />
            Sending…
          </>
        ) : (
          <>
            Request a Demo
            <IconArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-xs text-muted">
        By submitting this form you agree to be contacted about your enquiry.
        We do not share your details with third parties.
      </p>
    </form>
  );
}
