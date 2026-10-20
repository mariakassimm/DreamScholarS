import type { Metadata } from "next";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About DreamScholar",
  description:
    "Learn about DreamScholar's mission to make fully funded scholarship discovery simple, trustworthy, and accessible for students everywhere.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make discovering fully funded scholarships as simple as searching for a flight — clear, fast, and trustworthy.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where financial background never determines who gets access to a world-class education.",
  },
  {
    icon: HeartHandshake,
    title: "Our Commitment",
    description:
      "We link only to official scholarship providers and never charge students to browse or apply.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-semibold text-ink">
            About DreamScholar
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            DreamScholar was built on a simple belief: every student who
            dreams of studying abroad deserves a clear, honest path to find
            the funding that makes it possible.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <value.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-ink">
                {value.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-slate-100 bg-white p-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Our Story</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Every year, thousands of fully funded scholarships go unclaimed
            simply because eligible students never hear about them in time.
            DreamScholar exists to close that gap — organizing verified
            opportunities by country, degree, and field of study so students
            can spend less time searching and more time preparing strong
            applications.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            We are not affiliated with any government or university. Every
            listing on DreamScholar links directly to the official scholarship
            provider, and we encourage every applicant to verify details on
            the official website before applying.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <ButtonLink href="/scholarships" size="lg">
            Start Exploring Scholarships
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
