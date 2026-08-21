"use client";

import Image from "next/image";
import { motion } from "motion/react";

const FEATURED = [
  {
    src: "/images/featured-home-exterior.webp",
    title: "Homes for sale & rent",
    caption: "Verified listings across Lagos, Abuja, and beyond",
  },
  {
    src: "/images/featured-artisan-builder.webp",
    title: "Trusted artisans",
    caption: "Book vetted builders, plumbers, and electricians",
  },
  {
    src: "/images/featured-marketplace-vendor.webp",
    title: "Marketplace",
    caption: "Cement, tools, and building supplies nearby",
  },
  {
    src: "/images/featured-building-products.webp",
    title: "Building products",
    caption: "Compare materials and prices before you buy",
  },
  {
    src: "/images/featured-apartment-interior.webp",
    title: "Move-in ready homes",
    caption: "Browse real interiors before you book a viewing",
  },
];

export default function FeaturedGrid() {
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
          Everything property, in one app
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          From finding a home to hiring the artisan who fixes it up.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {FEATURED.slice(0, 3).map((item, i) => (
          <FeaturedCard key={item.title} item={item} index={i} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {FEATURED.slice(3).map((item, i) => (
          <FeaturedCard key={item.title} item={item} index={i + 3} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({
  item,
  index,
}: {
  item: (typeof FEATURED)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-300 group-hover:from-black/85" />
      <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
        <p className="text-lg font-bold text-white">{item.title}</p>
        <p className="mt-1 text-sm text-white/85">{item.caption}</p>
      </div>
    </motion.div>
  );
}
