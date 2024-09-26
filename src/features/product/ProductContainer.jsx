import Button from "../../ui/Button";
import CardProduct from "./CardProduct";
import FilterProduct from "./FilterProduct";
import { useProduct } from "./useProduct";
import useAuth from "../../context/contextAuth";
import { useEffect, useState } from "react";

function ProductContainer() {
  const { sort, sortPrice, category, limit, setLimit } = useAuth();
  const { products, isLoadingProduct, error } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(filteredProducts);

  useEffect(() => {
    let filteredData = [...(products?.products || [])]; // Sao chép mảng sản phẩm

    // Lọc theo danh mục
    if (category && category !== "") {
      filteredData = filteredData.filter((item) => item.category === category);
    }

    // Lọc theo giá
    if (sortPrice && sortPrice !== "") {
      const priceLimit = Number(sortPrice);
      filteredData = filteredData.filter((item) => item.price <= priceLimit);
    }

    // Sắp xếp theo giá
    if (sort && sort !== "") {
      filteredData.sort((a, b) => {
        if (sort === "ascending") return a.price - b.price;
        if (sort === "decreasing") return b.price - a.price;
        return 0;
      });
    }

    setFilteredProducts(filteredData);
  }, [sort, sortPrice, category, products]);

  const handleButtonMore = () => {
    let reminder = filteredProducts.length % limit;

    if (limit >= filteredProducts.length) {
      setLimit(8);
      return;
    }

    setLimit((pre) =>
      pre + 8 > filteredProducts.length ? pre + reminder + 1 : pre + 8
    );
  };

  if (isLoadingProduct) {
    return (
      <div className="flex w-[70vh] h-[70vh] items-center justify-center text-4xl mx-auto">
        <i className="fa-solid fa-spinner loading"></i>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase text-gray-800 my-5">Tất cả sản phẩm</h2>
      </div>
      <FilterProduct />
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {filteredProducts ? (
            filteredProducts
              .slice(0, limit)
              .map((item) => (
                <CardProduct
                  key={item.id}
                  price={item.price}
                  title={item.title}
                  images={item.images}
                  id={item.id}
                  border
                  liked={item.liked}
                />
              ))
          ) : (
            <h2 className="text-2xl text-gray-400">
              Không tìm thấy sản phẩm nào
            </h2>
          )}
        </div>
      </div>
      <div className="lg:w-[12%] w-[50%] mx-auto">
        <Button
          text={limit >= filteredProducts.length ? "Rút gọn" : "Xem thêm"}
          border
          dropdown
          func={handleButtonMore}
        />
      </div>
    </div>
  );
}

export default ProductContainer;
