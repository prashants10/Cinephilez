function SliderListOptions({ item, handleChangeOption, option }) {
  return (
    <div
      className={`px-5 py-1 cursor-pointer font-semibold ${
        item === option
          ? "bg-[rgba(3,37,65,1)] text-[#1ed5a9] rounded-3xl"
          : "text-[[rgba(3,37,65,1)]"
      }`}
      onClick={() => handleChangeOption(item)}
    >
      {item}
    </div>
  );
}

export default SliderListOptions;
