/**
 * Auth form validation.
 *
 * Runs client-side for instant feedback. When a real auth backend is wired
 * up, the same rules should be re-run server-side — never trust the browser.
 */

export type LoginValues = {
  email: string;
  password: string;
};

export type SignupValues = {
  fullName: string;
  restaurantName: string;
  email: string;
  password: string;
};

export type AuthErrors<T> = Partial<Record<keyof T, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
export const MIN_PASSWORD_LENGTH = 8;

export function normalizeAuth<T extends { email: string; password: string }>(
  input: Partial<T>,
): T {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value,
    ]),
  ) as T;
}

function validateEmail(email: string): string | undefined {
  if (!email) return "Please enter your email address.";
  if (!EMAIL_RE.test(email)) return "Enter a valid email address.";
  if (email.length > 160) return "Email address is too long.";
  return undefined;
}

function validatePassword(password: string): string | undefined {
  if (!password) return "Please enter your password.";
  if (password.length < MIN_PASSWORD_LENGTH)
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  return undefined;
}

export function validateLogin(values: LoginValues): AuthErrors<LoginValues> {
  const errors: AuthErrors<LoginValues> = {};

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  // Password rules are relaxed on login — an existing account may predate
  // the current signup policy, so only require presence here.
  if (!values.password) errors.password = "Please enter your password.";

  return errors;
}

export function validateSignup(
  values: SignupValues,
): AuthErrors<SignupValues> {
  const errors: AuthErrors<SignupValues> = {};

  if (!values.fullName) {
    errors.fullName = "Please enter your full name.";
  } else if (values.fullName.length > 120) {
    errors.fullName = "Name is too long.";
  }

  if (!values.restaurantName) {
    errors.restaurantName = "Please enter your restaurant name.";
  } else if (values.restaurantName.length > 160) {
    errors.restaurantName = "Restaurant name is too long.";
  }

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(values.password);
  if (passwordError) errors.password = passwordError;

  return errors;
}

export function hasErrors(errors: Record<string, string | undefined>): boolean {
  return Object.values(errors).some(Boolean);
}
