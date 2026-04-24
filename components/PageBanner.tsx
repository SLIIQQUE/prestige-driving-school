"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  label?: string;
  ctaText?: string;
  ctaLink?: string;
}

const bannerImage = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80";

export default function PageBanner({ title, subtitle, label, ctaText, ctaLink }: PageBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/90 via-[var(--background)]/90 to-[var(--primary)]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--gold)', opacity: 0.1 }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={premiumStagger}
          className="max-w-6xl"
        >
          {label && (
            <motion.span 
              variants={premiumFadeUp} 
              className="inline-block font-semibold tracking-wider uppercase text-sm mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {label}
            </motion.span>
          )}
          <motion.h1
            variants={premiumFadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-display)] mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              variants={premiumFadeUp}
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'var(--foreground-muted)' }}
            >
              {subtitle}
            </motion.p>
          )}

          {ctaText && ctaLink && (
            <motion.div variants={premiumFadeUp} className="mt-8">
              <Link 
                href={ctaLink}
                className="btn-premium text-base px-8 py-4 inline-flex items-center gap-2"
              >
                {ctaText}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}