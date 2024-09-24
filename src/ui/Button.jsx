import { Link } from "react-router-dom";

function Button({
  text,
  hover = false,
  size = "medium",
  dropdown = false,
  border,
  type,
  link,
  func,
  disabled,
}) {
  const Type = link ? Link : "button";

  return (
    <Type
      onClick={func}
      disabled={disabled}
      to={link ? link : ""}
      type={type}
      className={`${hover} ${
        size === "lg" ? "md:px-12 py-1 px-2" : "px-4 py-2"
      } relative overflow-hidden w-full cursor-pointer text-black flex items-center justify-center gap-3 hover:text-white bg-white group text-xs ${
        border ? "border" : ""
      }`}
    >
      <span className="relative z-10 cursor-pointer">{text}</span>
      <span className="absolute inset-0 bg-black transform scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
      {dropdown && (
        <i className="fa-solid fa-circle-chevron-down relative z-10"></i>
      )}
    </Type>
  );
}

export default Button;
