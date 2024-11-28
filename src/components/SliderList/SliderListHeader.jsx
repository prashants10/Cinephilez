import SliderListOptions from "./SliderListOptions";

function SliderListHeader({ heading, options, handleChangeOption, option }) {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <div className="flex items-center mx-4 border rounded-3xl border-[rgba(3,37,65,1)] text-black">
        {options.map((item) => (
          <SliderListOptions
            key={item}
            item={item}
            handleChangeOption={handleChangeOption}
            option={option}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderListHeader;
