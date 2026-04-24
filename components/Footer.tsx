"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Star, Sparkles } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#beginner", label: "Beginner Lessons" },
    { href: "/services#defensive", label: "Defensive Driving" },
    { href: "/services#roadtest", label: "Road Test Prep" },
    { href: "/services#flexible", label: "Flexible Scheduling" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold gradient-text-premium font-[family-name:var(--font-display)]">
                Prestige
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
              Professional driving school in Sabo Yaba, Lagos. 
              Get licensed with confidence through expert instruction.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                <Star className="w-4 h-4" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                <Star className="w-4 h-4" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                <Star className="w-4 h-4" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                <Star className="w-4 h-4" style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
              </div>
              <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>5.0 Rating</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:transition-colors"
                    style={{ color: 'var(--foreground-muted)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:transition-colors"
                    style={{ color: 'var(--foreground-muted)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-[family-name:var(--font-display)]" style={{ color: 'var(--foreground)' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <Phone className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>0806 860 9291</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <Mail className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>umohjohn770@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <MapPin className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Sabo Yaba, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(230, 57, 70, 0.1)', border: '1px solid var(--accent)' }}>
                  <Clock className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Mon - Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-[family-name:var(--font-display)] flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <Sparkles className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              AI Assistant
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/ai" className="text-sm hover:transition-colors" style={{ color: 'var(--foreground-muted)' }}>
                  AI Chat Assistant
                </Link>
              </li>
              <li>
                <Link href="/ai?tab=recommend" className="text-sm hover:transition-colors" style={{ color: 'var(--foreground-muted)' }}>
                  Package Recommender
                </Link>
              </li>
              <li>
                <Link href="/ai?tab=instructor" className="text-sm hover:transition-colors" style={{ color: 'var(--foreground-muted)' }}>
                  Virtual Instructor
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/ai" 
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  <Sparkles className="w-4 h-4" />
                  Try AI Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>
              © {new Date().getFullYear()} Prestige Driving School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm hover:transition-colors" style={{ color: 'var(--foreground-muted)' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:transition-colors" style={{ color: 'var(--foreground-muted)' }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}