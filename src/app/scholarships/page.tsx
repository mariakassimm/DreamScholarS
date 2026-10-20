import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import ScholarshipExplorer from "@/components/scholarship/ScholarshipExplorer";
import VerifyDisclaimer from "@/components/ui/VerifyDisclaimer";
import LoadingGrid from "@/components/ui/LoadingState";
import { getAllScholarships } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Scholarships",
  description:
    "Browse fully funded and partially funded scholarships from around the world. Filter by degree level and funding type to find your best match.",
  alternates: { canonical: "/scholarships" },
};

export default function ScholarshipsPage() {
  const scholarships = getAllScholarships();

  return (
    <div className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Explore Scholarships
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {scholarships.length} scholarships across degree levels and
            countries. Use search and filters to find opportunities that match
            your profile.
          </p>
        </div>

        <div className="mt-6 max-w-2xl">
          <VerifyDisclaimer compact />
        </div>

        <div className="mt-10">
          {/*
            ScholarshipExplorer reads the ?q= search param on the client
            (via useSearchParams), which requires a Suspense boundary —
            this also keeps the page fully static-exportable for hosts
            like Hostinger that don't run a Node server.
          */}
          <Suspense fallback={<LoadingGrid />}>
            <ScholarshipExplorer scholarships={scholarships} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
