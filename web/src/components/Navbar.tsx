"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { AppleLogo, GooglePlayLogo } from "./StoreBadges";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo-blue.png"
            alt="Landarover"
            width={148}
            height={30}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            aria-label="Download on the App Store"
            className="hidden items-center gap-1.5 rounded-xl bg-black px-3.5 py-2 text-white transition-transform hover:scale-[1.03] md:inline-flex"
          >
            <AppleLogo className="h-4 w-4 fill-white" />
            <span className="text-xs font-semibold">App Store</span>
          </a>
          <a
            href="#"
            aria-label="Get it on Google Play"
            className="hidden items-center gap-1.5 rounded-xl bg-black px-3.5 py-2 text-white transition-transform hover:scale-[1.03] md:inline-flex"
          >
            <GooglePlayLogo className="h-4 w-4" />
            <span className="text-xs font-semibold">Google Play</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-white"
                >
                  <AppleLogo className="h-4 w-4 fill-white" />
                  <span className="text-sm font-semibold">App Store</span>
                </a>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-white"
                >
                  <GooglePlayLogo className="h-4 w-4" />
                  <span className="text-sm font-semibold">Google Play</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
