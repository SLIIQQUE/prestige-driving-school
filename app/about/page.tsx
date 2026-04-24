"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Users, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "98%", label: "Pass Rate" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Instructors" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every lesson, ensuring each student reaches their full potential.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "All our instructors are FRSC certified with years of experience in defensive driving.",
  },
  {
    icon: Users,
    title: "Student-Centered",
    description: "Every student is unique. We tailor our teaching approach to your learning style and pace.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We value your time. Our lessons start on time and we work around your schedule.",
  },
];

const timeline = [
  { year: "2015", title: "Founded", description: "Started with a small team of 3 instructors in Sabo Yaba" },
  { year: "2018", title: "Expansion", description: "Expanded to serve 10+ areas across Lagos" },
  { year: "2020", title: "500+ Students", description: "Reached milestone of 500+ successful graduates" },
  { year: "2024", title: "Premium Status", description: "Recognized as one of the top driving schools in Lagos" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <PageBanner 
        title="Driving Success Since 2015"
        subtitle="We've helped 500+ students get their driver's license and gain confidence on Nigerian roads. Our mission: zero accidents, one confident driver at a time."
        label="About Us"
        ctaText="Start Learning"
        ctaLink="/contact"
      />

      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
          <div className="absolute top-20 -left-20 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)', opacity: 0.05 }} />
          <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--gold)', opacity: 0.05 }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={premiumStagger}
            className="grid md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={premiumFadeUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text-premium font-[family-name:var(--font-display)] mb-2">
                  {stat.value}
                </div>
                <div className="uppercase tracking-wider text-sm" style={{ color: 'var(--foreground-muted)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={premiumStagger}
            className="text-center mb-16"
          >
            <motion.span variants={premiumFadeUp} className="inline-block font-semibold tracking-wider uppercase text-sm mb-4" style={{ color: 'var(--accent)' }}>
              Our Values
            </motion.span>
            <motion.h2
              variants={premiumFadeUp}
              className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]"
              style={{ color: 'var(--foreground)' }}
            >
              What Drives <span className="gradient-text-premium">Us</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border transition-all duration-300"
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--accent)', opacity: 0.1, border: '1px solid var(--accent)' }}>
                  <value.icon className="w-7 h-7" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--accent),transparent_50%)] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--gold),transparent_50%)] opacity-10" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={premiumStagger}
            className="text-center mb-16"
          >
            <motion.span variants={premiumFadeUp} className="inline-block font-semibold tracking-wider uppercase text-sm mb-4" style={{ color: 'var(--accent)' }}>
              Our Journey
            </motion.span>
            <motion.h2
              variants={premiumFadeUp}
              className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]"
              style={{ color: 'var(--foreground)' }}
            >
              Milestones Over <span className="gradient-text-premium">Time</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--gold)] to-[var(--accent)] hidden md:block" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 hidden md:block" />
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: 'var(--accent)', boxShadow: `0 0 20px var(--accent)` }} />
                <div className="flex-1">
                  <div className="p-6 rounded-2xl border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                    <div className="text-3xl font-bold gradient-text-premium font-[family-name:var(--font-display)] mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
              Ready to Get Licensed?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--foreground-muted)' }}>
              Join 500+ students who now drive with confidence. Book your first lesson today.
            </p>
            <Link href="/contact" className="btn-premium text-base px-10 py-4 inline-flex items-center gap-2">
              Book Your First Lesson
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}