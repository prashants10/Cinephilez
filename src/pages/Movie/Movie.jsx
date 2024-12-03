import { Outlet, useLocation } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";

function Movie() {
  const location = useLocation();
  let option = location.pathname.split("/")[2];
  if (option) {
    option = option.replaceAll("_", " ");
  } else {
    option = "Popular";
  }
  
  return (
    <HomeLayout>
      <div className="py-[2rem]">
        <h1 className="capitalize font-semibold text-2xl">{option} Movies</h1>
        <Outlet />
      </div>
    </HomeLayout>
  );
}

export default Movie;