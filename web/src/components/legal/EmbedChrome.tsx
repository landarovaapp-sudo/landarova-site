"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function EmbedChromeInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const isEmbedded = searchParams.get("embed") === "1";

  if (isEmbedded) return null;
  return <>{children}</>;
}

export default function EmbedChrome({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={children}>
      <EmbedChromeInner>{children}</EmbedChromeInner>
    </Suspense>
  );
}
