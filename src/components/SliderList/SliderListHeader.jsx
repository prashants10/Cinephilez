import SliderListOptions from "./SliderListOptions";

function SliderListHeader({ heading, options,active }) {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <div className="flex items-center mx-4 border rounded-3xl border-[rgba(3,37,65,1)] text-black">
        {options.map((option) => (
          <SliderListOptions key={option} option={option} active={active} />
        ))}
      </div>
    </div>
  );
}

export default SliderListHeader;
