import axios from "axios";
import { useEffect, useState } from "react";
import ContentList from "../components/ListView/ContentList";
import getApiRoute from "../utils/getApiRoute";
// import PeopleList from "../components/ListView/PeopleList";

function ContentLayout({ term, option }) {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/${getApiRoute(term, option)}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    setList(data?.data?.results);
  };

  useEffect(() => {
    fetchData();
  }, [option, term]);

  return (
    <div className="py-4">
      <ContentList list={list} term={term}/>
      {/* {term === "People" ? (
        <PeopleList list={list} />
      ) : (
      )} */}
    </div>
  );
}

export default ContentLayout;
