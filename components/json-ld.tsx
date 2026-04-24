"use client";

import { useEffect } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prestige Driving School",
  description: "Professional driving lessons in Lagos with FRSC certified instructors. Get your driver's license in 4-6 weeks.",
  url: "https://prestigedriving.com",
  telephone: "+2348068609291",
  email: "umohjohn770@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sabo Yaba",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.5014",
    longitude: "3.3792",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "₦₦₦",
  areaServed: {
    "@type": "City",
    name: "Lagos",
  },
  serviceType: "Driving Lessons",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to get a driver's license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most students complete their training and pass their test within 4-6 weeks with our intensive program.",
      },
    },
    {
      "@type": "Question",
      name: "Are your instructors FRSC certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our instructors are fully FRSC (Federal Road Safety Corps) certified with years of experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer flexible scheduling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer flexible scheduling that works around your availability, including early mornings and weekends.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide driving lessons across Lagos, including Sabo Yaba, Surulere, Ikeja, Yaba, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "What is your pass rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have a 98% first-attempt pass rate, one of the highest in Lagos.",
      },
    },
  ],
};

export default function JsonLd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    script.id = "localbusiness-schema";
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqJsonLd);
    faqScript.id = "faq-schema";
    document.head.appendChild(faqScript);

    return () => {
      const existingSchema = document.getElementById("localbusiness-schema");
      const existingFaqSchema = document.getElementById("faq-schema");
      if (existingSchema) existingSchema.remove();
      if (existingFaqSchema) existingFaqSchema.remove();
    };
  }, []);

  return null;
}