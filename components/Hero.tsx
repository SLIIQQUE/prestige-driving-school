"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "98%", label: "Pass Rate" },
  { value: "5★", label: "Average Rating" },
  { value: "10+", label: "Years Experience" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0">
          <SmokeBackground smokeColor="#6366f1" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)]/60 via-[var(--background)]/80 to-[var(--background)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/30 to-[var(--background)]" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={premiumStagger}
        className="container-custom relative z-10 pt-32 pb-12"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={premiumFadeUp} className="mb-8 hidden sm:block">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              FRSC Certified Instructors
            </span>
          </motion.div>

          <motion.h1
            variants={premiumFadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-display)] leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Master the Road with{" "}
            <span className="relative inline-block">
              <span className="gradient-text-premium">Confidence</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="url(#gold-gradient)" strokeWidth="3" fill="none" />
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="50%" stopColor="var(--gold)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={premiumFadeUp}
            className="text-lg md:text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Get your driver's license in 4-6 weeks with lessons designed around your schedule. Join 500+ students who've passed on their first attempt.
          </motion.p>

          <motion.div
            variants={premiumFadeUp}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          >
            <Link href="/contact" className="btn-premium text-base px-10 py-4 inline-flex items-center gap-2 group">
              Get Your License
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="/pricing"
              className="px-10 py-4 border border-[var(--border)] rounded-full font-semibold text-[var(--foreground)] hover:bg-[var(--muted)]/20 transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm"
            >
              View Pricing
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-[var(--border)] rounded-full font-semibold text-[var(--foreground)] hover:bg-[var(--muted)]/20 transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm"
            >
              View Packages
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            variants={premiumFadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[var(--border)]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={premiumFadeUp}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-premium font-[family-name:var(--font-display)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-xs text-[var(--foreground-muted)] uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-[var(--foreground-muted)] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--background)] to-transparent z-20"
      />
    </section>
  );
}