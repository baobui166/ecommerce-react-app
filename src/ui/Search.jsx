import { useEffect, useRef } from "react";
import IconHeader from "./IconHeader";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/contextAuth";
import { useSearch } from "../features/search/useSearch";

function Search({ showSearch, setShowSearch }) {
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { search, setSearch } = useAuth();
  const { mutate } = useSearch();

  const handleSearch = () => {
    mutate(search);
    navigate(`/search/${search}`);
    setShowSearch(false);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`absolute mt-[-15px] showSearch top-0 left-0 right-0 bg-white shadow-lg p-4  ${
        showSearch ? "showSearch " : "closeSearch"
      }`}
    >
      <div
        className="fixed top-0 bottom-0 right-0 left-0 opacity-5 invisible z-[5] blur-sm
      "
      ></div>
      <div
        ref={searchRef}
        className="flex w-full items-center z-10 justify-center md:justify-between top-0 right-0 left-0"
      >
        <Link to="/" className="hidden md:block">
          <img
            src="https://theme.hstatic.net/200000260587/1001225543/14/logo.png?v=294"
            alt="logo"
          />
        </Link>
        <div className="w-[400px] flex items-center gap-2 border rounded-full px-4">
          <div className="flex-1">
            <input
              type="text"
              className="border-none outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <i
            className="fa-solid fa-magnifying-glass text-2xl cursor-pointer"
            onClick={handleSearch}
          ></i>
        </div>
        <div className="hidden md:block">
          <IconHeader />
        </div>
      </div>
    </div>
  );
}

export default Search;
