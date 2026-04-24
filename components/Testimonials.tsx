"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { premiumFadeUp, premiumStagger } from "@/lib/animations";

const testimonials = [
  {
    name: "Chidi O.",
    role: "Student",
    rating: 5,
    text: "Passed my test first try. The instructors are patient and professional — they made me feel comfortable from day one. Now I drive with confidence every day.",
    location: "Sabo Yaba",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Adaeze N.",
    role: "Student",
    rating: 5,
    text: "Was terrified of driving in Lagos traffic. Prestige's instructors showed me practical techniques that work. I drive to work every day now with zero fear.",
    location: "Lagos Island",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "Emeka A.",
    role: "Student",
    rating: 5,
    text: "Working full-time made scheduling tough. They accommodated my shifts perfectly. Got my license in 5 weeks — the mock tests were exactly like the real thing.",
    location: "Fadeyi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc4aac339?w=150&q=80",
  },
  {
    name: "Sarah T.",
    role: "Student",
    rating: 5,
    text: "The defensive driving course changed everything. I now anticipate hazards before they appear. Worth every naira — I feel safe on Nigerian roads.",
    location: "Surulere",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    name: "David K.",
    role: "Student",
    rating: 5,
    text: "They don't just teach you to pass a test — they teach you to be a safe driver for life. Professional, punctual, and genuinely invested in your success.",
    location: "Yaba",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
];

function TiltCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 20);
    y.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, var(--accent), var(--gold))`, opacity: 0.1 }} />
      
      <div className="relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
        <Quote className="w-12 h-12 absolute top-6 right-6" style={{ color: 'var(--accent)', opacity: 0.2 }} />
        
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5"
              style={{ color: 'var(--gold)', fill: 'var(--gold)' }}
            />
          ))}
        </div>

        <p className="mb-6 leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
          "{testimonial.text}"
        </p>

        <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="w-12 h-12 rounded-full object-cover"
            style={{ border: '2px solid var(--accent)' }}
          />
          <div>
            <div className="font-bold font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
              {testimonial.name}
            </div>
            <div className="text-sm" style={{ color: 'var(--foreground-muted)' }}>
              {testimonial.role}, {testimonial.location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        <div className="absolute top-20 left-10 w-60 h-60 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[var(--gold)]/5 rounded-full blur-3xl" />
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
            Testimonials
          </motion.span>
          <motion.h2 variants={premiumFadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
            What Our <span className="gradient-text-premium">Students Say</span>
          </motion.h2>
          <motion.p variants={premiumFadeUp} className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>
            Real students. Real licenses. Real confidence gained.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TiltCard key={`${currentIndex}-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)]"
              style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ 
                    width: currentIndex === i ? '32px' : '8px',
                    backgroundColor: currentIndex === i ? 'var(--accent)' : 'var(--border)'
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)]"
              style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}