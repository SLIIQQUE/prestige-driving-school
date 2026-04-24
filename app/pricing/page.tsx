"use client";

import Pricing from "@/components/Pricing";
import PageBanner from "@/components/PageBanner";

export default function PricingPage() {
  return (
    <>
      <PageBanner 
        label="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No surprises. Choose the package that matches your experience level — all include FRSC-certified instruction and progress tracking."
        ctaText="Book Now"
        ctaLink="/contact"
      />
      <Pricing />
    </>
  );
}