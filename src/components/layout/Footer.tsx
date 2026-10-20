import Link from "next/link";
import { GraduationCap, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS, SITE_NAME, CONTACT_EMAIL } from "@/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            {SITE_NAME}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            DreamScholar helps students discover fully funded scholarships
            around the world, with clear guidance at every step of the
            application journey.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-ink-muted">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Remote-first, serving students worldwide
            </span>
          </div>
        </div>

        <FooterColumn title="Explore" links={FOOTER_LINKS.explore} />
        <FooterColumn title="Company" links={FOOTER_LINKS.company} />
        <FooterColumn title="Popular Degrees" links={FOOTER_LINKS.popularDegrees} />
      </Container>

      <div className="border-t border-slate-100 bg-amber-50/60">
        <Container className="py-4 text-center text-xs leading-relaxed text-amber-900 sm:text-left">
          Scholarship eligibility, benefits, and deadlines can change and may
          vary by country or university. You should always check official
          websites before applying and for any requirement changes.
        </Container>
      </div>

      <div className="border-t border-slate-100">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-ink-muted sm:flex-row">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-ink-muted hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
