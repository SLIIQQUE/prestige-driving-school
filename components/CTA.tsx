"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, Bot } from "lucide-react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import Link from "next/link";

const ctaImage = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        <img
          src={ctaImage}
          alt="Driving"
          loading="lazy"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--background), var(--background))', opacity: 0.92 }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)', opacity: 0.5 }} />
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
            Get Started Today
          </motion.span>
          <motion.h2 variants={premiumFadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
            Ready to Start Your <span className="gradient-text-premium">Journey</span>?
          </motion.h2>
          <motion.p variants={premiumFadeUp} className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>
            Book your first lesson this week and get your license in 4-6 weeks. Our certified instructors are ready when you are.
          </motion.p>
          <motion.div variants={premiumFadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="btn-premium text-base px-8 py-4 inline-flex items-center gap-2">
              Get Your License
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+2348068609291"
              className="px-8 py-4 border rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:bg-[var(--accent)] hover:border-[var(--accent)]"
              style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(to right, var(--accent), var(--gold))', opacity: 0.1 }} />
          <div className="relative rounded-2xl p-8 border backdrop-blur-sm" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <Phone className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Phone</div>
                  <div className="font-semibold" style={{ color: 'var(--foreground)' }}>0806 860 9291</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <Mail className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Email</div>
                  <div className="font-semibold" style={{ color: 'var(--foreground)' }}>umohjohn770@gmail.com</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <MapPin className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Location</div>
                  <div className="font-semibold" style={{ color: 'var(--foreground)' }}>Sabo Yaba, Lagos</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <Clock className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Hours</div>
                  <div className="font-semibold" style={{ color: 'var(--foreground)' }}>Mon - Sat: 8am - 6pm</div>
                </div>
              </motion.div>
            </div>

            <Link
              href="/ai"
              className="mt-6 flex items-center gap-3 p-4 rounded-xl border transition-all hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--accent)' }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Assistant
                </div>
                <div className="text-sm text-white/70">Get instant answers 24/7</div>
              </div>
              <ArrowRight className="w-5 h-5 text-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}