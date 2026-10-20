import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the DreamScholar team for questions, feedback, or partnership inquiries.",
  alternates: { canonical: "/contact" },
};

const infoItems = [
  { icon: Mail, label: "Email", value: "hello@dreamscholar.example.com" },
  { icon: Clock, label: "Response Time", value: "Within 2 business days" },
  { icon: MessageCircle, label: "Best For", value: "Feedback, corrections & partnerships" },
];

export default function ContactPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink">Contact Us</h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Have a question, spotted an outdated listing, or want to
            collaborate? We would love to hear from you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-5">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-ink">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
