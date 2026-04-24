"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Car, Shield, MapPin, Clock, Award, Users, ChevronRight } from "lucide-react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import Link from "next/link";

interface ServicesProps {
  showHeader?: boolean;
}

const services = [
  {
    icon: Car,
    title: "Beginner Lessons",
    description: "Never sat in a driver's seat? No problem. We start from zero and build your skills one session at a time.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Defensive Driving",
    description: "Learn to anticipate hazards before they become problems. Stay safe on Nigerian roads with proven techniques.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
  },
  {
    icon: MapPin,
    title: "Road Test Prep",
    description: "Mock tests that mirror the real exam. We make sure you pass on your first attempt — or we keep training you.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  },
  {
    icon: Clock,
    title: "Express Refresher",
    description: "Short on time? Our intensive courses get you road-ready fast without compromising safety.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
  },
  {
    icon: Award,
    title: "Corporate Training",
    description: "Fleet driver training for businesses. We help your team drive safer and reduce vehicle maintenance costs.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    icon: Users,
    title: "Instructor Certification",
    description: "Earn your driving instructor license. We train the next generation of safe drivers in Nigeria.",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&q=80",
  },
  {
    icon: Car,
    title: "Fleet Management",
    description: "Complete fleet solutions with monitoring, maintenance schedules, and driver performance tracking.",
    image: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Advanced Driving",
    description: "High-performance driving techniques for experienced drivers. Master advanced maneuvers and vehicle control.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
  },
];

export default function Services({ showHeader = true }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {showHeader && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={premiumStagger}
            className="text-center mb-16"
          >
            <motion.span variants={premiumFadeUp} className="inline-block font-semibold tracking-wider uppercase text-sm mb-4" style={{ color: 'var(--accent)' }}>
              Our Services
            </motion.span>
            <motion.h2 variants={premiumFadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
              Driving Courses That <span className="gradient-text-premium">Work Around You</span>
            </motion.h2>
            <motion.p variants={premiumFadeUp} className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>
              From your first time behind the wheel to defensive driving mastery — our certified instructors build your confidence at your own pace.
            </motion.p>
            <motion.div variants={premiumFadeUp} className="mt-8">
              <Link href="/pricing" className="btn-premium text-base px-8 py-4 inline-flex items-center gap-2">
                View Pricing
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <motion.div
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
                  opacity: 0.15,
                }}
              />
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent" />
              </div>

              <div className="relative p-6 h-full flex flex-col justify-end min-h-[320px]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--accent)', opacity: 1, border: '1px solid var(--accent)' }}
                >
                  <service.icon className="w-6 h-6" style={{ color: '#fff' }} />
                </motion.div>

                <motion.h3
                  className="text-xl font-bold mb-2 font-[family-name:var(--font-display)]"
                  style={{ color: 'var(--foreground)' }}
                  whileHover={{ color: 'var(--accent)', x: 4 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium mt-4 pt-4 group/link"
                  style={{ color: 'var(--accent)' }}
                >
                  <span>Learn more</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>

              <motion.div
                className="absolute top-4 right-4 w-20 h-20 rounded-full"
                style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}
                whileHover={{ scale: 1.5, opacity: 0.3 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)]"
              style={{ color: 'var(--foreground)' }}
            >
              Why <span className="gradient-text-premium">500+ Students</span> Chose Prestige
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, var(--accent), var(--gold))', filter: 'blur(10px)' }} />
                <div className="relative p-8 rounded-2xl border backdrop-blur-sm" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--accent)', opacity: 1, border: '1px solid var(--accent)' }}
                    >
                      <item.icon className="w-8 h-8" style={{ color: '#fff' }} />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-right"
                    >
                      <div className="text-3xl font-bold gradient-text-premium font-[family-name:var(--font-display)]">
                        {item.stat}
                      </div>
                      <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--foreground-muted)' }}>
                        {item.statLabel}
                      </div>
                    </motion.div>
                  </div>
                  <motion.h4
                    className="text-xl font-bold mb-2 font-[family-name:var(--font-display)]"
                    style={{ color: 'var(--foreground)' }}
                    whileHover={{ color: 'var(--accent)' }}
                  >
                    {item.title}
                  </motion.h4>
                  <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>
                    {item.description}
                  </p>
                  <motion.div
                    className="mt-4 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}