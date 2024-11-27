function SliderCard() {
  return (
    <a className="w-[150px] min-w-[150px] rounded">
      <div>
        <img
          src="https://media.themoviedb.org/t/p/w220_and_h330_face/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg"
          className="rounded-lg"
        />
      </div>
      <div className="px-2 py-4">
        <h2 className=" font-bold">Conclave</h2>
        <p>Oct 25, 2024</p>
      </div>
    </a>
  );
}

export default SliderCard;
