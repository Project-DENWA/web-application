import PopularCategories from "@/app/(marketing)/_components/PopularCategories/PopularCategories";
import PromoSection from "@/app/(marketing)/_components/PromoSection/PromoSection";
import LeaderBoard from "@/app/(marketing)/_components/LeaderBoard/LeaderBoard";
export default function Home() {
  return (
    <main className="bg-light-main-bg-main dark:bg-dark-main-bg-main">
      <PromoSection/>
      <PopularCategories/>
      <LeaderBoard/>
    </main>
  );
}
