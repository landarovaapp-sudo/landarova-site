"use client";

import Image from "next/image";
import { motion } from "motion/react";
import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.5fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground/70 shadow-sm">
              <span>🏠</span>
              <span>Trusted by home seekers across Nigeria</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:whitespace-nowrap lg:text-5xl xl:text-6xl">
              Find Your Home&apos;s
              <br />
              DNA and More
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Search homes and land, shop the marketplace, and book verified
              artisans — all from one app you can trust.
            </p>

            <div className="mt-8">
              <StoreBadges />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-none scale-150 sm:scale-125 lg:-mr-32 lg:scale-125"
          >
            <Image
              src="/images/mockup-homes-marketplace-3up.webp"
              alt="Landarover app screens showing home search, explore hub, and marketplace"
              width={1920}
              height={1920}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
