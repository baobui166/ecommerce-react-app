import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../context/contextAuth";
import { useSearch } from "./useSearch";
import NotFound from "./NotFound";
import CardProduct from "../product/CardProduct";

function SearchContainer() {
  const { search, setSearch } = useAuth();
  const { query } = useParams();
  const navigate = useNavigate();
  const { data, mutate: searchFunc, isLoading, error } = useSearch();

  console.log(data);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    searchFunc(search.trim());
  };

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-red-800">{error.message}</span>
      </div>
    );
  }

  return (
    <div className="w-[80%] mt-10 mx-auto">
      <h1 className="uppercase text-black font-bold text-2xl text-center">
        Tìm kiếm
      </h1>
      <div className="my-5">
        {data?.products.length <= 0 && <NotFound query={query} />}
      </div>
      <div>
        <div className="border border-black pl-2 w-[60%] mx-auto flex items-center mt-3">
          <input
            type="text"
            className="py-2 text-black bg-transparent border-none outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span
            className="block h-full py-2 px-4 border-l border-l-black cursor-pointer"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <i className="fa-solid fa-spinner loading"></i>
        </div>
      ) : (
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {data?.products &&
              data?.products.map((item) => (
                <CardProduct
                  key={item.id}
                  price={item.price}
                  title={item.title}
                  images={item.images}
                  id={item.id}
                  border
                  liked={item.liked}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchContainer;
