import HomeLayout from "../../layout/HomeLayout";
import Banner from "../../components/Banner/Banner";
import SliderList from "../../components/SliderList/SliderList";

function Home() {
  return (
    <HomeLayout>
      <Banner />
      <SliderList
        heading="Trending"
        options={["Today", "This Week"]}
        term="trending"
      />
      <SliderList
        heading="Movies"
        options={["Now Playing", "Popular", "Top Rated", "Upcoming"]}
        term="movie"
      />
      <SliderList
        heading="TV Shows"
        options={["Airing Today", "On The Air", "Popular", "Top Rated"]}
        term="tv"
      />
    </HomeLayout>
  );
}

export default Home;
