import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { faqs } from "@/lib/content/faqs";

export function FaqSection() {
  return (
    <section id="faq" className="ww-section scroll-mt-24 bg-white">
      <div className="ww-container flex flex-col gap-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to the questions restaurant owners ask us most often."
        />
        <FAQ items={faqs} />
      </div>
    </section>
  );
}
