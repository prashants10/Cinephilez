import HomeLayout from "../../layout/HomeLayout";
import Banner from "../../components/Banner/Banner";
import SliderList from "../../components/SliderList/SliderList";

function Home() {
  return (
    <HomeLayout>
      <Banner />
      <SliderList heading="Trending" options={["Today", "This Week"]} active="Today" />
      <SliderList
        heading="What's Popular"
        options={["Streaming", "On TV", "For Rent", "In Theatres"]} active="On TV"
      />
      <SliderList
        heading="Free To Watch"
        options={["Movies","TV"]} active="TV"
      />
    </HomeLayout>
  );
}

export default Home;
