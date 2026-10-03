/**
 * Shared lead validation.
 *
 * Used by the contact form for instant feedback AND re-run on the server so
 * client-side validation is never trusted on its own.
 */

export type LeadPayload = {
  fullName: string;
  restaurantName: string;
  mobile: string;
  email: string;
  city: string;
  outlets: string;
  orderingMethod: string;
  message: string;
  intent: string;
};

export type LeadErrors = Partial<Record<keyof LeadPayload, string>>;

export const orderingMethods = [
  "Phone calls",
  "WhatsApp",
  "Food delivery marketplaces",
  "Own website or app",
  "Walk-in only",
  "Other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
// Indian mobile numbers: optional +91 / 0 prefix, then 10 digits starting 6-9.
const MOBILE_RE = /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/;

const MAX_LENGTHS: Record<keyof LeadPayload, number> = {
  fullName: 120,
  restaurantName: 160,
  mobile: 20,
  email: 160,
  city: 80,
  outlets: 20,
  orderingMethod: 60,
  message: 2000,
  intent: 40,
};

export function normalizeLead(input: Partial<LeadPayload>): LeadPayload {
  const read = (key: keyof LeadPayload) =>
    typeof input[key] === "string" ? (input[key] as string).trim() : "";

  return {
    fullName: read("fullName"),
    restaurantName: read("restaurantName"),
    mobile: read("mobile"),
    email: read("email"),
    city: read("city"),
    outlets: read("outlets"),
    orderingMethod: read("orderingMethod"),
    message: read("message"),
    intent: read("intent") || "demo",
  };
}

export function validateLead(payload: LeadPayload): LeadErrors {
  const errors: LeadErrors = {};

  if (!payload.fullName) {
    errors.fullName = "Please enter your full name.";
  } else if (payload.fullName.length > MAX_LENGTHS.fullName) {
    errors.fullName = "Name is too long.";
  }

  if (!payload.restaurantName) {
    errors.restaurantName = "Please enter your restaurant name.";
  } else if (payload.restaurantName.length > MAX_LENGTHS.restaurantName) {
    errors.restaurantName = "Restaurant name is too long.";
  }

  if (!payload.mobile) {
    errors.mobile = "Please enter your mobile number.";
  } else if (!MOBILE_RE.test(payload.mobile.replace(/\s+/g, ""))) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!payload.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_RE.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  } else if (payload.email.length > MAX_LENGTHS.email) {
    errors.email = "Email address is too long.";
  }

  if (payload.city.length > MAX_LENGTHS.city) {
    errors.city = "City name is too long.";
  }

  if (payload.message.length > MAX_LENGTHS.message) {
    errors.message = "Please keep your message under 2000 characters.";
  }

  return errors;
}

export function hasErrors(errors: LeadErrors): boolean {
  return Object.keys(errors).length > 0;
}