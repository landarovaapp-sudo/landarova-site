const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com/landarover",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/landarover",
    path: "M12 2c-2.7 0-3.1 0-4.1.1-1.1.1-1.8.2-2.5.5-.7.3-1.3.6-1.9 1.2-.6.6-.9 1.2-1.2 1.9-.3.7-.4 1.4-.5 2.5C1.7 9.2 1.7 9.6 1.7 12c0 2.7 0 3.1.1 4.1.1 1.1.2 1.8.5 2.5.3.7.6 1.3 1.2 1.9.6.6 1.2.9 1.9 1.2.7.3 1.4.4 2.5.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1.1-.1 1.8-.2 2.5-.5.7-.3 1.3-.6 1.9-1.2.6-.6.9-1.2 1.2-1.9.3-.7.4-1.4.5-2.5.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-1.1-.2-1.8-.5-2.5-.3-.7-.6-1.3-1.2-1.9-.6-.6-1.2-.9-1.9-1.2-.7-.3-1.4-.4-2.5-.5C15.1 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 1 .1 1.5.2 1.9.4.5.2.8.4 1.1.7.3.3.6.6.7 1.1.2.4.3.9.4 1.9.1 1 .1 1.3.1 4s0 3-.1 4c-.1 1-.2 1.5-.4 1.9-.2.5-.4.8-.7 1.1-.3.3-.6.6-1.1.7-.4.2-.9.3-1.9.4-1 .1-1.3.1-4 .1s-3 0-4-.1c-1-.1-1.5-.2-1.9-.4-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.6-.7-1.1-.2-.4-.3-.9-.4-1.9-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-1 .2-1.5.4-1.9.2-.5.4-.8.7-1.1.3-.3.6-.6 1.1-.7.4-.2.9-.3 1.9-.4 1-.1 1.3-.1 4-.1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/landarover",
    path: "M18.3 2H21l-6.5 7.4L22.2 22h-6.8l-5.3-6.9L3.9 22H1.2l7-8-7.6-12h7l4.8 6.3L18.3 2zm-1.2 18h1.9L7 3.9H5l12.1 16.1z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@landarover",
    path: "M16.6 2h-3.3v13.6a2.9 2.9 0 1 1-2.9-3 3 3 0 0 1 .9.1V9.4a6.2 6.2 0 1 0 5.3 6.1V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.3 4.3 0 0 1-4.4-4.7z",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-trusted-blue hover:text-trusted-blue"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
