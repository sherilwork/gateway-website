import { IconBell, IconLocation, IconRider } from "@/components/icons";
import { PhoneMockup } from "./PhoneMockup";

const deliverySteps = [
  { label: "Order claimed", done: true },
  { label: "Picked up", done: true },
  { label: "On the way", done: true },
  { label: "Delivered", done: false },
];

type RiderAppMockupProps = {
  className?: string;
  riderName?: string;
};

export function RiderAppMockup({
  className,
  riderName = "Rider",
}: RiderAppMockupProps) {
  return (
    <PhoneMockup
      className={className}
      label="Rider App"
      screenClassName="bg-surface"
    >
      <div
        className="flex h-full flex-col"
        role="img"
        aria-label="Illustration of the WebWrite rider app showing online status, an active delivery, order steps and a map placeholder. Demo data only."
      >
        <div className="flex items-center justify-between px-4 pt-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-ink text-white">
              <IconRider className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[0.6875rem] font-bold text-ink">
                {riderName}
              </p>
              <p className="flex items-center gap-1 text-[0.5625rem] font-medium text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online
              </p>
            </div>
          </div>
          <IconBell className="h-4 w-4 text-ink" />
        </div>

        <div className="mt-3 px-4">
          <div className="flex items-center justify-between rounded-xl border border-line bg-white p-2.5">
            <div>
              <p className="text-[0.5625rem] text-muted">
                Today&apos;s deliveries
              </p>
              <p className="text-sm font-bold text-ink">3</p>
            </div>
            <div className="text-right">
              <p className="text-[0.5625rem] text-muted">Earnings</p>
              <p className="text-sm font-bold text-ink">₹240</p>
            </div>
          </div>
        </div>

        <div className="mt-3 flex-1 px-4 pb-4">
          <div className="rounded-xl border border-brand/30 bg-brand-soft p-3">
            <div className="flex items-center justify-between">
              <p className="text-[0.625rem] font-bold text-brand">
                New order available
              </p>
              <span className="text-[0.5625rem] font-semibold text-brand">
                #1043
              </span>
            </div>
            <p className="mt-1 text-[0.5625rem] text-ink-secondary">
              Pickup from restaurant · Drop to customer
            </p>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="mt-2 w-full rounded-full bg-brand py-1.5 text-[0.625rem] font-bold text-white"
            >
              Accept order
            </button>
          </div>

          <div className="mt-3 rounded-xl border border-line bg-white p-3">
            <p className="text-[0.625rem] font-bold text-ink">
              Active delivery · #1041
            </p>

            <div className="relative mt-2 flex h-20 items-center justify-center overflow-hidden rounded-lg border border-line bg-surface ww-grid-bg">
              <div className="flex items-center gap-1.5 text-[0.5625rem] font-medium text-muted">
                <IconLocation className="h-3.5 w-3.5 text-brand" />
                Map placeholder
              </div>
            </div>

            <ol className="mt-3 flex flex-col gap-1.5">
              {deliverySteps.map((step) => (
                <li
                  key={step.label}
                  className="flex items-center gap-2 text-[0.5625rem]"
                >
                  <span
                    className={
                      step.done
                        ? "h-2 w-2 rounded-full bg-emerald-500"
                        : "h-2 w-2 rounded-full border border-line bg-white"
                    }
                  />
                  <span
                    className={
                      step.done
                        ? "font-medium text-ink"
                        : "text-muted"
                    }
                  >
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>

            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="mt-3 w-full rounded-full border border-line py-1.5 text-[0.625rem] font-bold text-ink"
            >
              Complete delivery
            </button>
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}
