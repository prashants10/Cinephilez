import { useNavigate } from "react-router-dom";
function DropdownOption({ option, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    let route = category.toLowerCase();
    option = option.toLowerCase().replaceAll(" ", "_");
    if (option === "popular") {
      option = "";
    }
    if (option) {
      navigate(`${route}/${option}`);
    } else {
      navigate(`${route}`);
    }
  };

  return (
    <a className="px-4 py-1 hover:bg-gray-200" onClick={handleClick}>
      {option}
    </a>
  );
}

export default DropdownOption;
