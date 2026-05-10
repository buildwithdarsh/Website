import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import OpenSource from "@/components/sections/OpenSource";
import Currently from "@/components/sections/Currently";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Currently />
      <OpenSource />
      <CTA />
    </>
  );
}
