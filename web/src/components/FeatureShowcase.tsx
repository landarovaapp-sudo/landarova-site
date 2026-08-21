"use client";

import Image from "next/image";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: "🔍",
    title: "Search homes, land & marketplace in one tab",
    body: "Switch between Homes, Land, Marketplace, and Artisans without leaving the app. Filter by location, price, and listing type.",
  },
  {
    icon: "✅",
    title: "Browse thousands of verified listings",
    body: "Every listing is checked before it goes live, so you spend less time guessing and more time deciding.",
  },
  {
    icon: "🧰",
    title: "Book verified artisans directly",
    body: "Find builders, plumbers, electricians, and more — see their portfolio and credentials before you reach out.",
  },
  {
    icon: "📍",
    title: "Track directions and recently viewed",
    body: "Landarover remembers what you've seen and helps you get there, so nothing gets lost in the search.",
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          What does Landarover include?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          One app for the entire property journey — search, verify, and
          connect with confidence.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 items-center gap-12 overflow-hidden lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative left-1/2 w-screen -translate-x-1/2 px-6 sm:px-10 lg:static lg:left-auto lg:w-full lg:max-w-md lg:translate-x-0 lg:scale-125 lg:px-0"
        >
          <Image
            src="/images/mockup-explore-tilted.webp"
            alt="Landarover Explore screen showing Homes, Land, Marketplace, and Artisans"
            width={1920}
            height={2264}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              className="group flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf0ff] text-xl transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <TransparencyBanner />
    </section>
  );
}

function TransparencyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mt-20 overflow-hidden rounded-3xl bg-foreground px-8 py-12 sm:px-14 sm:py-16"
    >
      <div className="grid grid-cols-1 items-center gap-10 overflow-hidden lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">
            TRANSPARENCY BUILT IN
          </span>
          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Always know who you&apos;re buying from
          </h3>
          <p className="mt-3 max-w-md text-white/70">
            Filter every listing by who&apos;s selling — owner, agent, agency,
            or developer — and how it&apos;s listed, on-site or off-site.
            No surprises, no middlemen you didn&apos;t ask for.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative left-1/2 w-screen -translate-x-1/2 px-6 sm:px-10 lg:static lg:left-auto lg:mx-auto lg:w-full lg:max-w-sm lg:translate-x-0 lg:scale-125 lg:px-0"
        >
          <Image
            src="/images/mockup-filter-sheets.webp"
            alt="Landarover filter sheets showing Listed by (Owner, Agent, Agency, Developer) and Listing method (On-site, Off-site)"
            width={1080}
            height={1350}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
