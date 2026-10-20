import { SearchX } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center py-14">
      <Container className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary">
          <SearchX className="h-8 w-8" aria-hidden="true" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-3 max-w-sm text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <ButtonLink href="/" className="mt-6">
          Back to Home
        </ButtonLink>
      </Container>
    </div>
  );
}
