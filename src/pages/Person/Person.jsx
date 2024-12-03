import HomeLayout from "../../layout/HomeLayout";
import ContentLayout from "../../layout/ContentLayout";

function Person({ term, option }) {
  return (
    <HomeLayout>
      <div className="py-[2rem]">
        <h1 className="capitalize font-semibold text-2xl">Popular People</h1>
        <ContentLayout term={term} option={option} />
      </div>{" "}
    </HomeLayout>
  );
}

export default Person;
