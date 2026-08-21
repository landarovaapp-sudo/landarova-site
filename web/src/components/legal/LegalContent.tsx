export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 flex flex-col gap-2">{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 pl-0.5">
      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-trusted-blue" />
      <span>{children}</span>
    </li>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-5 text-base font-semibold text-foreground">
      {children}
    </h3>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 rounded-xl border border-border bg-surface p-4 text-sm text-foreground/80">
      {children}
    </div>
  );
}

export function EmailLink({ children }: { children: string }) {
  return (
    <a
      href={`mailto:${children}`}
      className="font-medium text-trusted-blue hover:underline"
    >
      {children}
    </a>
  );
}
