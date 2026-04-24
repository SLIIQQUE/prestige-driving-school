"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "₦45,000",
    description: "8 sessions — ideal if you're brand new to driving",
    features: [
      "8 driving sessions",
      "2 hours per session",
      "Basic road rules course",
      "Mock test preparation",
      "Progress tracking",
    ],
    popular: false,
    color: "var(--primary)",
  },
  {
    name: "Standard",
    price: "₦75,000",
    description: "16 sessions — most students choose this",
    features: [
      "16 driving sessions",
      "2 hours per session",
      "Complete road rules course",
      "2 mock tests",
      "Road test booking assistance",
      "Priority scheduling",
    ],
    popular: true,
    color: "var(--accent)",
  },
  {
    name: "Premium",
    price: "₦120,000",
    description: "24 sessions + license processing",
    features: [
      "24 driving sessions",
      "2 hours per session",
      "Advanced defensive driving",
      "Unlimited mock tests",
      "Full license processing",
      "1-on-1 dedicated instructor",
      "Express road test booking",
    ],
    popular: false,
    color: "var(--gold)",
  },
];

function PricingCard({
  pkg,
  index,
}: {
  pkg: (typeof packages)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
      >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-6 py-2 text-white text-sm font-bold rounded-full shadow-lg"
            style={{
              background: `linear-gradient(to right, var(--accent), var(--primary))`,
              boxShadow: "0 0 20px var(--accent)",
            }}
          >
            <span className="flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Most Popular
            </span>
          </motion.div>
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 border ${pkg.popular ? "border-[var(--accent)]" : "border-[var(--border)]"}`}
        style={{ 
          backgroundColor: "var(--card)",
          boxShadow: isHovered ? `0 0 30px -10px ${pkg.color}40` : "none",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${pkg.color}22, ${pkg.color}11)`,
          }}
        />

        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"
            style={{ backgroundColor: pkg.color, opacity: 0.1 }}
          />
          <div
            className="absolute bottom-0 left-0 w-40 h-40 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"
            style={{ backgroundColor: pkg.color, opacity: 0.05 }}
          />
        </div>

        <div className="relative p-8">
          <h3
            className="text-2xl font-bold font-[family-name:var(--font-display)] mb-2"
            style={{ color: "var(--foreground)" }}
          >
            {pkg.name}
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span
              className="text-4xl font-bold font-[family-name:var(--font-display)]"
              style={{ color: "var(--foreground)" }}
            >
              {pkg.price}
            </span>
          </div>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--foreground-muted)" }}
          >
            {pkg.description}
          </p>

          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                className="flex items-center gap-3 text-sm"
                style={{ color: "var(--foreground-muted)" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.15 + i * 0.1,
                    type: "spring",
                    stiffness: 500,
                  }}
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)", opacity: 0.2 }}
                >
                  <Check
                    className="w-3 h-3"
                    style={{ color: "var(--accent)" }}
                  />
                </motion.div>
                {feature}
              </motion.li>
            ))}
          </ul>

            <Link
            href="/contact"
            className={`block text-center py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group ${
              pkg.popular ? "" : ""
            }`}
            style={{
              backgroundColor: pkg.popular
                ? "var(--foreground)"
                : "transparent",
              color: pkg.popular ? "var(--background)" : "var(--foreground)",
              border: pkg.popular ? "none" : "1px solid var(--border)",
            }}
          >
            <span className="relative z-10">Choose {pkg.name}</span>
            {pkg.popular && (
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
                }}
              />
            )}
          </Link>
        </div>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${pkg.color}15, transparent 60%)`,
              opacity: 1,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--accent),transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--gold),transparent_50%)] opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={premiumStagger}
          className="text-center mb-16"
        >
          <motion.span variants={premiumFadeUp} className="inline-block font-semibold tracking-wider uppercase text-sm mb-4" style={{ color: 'var(--accent)' }}>
            Pricing
          </motion.span>
          <motion.h2 variants={premiumFadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
            Simple, <span className="gradient-text-premium">Transparent Pricing</span>
          </motion.h2>
          <motion.p variants={premiumFadeUp} className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>
            No hidden fees. No surprises. Choose the package that matches your experience level — all include FRSC-certified instruction and progress tracking.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
            Need a custom package?{" "}
            <Link
              href="/contact"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Contact us
            </Link>{" "}
            for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}