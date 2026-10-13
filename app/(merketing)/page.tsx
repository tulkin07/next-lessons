
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import BottomBanner from "@/components/BottomBanner";
import HeroBanner from "@/components/HeroBanner";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Bizda online dokoni"
// }


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero banner */}
      <HeroBanner />
      {/* Benefits */}
      <Benefits />
      {/* Categories */}
      <Categories />
      {/* Products */}
      <Products />
      {/* Bottom banner */}
      <BottomBanner />
    </main>
  );
}
