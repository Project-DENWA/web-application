import PopularCategories from "@/app/[locale]/(marketing)/_components/PopularCategories/PopularCategories";
import PromoSection from "@/app/[locale]/(marketing)/_components/PromoSection/PromoSection";
import LeaderBoard from "@/app/[locale]/(marketing)/_components/LeaderBoard/LeaderBoard";
import WhyUs from "@/app/[locale]/(marketing)/_components/WhyUs/WhyUs";
export default function Home() {
  return (
    <main className="bg-light-main-bg-main dark:bg-dark-main-bg-main">
      <PromoSection/>
      <PopularCategories/>
      <LeaderBoard/>
      <WhyUs/>
    </main>
  );
}
