import { useEffect, useRef } from "react";
import IconHeader from "./IconHeader";
import { Link } from "react-router-dom";

function Search({ showSearch, setShowSearch }) {
  const searchRef = useRef(null);
  // Hàm để xử lý sự kiện click ngoài component
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false); // Đóng component nếu click ngoài component
    }
  };
  // Sử dụng useEffect để lắng nghe sự kiện click bên ngoài
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`absolute mt-[-15px] showSearch top-0 left-0 right-0 bg-white shadow-lg p-4 flex items-center justify-between ${
        showSearch ? "showSearch" : "closeSearch"
      }`}
    >
      <div className="fixed top-0 bottom-0 right-0 left-0 opacity-5"></div>
      <div className="flex w-full  items-center justify-between  top-0 right-0 left-0">
        <Link to="/">
          <img
            src="https://theme.hstatic.net/200000260587/1001225543/14/logo.png?v=294"
            alt="logo"
          />
        </Link>
        <div
          ref={searchRef}
          className="w-[400px] flex items-center gap-2 border rounded-full px-4"
        >
          <div className="flex-1">
            <input type="text" className="border-none outline-none w-full" />
          </div>
          <i className="fa-solid fa-magnifying-glass text-2xl"></i>
        </div>
        <IconHeader />
      </div>
    </div>
  );
}

export default Search;
