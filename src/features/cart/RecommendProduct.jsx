import { useState } from "react";
import { balo, products, sorts } from "../../data/product";
import CardProduct from "../product/CardProduct";

const category = [
  { name: "Áo", value: "shirt" },
  { name: "Quần", value: "sort" },
  { name: "Balo", value: "balo" },
];

function RecommendProduct() {
  const [queryCategory, setQueryCategory] = useState("shirt");

  return (
    <div className="my-10 flex flex-col">
      <div className="flex flex-col md:flex-row items-center gap-5 text-sm">
        <span className="text-black">Bạn có cần thêm</span>
        <div className="flex gap-5 ml-2 md:ml-0">
          {category.map((item, index) => (
            <span
              key={index}
              onClick={() => setQueryCategory(item.value)}
              className={`${
                queryCategory === item.value ? "text-gray-800" : "text-gray-400"
              } cursor-pointer font-bold`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
      {queryCategory === "shirt" && (
        <div className="my-10">
          {
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              {products.length > 0 ? (
                products.map((item, index) => (
                  <CardProduct
                    key={index}
                    price={item.price}
                    name={item.name}
                    image={item.image}
                    id={item.id}
                  />
                ))
              ) : (
                <span className="text-sm text-center text-gray-400">
                  Chưa có sản phẩm gợi ý
                </span>
              )}
            </div>
          }
        </div>
      )}

      {queryCategory === "sort" && (
        <div className="my-10">
          {
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              {sorts.length > 0 ? (
                sorts.map((item, index) => (
                  <CardProduct
                    key={index}
                    price={item.price}
                    name={item.name}
                    image={item.image}
                    id={item.id}
                  />
                ))
              ) : (
                <span className="text-sm text-center text-gray-400">
                  Chưa có sản phẩm gợi ý
                </span>
              )}
            </div>
          }
        </div>
      )}

      {queryCategory === "balo" && (
        <div className="my-10 mx-0">
          {
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
              {balo.length > 0 ? (
                balo.map((item, index) => (
                  <CardProduct
                    key={index}
                    price={item.price}
                    name={item.name}
                    image={item.image}
                    id={item.id}
                  />
                ))
              ) : (
                <span className="text-sm text-center text-gray-400">
                  Chưa có sản phẩm gợi ý
                </span>
              )}
            </div>
          }
        </div>
      )}
    </div>
  );
}

export default RecommendProduct;
