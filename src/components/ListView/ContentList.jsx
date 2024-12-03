import ContentCard from "./ContentCard";
import PeopleCard from "./PeopleCard";

function ContentList({ list, term }) {
  return (
    <div
      className={`flex-wrap gap-8 grid ${
        term === "People" ? "grid-cols-4" : "grid-cols-5"
      }`}
    >
      {term !== "People" &&
        list &&
        list.map((item) => <ContentCard key={item.id} item={item} />)}
      {term === "People" &&
        list &&
        list.map((item) => <PeopleCard key={item.id} item={item} />)}
    </div>
  );
}

export default ContentList;
