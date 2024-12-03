function Error() {
  return (
    <div className="py-[2rem]">
      <h2 className="font-semibold text-2xl mb-4">
        {"Oops! We can't find the page you're looking for"}
      </h2>
      <p>{"You tried to request a page that doesn't exist."}</p>
    </div>
  );
}

export default Error;
