import Navbar from "../components/Navbar/Navbar";
function HomeLayout({ children }) {
  console.log(children);
  return (
    <div>
      <Navbar />
      <div className="px-[6rem]">{children}</div>
    </div>
  );
}

export default HomeLayout;
