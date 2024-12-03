function PeopleCard({ item }) {
  const known_for = item?.known_for.map(
    (known_for) => known_for?.title || known_for?.name
  );
  return (
    <a className="shadow-sm border border-[rgba(33,37,41,0.2)] rounded-lg">
      {" "}
      <div>
        <img
          src={`https://media.themoviedb.org/t/p/w235_and_h235_face/${item?.profile_path}.jpg`}
          className="rounded-t-lg w-[100%] max-h-[340px]"
          loading="lazy"
        />
      </div>
      <div className="px-2 py-4">
        <h2 className=" font-bold"> {item?.name}</h2>
        <p className="text-[rgba(0,0,0,.6)] text-sm">{known_for?.join(",")}</p>
      </div>
    </a>
  );
}

export default PeopleCard;
