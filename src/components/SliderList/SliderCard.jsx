function SliderCard({ item }) {
  console.log(item);
  return (
    <a className="w-[150px] min-w-[150px] rounded">
      <div>
        <img
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${item?.backdrop_path}.jpg`}
          className="rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="px-2 py-4">
        <h2 className=" font-bold">
          {item?.original_title || item?.name}
        </h2>
        <p>{item?.release_date || item?.first_air_date}</p>
      </div>
    </a>
  );
}

export default SliderCard;
