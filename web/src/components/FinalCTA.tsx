"use client";

import { motion } from "motion/react";
import StoreBadges from "./StoreBadges";

export default function FinalCTA() {
  return (
    <section className="bg-card-alt px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Find your next property today
        </h2>
        <p className="mt-3 text-muted">
          Download Landarover and start searching homes, land, and
          marketplace listings near you.
        </p>
        <div className="mt-8 flex justify-center">
          <StoreBadges align="center" />
        </div>
      </motion.div>
    </section>
  );
}
