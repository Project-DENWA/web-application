import PopularCategories from "./_components/PopularCategories/PopularCategories";
import PromoSection from "./_components/PromoSection/PromoSection";

export default function Home() {
  return (
    <main className="bg-light-main-bg-main dark:bg-dark-main-bg-main">
      <PromoSection/>
      <PopularCategories/>
    </main>
  );
}
