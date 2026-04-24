import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Areas from "@/components/Areas";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      {/* <Areas /> */}
      <CTA />
    </>
  );
}