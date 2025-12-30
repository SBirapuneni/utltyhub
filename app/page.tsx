import { Hero } from "@/components/Hero";
import { UtilityCategories } from "@/components/UtilityCategories";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { AdUnit } from "@/components/AdUnit";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Ad Unit - Above Categories */}
      <div className="py-8 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit 
            adSlot="1234567890" 
            adFormat="horizontal"
            className="max-w-4xl mx-auto"
          />
        </div>
      </div>
      
      <UtilityCategories />
      
      {/* Ad Unit - Between Categories and Features */}
      <div className="py-8 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit 
            adSlot="1234567891" 
            adFormat="auto"
            className="max-w-4xl mx-auto"
          />
        </div>
      </div>
      
      <Features />
      <CallToAction />
    </>
  );
}
