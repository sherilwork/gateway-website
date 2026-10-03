import { siteConfig } from "@/lib/site";

export type LegalSection = {
  id: string;
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <section className="ww-section bg-white">
      <div className="ww-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
              On this page
            </p>
            <nav aria-label="Page sections" className="mt-4">
              <ul className="flex flex-col gap-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted transition-colors hover:text-brand"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.12em] text-brand uppercase">
              Last updated {updated}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>

            <div className="mt-8 flex flex-col gap-8">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <h3 className="text-lg font-bold text-ink">
                    {section.heading}
                  </h3>
                  <div className="mt-3 flex flex-col gap-3">
                    {section.body.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm text-muted">
                Questions about this policy? Contact us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-brand hover:text-brand-strong"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
