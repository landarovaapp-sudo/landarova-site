"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export interface LegalSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            {intro}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">
        {/* Table of contents */}
        <nav className="hidden lg:block">
          <div className="sticky top-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-muted">
              On this page
            </p>
            <ul className="flex flex-col gap-1 border-l border-border">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      activeId === s.id
                        ? "border-trusted-blue font-semibold text-trusted-blue"
                        : "border-transparent text-muted hover:text-foreground"
                    }`}
                    style={{ marginLeft: "-1px" }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Content */}
        <div className="flex flex-col gap-14">
          {sections.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.05 }}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                {s.title}
              </h2>
              <div className="prose-legal mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                {s.body}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
