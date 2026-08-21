"use client";

import { motion } from "motion/react";

const REASONS = [
  {
    icon: "⏱️",
    title: "Save time searching",
    body: "One search across homes, land, and marketplace instead of juggling five different apps and agents.",
  },
  {
    icon: "🛡️",
    title: "Verified listings & artisans",
    body: "Every listing and every artisan profile is checked, so you can move forward with confidence.",
  },
  {
    icon: "📍",
    title: "Built for how you actually search",
    body: "Location-first search, saved favorites, and directions built in — designed around real house-hunting habits.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Why choose Landarover?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Landarover is the most trusted way to find property in Nigeria.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {REASONS.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-border bg-surface p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf0ff] text-2xl">
              {reason.icon}
            </div>
            <h3 className="mt-5 font-semibold text-foreground">
              {reason.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {reason.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
