export function AppleLogo({ className = "h-6 w-6 fill-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export function GooglePlayLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path
        d="M325.3 234.3L104.6 13.6c-5.5 3-9.6 8.9-9.6 15.9v453c0 7 4.1 12.9 9.6 15.9l220.7-220.7z"
        fill="#00d2ff"
      />
      <path
        d="M405.8 187.4l-71.2-41.1-84.9 84.9 84.9 84.9 71.5-41.3c19.7-11.4 19.7-39.8-.3-51.4z"
        fill="#ffb900"
      />
      <path
        d="M104.6 13.6c1.1-.6 2.3-1.1 3.5-1.5l226 130.6-49.6 49.6-179.9-178.7z"
        fill="#00f076"
      />
      <path
        d="M108.1 498c-1.2-.4-2.4-.9-3.5-1.5l179.9-178.7 49.6 49.6-226 130.6z"
        fill="#ff3a44"
      />
    </svg>
  );
}

export default function StoreBadges({
  align = "start",
  size = "default",
}: {
  align?: "start" | "center";
  size?: "default" | "compact";
}) {
  const isCompact = size === "compact";

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <a
        href="#"
        aria-label="Download on the App Store"
        className={`inline-flex items-center gap-2 rounded-xl bg-black text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${
          isCompact ? "px-3.5 py-2" : "gap-2.5 rounded-2xl px-5 py-3"
        }`}
      >
        <AppleLogo className={isCompact ? "h-4 w-4 fill-white" : "h-6 w-6 fill-white"} />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold text-white/70">
            Download on the
          </span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>

      <a
        href="#"
        aria-label="Get it on Google Play"
        className={`inline-flex items-center gap-2 rounded-xl bg-black text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${
          isCompact ? "px-3.5 py-2" : "gap-2.5 rounded-2xl px-5 py-3"
        }`}
      >
        <GooglePlayLogo className={isCompact ? "h-4 w-4" : "h-6 w-6"} />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold text-white/70">GET IT ON</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
