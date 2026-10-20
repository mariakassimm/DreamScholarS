import { ShieldCheck, Clock3, Compass, BookMarked } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Information",
    description:
      "Every listing links directly to the official scholarship provider so you always apply through trusted, primary sources.",
  },
  {
    icon: Clock3,
    title: "Deadline Clarity",
    description:
      "Clear timelines and deadline countdowns help you plan your application months in advance, not days.",
  },
  {
    icon: Compass,
    title: "Easy Discovery",
    description:
      "Filter by country, degree, and field of study to quickly narrow down the opportunities that fit your profile.",
  },
  {
    icon: BookMarked,
    title: "Practical Guides",
    description:
      "Actionable articles on motivation letters, interviews, and timelines — written to actually move your application forward.",
  },
];

export default function WhyDreamScholar() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Why DreamScholar"
          title="Built to make scholarship discovery simple"
          description="We focus on clarity and trust so you can spend less time searching and more time preparing a strong application."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center sm:text-left">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary sm:mx-0">
                <reason.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
