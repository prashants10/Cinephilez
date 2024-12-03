export default function getApiRoute(term, option) {
  let route = "";
  term = term.toLowerCase();
  option = option.toLowerCase();
  if (term === "trending") {
    if (option === "today") {
      route += "trending/all/day";
    } else {
      route += "trending/all/week";
    }
  } else if (term === "movie") {
    if (option === "now playing") {
      route += "movie/now_playing";
    } else if (option === "popular") {
      route += "movie/popular";
    } else if (option === "top rated") {
      route += "movie/top_rated";
    } else {
      route += "movie/upcoming";
    }
  } else if (term === "tv") {
    if (option === "airing today") {
      route += "tv/airing_today";
    } else if (option === "on the air") {
      route += "tv/on_the_air";
    } else if (option === "popular") {
      route += "tv/popular";
    } else {
      route += "tv/top_rated";
    }
  }
  else if(term === "people"){
    route += "person/popular"
  }
  return route;
}
