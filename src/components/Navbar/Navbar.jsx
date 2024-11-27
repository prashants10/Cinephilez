function Navbar() {
  return (
    <div className="w-full bg-[rgba(3,37,65,1)] h-[64px] flex items-center justify-center text-white">
      <div className="px-[40px] flex items-center justify-start w-full">
        <div className="flex items-center">
          <a className="text-2xl tracking-[0.5rem] mr-[25px]">CINEPHILEZ</a>
          <ul className="flex px-[0.5rem] gap-[2rem] font-semibold">
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>TV Shows</a>
            </li>
            <li>
              <a>People</a>
            </li>
            <li>
              <a>More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
