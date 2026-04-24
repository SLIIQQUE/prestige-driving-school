"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";
import PageBanner from "@/components/PageBanner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0806 860 9291",
    href: "tel:+2348068609291",
  },
  {
    icon: Mail,
    label: "Email",
    value: "umohjohn770@gmail.com",
    href: "mailto:umohjohn770@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sabo Yaba, Lagos",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 8am - 6pm",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", package: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner
        subtitle="Ready to start driving? Fill the form and we'll call you within 24 hours. No commitment — just a conversation about your goals."
        title="Get Your License"
      />

      <section className="relative py-24 bg-[var(--background)] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute top-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={premiumStagger}
            >
              <motion.span variants={premiumFadeUp} className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-6">
                Contact Information
              </motion.span>
              <motion.h2
                variants={premiumFadeUp}
                className="text-3xl md:text-4xl font-bold text-foreground font-[var(--font-display)] mb-8"
              >
                Let's Get You <span className="gradient-text-premium">Licensed</span>
              </motion.h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.href}
                    variants={premiumFadeUp}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[rgba(230,57,70,0.1)] border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground-muted">{info.label}</div>
                      <div className="font-semibold text-foreground">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                variants={premiumFadeUp}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="font-bold text-foreground font-[var(--font-display)] mb-3">
                  Why Choose Prestige?
                </h3>
                <ul className="space-y-2 text-foreground-muted text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    FRSC Certified Instructors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    98% Pass Rate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Flexible Scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Progress Tracking
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-gold/10 rounded-2xl blur-xl" />
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-foreground font-[var(--font-display)] mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-foreground-muted focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-foreground-muted focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-foreground-muted focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Package Interest</label>
                      <select
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a package</option>
                        <option value="starter">Starter - ₦45,000</option>
                        <option value="standard">Standard - ₦75,000</option>
                        <option value="premium">Premium - ₦120,000</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground placeholder:text-foreground-muted focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your driving experience or any questions..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-premium w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Book My First Lesson
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>

                    {submitStatus === "success" && (
                      <p className="text-green-500 text-center mt-4">Thank you! We'll contact you soon.</p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}