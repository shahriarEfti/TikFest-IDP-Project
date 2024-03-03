import Hero from "@/components/Hero";
import MusicFestival from "@/components/MusicFestival";
import TrendingCategories from "./../components/TrendingCategories";
import ComingEvents from "@/components/ComingEvents";
import MakeOwnEvent from "@/components/MakeOwnEvent";
import NewEra from "@/components/NewEra";

const page = () => {
  return (
    <>
      <Hero />
      <MusicFestival />
      <TrendingCategories />
      <ComingEvents />
      <MakeOwnEvent />
      <NewEra />
    </>
  );
};

export default page;
