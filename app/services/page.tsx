"use client";

import Services from "@/components/Services";
import Areas from "@/components/Areas";
import PageBanner from "@/components/PageBanner";

export default function ServicesPage() {
  return (
    <>
      <PageBanner 
        label="Our Services"
        title="Driving Courses That Work Around You"
        subtitle="From your first time behind the wheel to defensive driving mastery — our certified instructors build your confidence at your own pace."
        ctaText="See Pricing"
        ctaLink="/pricing"
      />
      <Services showHeader={false} />
      <Areas />
    </>
  );
}