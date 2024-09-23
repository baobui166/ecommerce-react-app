import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import CardProduct from "./CardProduct";
import FilterProduct from "./FilterProduct";

function ProductContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(8);

  const handleButtonLoad = () => {
    if (limit < 24) setLimit((pre) => pre + 8);
    if (limit >= 24 && limit <= 30) setLimit((pre) => pre + 7);
    if (limit >= 30) setLimit(8);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        console.log(result.products);
        setData(result.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  if (loading)
    return (
      <div className="flex w-[70vh] h-[70vh] items-center justify-center text-4xl mx-auto">
        <i className="fa-solid fa-spinner loading"></i>
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase text-gray-800 my-5">Tất cả sản phẩm</h2>
      </div>
      <FilterProduct />
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {data.map((item) => (
            <CardProduct
              key={item.id} // Dùng item.id làm key
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
      <div className="lg:w-[12%] w-[50%] mx-auto">
        <Button
          text={limit < 24 ? "Xem thêm" : "Rút gọn"}
          func={handleButtonLoad}
          border
          dropdown
        />
      </div>
    </div>
  );
}

export default ProductContainer;
