import DropdownOption from "./DropdownOption";

function Dropdown({ options, category }) {
  return (
    <div className="flex flex-col absolute text-black bg-white font-normal text-sm py-1 rounded-md w-[130px] bottom mt-2 -left-[10px] shadow-lg border border-[rgba(33,37,41,0.2)]">
      {options &&
        options.map((option) => (
          <DropdownOption key={option} option={option} category={category} />
        ))}
    </div>
  );
}

export default Dropdown;
