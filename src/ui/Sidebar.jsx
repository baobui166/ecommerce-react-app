import { Link } from "react-router-dom";

const menu = [
  { name: "About us", to: "/about" },
  { name: "Trang chủ", to: "/" },
  { name: "Sale up to 80%", to: "/sale" },
  { name: "Sản phẩm", to: "/products" },
  { name: "Chăm sóc khách hàng", to: "/" },
  { name: "Tuyển dụng", to: "/" },
  { name: "Liên hệ", to: "/contact" },
];
function Sidebar() {
  return (
    <div className="flex items-center gap-2 text-[16px] sm:grid sm:grid-cols-3 sm:gap-1 md:grid-cols-4 lg:flex md:gap-2 md:place-items-center justify-between w-full text-black font-thin sm:text-xs md:px-20 px-2">
      {menu.map((item, index) => {
        return (
          <Link
            to={item.to}
            className={`relative group text-center ${
              item.name === "Sale up to 80%"
                ? "text-red-400 hover:text-red-600"
                : ""
            }`}
            key={index}
          >
            {item.name}
            {item.name === "Sale up to 80%" ? (
              <></>
            ) : (
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            )}
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
