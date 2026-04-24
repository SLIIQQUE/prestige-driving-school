"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Navigation, ChevronRight } from "lucide-react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import Link from "next/link";

const areas = [
  { name: "Sabo Yaba", distance: "0 km", lat: 6.5114, lng: 3.3792 },
  { name: "Yaba", distance: "2 km", lat: 6.5019, lng: 3.3841 },
  { name: "Akoka", distance: "3 km", lat: 6.4959, lng: 3.3894 },
  { name: "Fadeyi", distance: "4 km", lat: 6.4899, lng: 3.3861 },
  { name: "Mushin", distance: "5 km", lat: 6.4833, lng: 3.3667 },
  { name: "Ojuelegba", distance: "6 km", lat: 6.4783, lng: 3.3587 },
  { name: "Oshodi", distance: "7 km", lat: 6.4733, lng: 3.3411 },
  { name: "Surulere", distance: "8 km", lat: 6.4917, lng: 3.3429 },
  { name: "Ikeja", distance: "10 km", lat: 6.5961, lng: 3.342 },
  { name: "Lagos Island", distance: "12 km", lat: 6.4549, lng: 3.3966 },
];

export default function Areas() {
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--gold)]/5 rounded-full blur-3xl" />
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
            Areas We Serve
          </motion.span>
          <motion.h2 variants={premiumFadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
            Driving Lessons Across <span className="gradient-text-premium">Lagos</span>
          </motion.h2>
          <motion.p variants={premiumFadeUp} className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>
            We provide driving lessons at your home, office, or our location. Find a convenient spot near you.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--gold))",
              opacity: 0.05,
            }}
          />
          <motion.div
            whileHover={{ boxShadow: "0 0 40px -15px var(--accent)" }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl border backdrop-blur-sm p-8 overflow-hidden"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
              style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: "linear-gradient(135deg, var(--accent) 0%, transparent 100%)",
                      opacity: 0.1,
                    }}
                  />

                  <div className="relative flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "var(--accent)",
                        opacity: 1,
                        border: "1px solid var(--accent)",
                      }}
                    >
                      <MapPin
                        className="w-5 h-5"
                        style={{ color: "#fff" }}
                      />
                    </motion.div>
                    <div>
                      <motion.div
                        className="font-semibold text-sm font-[family-name:var(--font-display)]"
                        style={{ color: "var(--foreground)" }}
                        whileHover={{ color: "var(--accent)" }}
                      >
                        {area.name}
                      </motion.div>
                      <motion.div
                        className="text-xs"
                        style={{ color: "var(--foreground-muted)" }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {area.distance}
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <Navigation className="w-3 h-3 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                    style={{ backgroundColor: "var(--accent)" }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p style={{ color: "var(--foreground-muted)" }}>
            Don't see your area?{" "}
            <motion.a
              href="tel:+2348068609291"
              className="font-semibold"
              style={{ color: "var(--accent)" }}
              whileHover={{ scale: 1.05 }}
            >
              Call us
            </motion.a>{" "}
            — we serve locations across Lagos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}