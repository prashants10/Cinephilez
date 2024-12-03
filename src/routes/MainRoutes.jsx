import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import Person from "../pages/Person/Person";
import ContentLayout from "../layout/ContentLayout";
import Error from "../pages/Error/Error";
import HomeLayout from "../layout/HomeLayout";
import TV from "../pages/TV/TV";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />}>
        <Route
          path=""
          element={<ContentLayout term="Movie" option="Popular" />}
        />
        <Route
          path="now_playing"
          element={<ContentLayout term="Movie" option="Now Playing" />}
        />
        <Route
          path="top_rated"
          element={<ContentLayout term="Movie" option="Top Rated" />}
        />
        <Route
          path="upcoming"
          element={<ContentLayout term="Movie" option="Upcoming" />}
        />
      </Route>
      <Route path="/tv" element={<TV />}>
        <Route path="" element={<ContentLayout term="TV" option="Popular" />} />
        <Route
          path="airing_today"
          element={<ContentLayout term="TV" option="Airing Today" />}
        />
        <Route
          path="on_the_air"
          element={<ContentLayout term="TV" option="On The Air" />}
        />
        <Route
          path="top_rated"
          element={<ContentLayout term="TV" option="Top Rated" />}
        />
      </Route>
      <Route
        path="/person"
        element={<Person term="People" option="Popular" />}
      />
      <Route
        path="*"
        element={
          <HomeLayout>
            <Error />
          </HomeLayout>
        }
      />
    </Routes>
  );
}

export default MainRoutes;
