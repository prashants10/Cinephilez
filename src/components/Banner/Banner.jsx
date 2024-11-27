function Banner() {
  return (
    <div className="min-h-[300px] bg-blue-400 bg-[url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,00192f,00baff)/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg);')] bg-cover bg-center text-white">
      <div className="flex flex-col py-[30px] px-[40px] justify-center min-h-[300px] gap-10">
        <div>
          <h2 className="text-5xl font-bold">Welcome.</h2>
          <h3 className="text-xl font-bold">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="w-full">
          <input
            className="rounded-l-3xl px-4 py-2 w-[90%] outline-none text-[rgba(0,0,0,.5)]"
            type="text"
            spellCheck={false}
            placeholder="Search for a movie, tv show, person......"
          />
          <button className="rounded-r-3xl bg-gradient-to-r from-tmdbLightGreen to-tmdbLightBlue px-2 py-2 w-[10%]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
