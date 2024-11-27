import SliderCard from "./SliderCard";
import SliderListHeader from "./SliderListHeader";

function SliderList({ heading, options, active }) {
  return (
    <div
      className={`py-8 scroller relative ${
        heading === "Trending" &&
        "bg-[url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')] bg-no-repeat bg-bottom"
      }`}
    >
      <div className="px-8">
        <SliderListHeader heading={heading} options={options} active={active} />
      </div>
      <div className="flex gap-4 overflow-x-scroll px-8 transition-all">
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
    </div>
  );
}

export default SliderList;
