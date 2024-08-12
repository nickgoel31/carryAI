export const metadata = {
  title: "Home - CarryAI",
  description: "Page description",
};

import Hero from "./_components/hero-home";
import BusinessCategories from "./_components/business-categories";
import FeaturesPlanet from "./_components/features-planet";
import Cta from "./_components/cta";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <BusinessCategories />
      {/* {/* <FeaturesPlanet /> */}
      <Cta />
    </div>
  );
}