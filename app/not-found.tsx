import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="ww-section">
      <div className="ww-container flex flex-col items-center gap-6 py-16 text-center">
        <span className="text-sm font-semibold tracking-[0.14em] text-brand uppercase">
          404
        </span>
        <h1 className="max-w-xl text-3xl font-bold sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="max-w-md text-base text-muted">
          The page you&apos;re looking for may have moved. Head back to the
          homepage or explore the platform.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/products" variant="secondary" size="lg">
            Explore Platform
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
