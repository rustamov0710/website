import Hero from "@/components/Hero/Hero";
import Login from "@/components/Login/Login";
import ShopDeals from "@/components/ShopDeals/ShopDeals";
import Statistic from "@/components/Statistic/Statistic";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ShopDeals/>
      <Login/>
      <Statistic/>
    </div>
  );
}
