import axios from "axios";
import { useState, useEffect } from "react";
import SliderCard from "./SliderCard";
import SliderListHeader from "./SliderListHeader";
import getApiRoute from "../../utils/getApiRoute";

function SliderList({ heading, options, term }) {
  const [list, setList] = useState([]);
  const [option, setOption] = useState(options[0]);

  const fetchData = async () => {
    const data = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/${getApiRoute(term, option)}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    setList(data?.data?.results);
  };

  const handleChangeOption = (option) => {
    setOption(option);
  };

  useEffect(() => {
    fetchData();
  }, [option]);

  return (
    <div
      className={`py-8 scroller relative ${
        heading === "Trending" &&
        "bg-[url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')] bg-no-repeat bg-bottom"
      }`}
    >
      <div className="px-8">
        <SliderListHeader
          heading={heading}
          options={options}
          handleChangeOption={handleChangeOption}
          option={option}
        />
      </div>
      <div className="flex gap-4 overflow-x-scroll px-8 transition-all">
        {list && list.map((item) => <SliderCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default SliderList;
