"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SUPPORT_EMAIL = "support@mail.landarover.com";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is Landarover free to use?",
    a: "Yes, browsing listings, searching for property, and messaging is free. Some premium features for agents and sellers may require a subscription.",
  },
  {
    q: "How are listings verified?",
    a: "Our team reviews new listings and artisan profiles before they go live, and we monitor reports from the community to keep the marketplace trustworthy.",
  },
  {
    q: "How do I know who I'm buying from?",
    a: "Every listing shows who posted it — Owner, Agent, Agency, or Developer — and whether it's listed on-site or off-site, so you always know exactly who you're dealing with before you reach out.",
  },
  {
    q: "Can I list my own property?",
    a: "Yes. Individual sellers, agencies, and artisans can all create listings directly from the app.",
  },
  {
    q: "Is my personal information safe?",
    a: "We only share the contact details needed to complete an enquiry, and you control what's visible on your public profile. See our Privacy Policy for the full details.",
  },
  {
    q: "How do I find artisans I can trust?",
    a: "Artisan profiles include portfolio photos, verified credentials, and reviews from past clients, so you can compare before booking.",
  },
  {
    q: "Which cities does Landarover cover?",
    a: "We're starting with major Nigerian cities including Lagos and Abuja, with more locations added as we grow.",
  },
  {
    q: "How do I contact support?",
    a: (
      <>
        Email us at{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-medium text-trusted-blue hover:underline"
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        and our team will get back to you as soon as possible.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-muted">
          Can&apos;t find your answer? Reach out and we&apos;ll help.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col gap-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.04 }}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-foreground">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-muted"
                >
                  ▾
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
