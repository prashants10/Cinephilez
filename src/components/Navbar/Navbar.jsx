import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleMouseOver = (item) => {
    setActiveLink(item);
  };

  const handleMouseOut = () => {
    setActiveLink("");
  };

  return (
    <div className="w-full bg-[rgba(3,37,65,1)] h-[64px] flex items-center justify-center text-white">
      <div className="px-[40px] flex items-center justify-start w-full">
        <div className="flex items-center">
          <Link to="/" className="text-2xl tracking-[0.5rem] mr-[25px]">
            CINEPHILEZ
          </Link>
          <ul className="flex px-[0.5rem] gap-[2rem] font-semibold items-center">
            <li
              className="relative py-[20px]"
              onMouseOver={() => handleMouseOver("movie")}
              onMouseOut={handleMouseOut}
            >
              <a>Movies</a>
              {activeLink === "movie" && (
                <Dropdown
                  options={["Popular", "Now Playing", "Top Rated", "Upcoming"]}
                  category="Movie"
                />
              )}
            </li>
            <li
              className="relative py-[20px]"
              onMouseOver={() => handleMouseOver("tv")}
              onMouseOut={handleMouseOut}
            >
              <a>TV Shows</a>
              {activeLink === "tv" && (
                <Dropdown
                  options={[
                    "Popular",
                    "Airing Today",
                    "On The Air",
                    "Top Rated",
                  ]}
                  category="TV"
                />
              )}
            </li>
            <li
              className="relative py-[20px]"
              onMouseOver={() => handleMouseOver("person")}
              onMouseOut={handleMouseOut}
            >
              <a>People</a>
              {activeLink === "person" && (
                <Dropdown options={["Popular"]} category="person" />
              )}{" "}
            </li>
            <li className="relative py-[20px]">
              <a>More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
