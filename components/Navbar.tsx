"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/ai", label: "AI Assistant", isNew: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b py-3"
          : "bg-transparent py-5"
      }`}
      style={{ 
        backgroundColor: scrolled ? 'rgba(var(--background), 0.8)' : 'transparent',
        borderColor: 'var(--border)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none'
      }}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold font-[family-name:var(--font-display)] relative group"
        >
          <span className="gradient-text-premium">Prestige</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: 'linear-gradient(to right, var(--accent), var(--gold))' }} />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors relative group flex items-center gap-1 ${isActive ? 'active-nav' : ''}`}
                style={{ 
                  color: isActive ? 'var(--accent)' : (link.isNew ? 'var(--gold)' : 'var(--foreground-muted)')
                }}
              >
                {link.label}
                {link.isNew && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--gold)] text-black font-bold">
                    NEW
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1 left-4 w-4 h-0.5" style={{ backgroundColor: link.isNew ? 'var(--gold)' : 'var(--accent)' }} />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-4 w-0 h-0.5 transition-all duration-300 group-hover:w-4" style={{ backgroundColor: link.isNew ? 'var(--gold)' : 'var(--accent)' }} />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+2348068609291"
            className="flex items-center gap-2 text-sm font-medium transition-colors group"
            style={{ color: 'var(--foreground-muted)' }}
          >
            <Phone className="w-4 h-4 transition-transform" style={{ color: 'var(--accent)' }} />
            <span>0806 860 9291</span>
          </a>
          <Link
            href="/contact"
            className="btn-premium text-sm px-6 py-2.5"
          >
            Get Licensed
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          style={{ color: 'var(--foreground)' }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t"
            style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
          >
            <div className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-base font-medium transition-colors ${isActive ? 'active-nav' : ''}`}
                      style={{ color: isActive ? 'var(--accent)' : 'var(--foreground-muted)' }}
                    >
                      {link.label}
                      {link.isNew && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--gold)] text-black font-bold">
                          NEW
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 border-t"
                style={{ borderColor: 'var(--border)' }}
              >
                <a
                  href="tel:+2348068609291"
                  className="flex items-center gap-2 py-2 text-base font-medium"
                  style={{ color: 'var(--foreground-muted)' }}
                >
                  <Phone className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  0806 860 9291
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-premium text-center block mt-4 text-sm"
                >
                  Get Licensed
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}