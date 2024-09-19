import { Link } from "react-router-dom";

function IconHeader() {
  return (
    <div className="flex items-center h-[150px] gap-5  ">
      <div className="relative">
        <i className="fa-solid fa-bell cursor-pointer"></i>
        <span className="w-[20px] h-[20px] absolute bg-gray-500 rounded-full text-[10px] flex items-center justify-center top-[-4px] right-[-6px] text-gray-300">
          2
        </span>
      </div>
      <Link to="/login">
        <i className="fa-solid fa-user cursor-pointer"></i>
      </Link>
      <Link to="/liked">
        <i className="fa-solid fa-heart cursor-pointer"></i>
      </Link>
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
      </Link>
    </div>
  );
}

export default IconHeader;
