import { Hero } from "@/components/Hero";
import { UtilityCategories } from "@/components/UtilityCategories";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <UtilityCategories />
      <Features />
      <CallToAction />
    </>
  );
}
