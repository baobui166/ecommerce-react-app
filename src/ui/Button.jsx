function Button({ text, hover = false, size = "medium", dropdown = false }) {
  return (
    <button
      className={`${hover} ${
        size === "lg" ? "px-6 py-2" : "px-4 py-2"
      } relative overflow-hidden text-black hover:text-white bg-white border border-white group`}
    >
      {text}
      <span className="absolute inset-0 bg-black transform scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
      <span className="relative z-10">Hover me</span>
      {dropdown && <i className="fa-solid fa-circle-chevron-down"></i>}
    </button>
  );
}

export default Button;
