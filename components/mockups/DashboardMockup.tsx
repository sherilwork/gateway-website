import { cn } from "@/lib/utils";

const sidebarItems: { label: string; active?: boolean; badge?: string }[] = [
  { label: "Dashboard", active: true },
  { label: "Orders", badge: "12" },
  { label: "Items" },
  { label: "Menu" },
  { label: "Coupons" },
  { label: "Reporting" },
  { label: "Riders" },
  { label: "Deliveries" },
];

const stats = [
  { label: "Today's Orders", value: "128" },
  { label: "Revenue", value: "₹42,560" },
  { label: "Customers", value: "96" },
  { label: "Avg. Order", value: "₹332" },
];

const bars = [38, 52, 44, 66, 58, 78, 62, 88, 70, 92, 81, 96];

const recentOrders = [
  { id: "#1042", total: "₹640", status: "Preparing" },
  { id: "#1041", total: "₹1,120", status: "Out for delivery" },
  { id: "#1040", total: "₹380", status: "Completed" },
];

const statusStyles: Record<string, string> = {
  Preparing: "bg-amber-50 text-amber-700 border-amber-200",
  "Out for delivery": "bg-blue-50 text-blue-700 border-blue-200",
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-24px_rgba(17,24,39,0.28)]",
        className,
      )}
      role="img"
      aria-label="Illustration of the WebWrite restaurant dashboard showing orders, revenue, customers, a sales chart and recent orders. Demo data only."
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <div className="mx-auto flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[0.625rem] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
          dashboard.webwrite.in
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-40 shrink-0 border-r border-line bg-white p-3 sm:block">
          <div className="mb-3 flex items-center gap-2 px-2 py-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand text-[0.625rem] font-bold text-white">
              W
            </span>
            <span className="text-[0.6875rem] font-semibold text-ink">
              Restaurant
            </span>
          </div>
          <ul className="flex flex-col gap-0.5">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <div
                  className={cn(
                    "flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[0.6875rem] font-medium",
                    item.active ? "bg-brand-soft text-brand" : "text-muted",
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-brand px-1.5 py-0.5 text-[0.5625rem] font-bold text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[0.8125rem] font-bold text-ink">Overview</p>
              <p className="text-[0.625rem] text-muted">Today</p>
            </div>
            <span className="rounded-full border border-line px-2.5 py-1 text-[0.625rem] font-medium text-muted">
              Last 7 days
            </span>
          </div>

          <div className="mb-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-xl border border-line bg-white p-2.5"
              >
                <p className="truncate text-[0.5625rem] font-medium tracking-wide text-muted uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-bold text-ink">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-3 rounded-xl border border-line bg-white p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[0.6875rem] font-semibold text-ink">
                Sales this week
              </p>
              <span className="text-[0.5625rem] text-muted">Demo data</span>
            </div>
            <div className="flex h-16 items-end gap-1.5">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-sm bg-gradient-to-t from-brand/25 to-brand"
                  style={{ height: `${height}%` }}
                  aria-hidden
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-line bg-white">
            <div className="border-b border-line px-3 py-2 text-[0.6875rem] font-semibold text-ink">
              Recent orders
            </div>
            <ul className="divide-y divide-line">
              {recentOrders.map((order) => (
                <li
                  key={order.id}
                  className="flex items-center justify-between gap-2 px-3 py-2"
                >
                  <span className="text-[0.625rem] font-semibold text-ink">
                    {order.id}
                  </span>
                  <span className="text-[0.625rem] text-muted">
                    {order.total}
                  </span>
                  <span
                    className={cn(
                      "rounded-full border px-2 py-0.5 text-[0.5625rem] font-medium",
                      statusStyles[order.status],
                    )}
                  >
                    {order.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
