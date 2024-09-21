import { products } from "../../data/product";
import Button from "../../ui/Button";
import CardProduct from "./CardProduct";
import FilterProduct from "./FilterProduct";

function ProductContainer() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase text-gray-800 my-5">Tất cả sản phẩm</h2>
      </div>
      <FilterProduct />
      <div className="my-10">
        {
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {products.map((item, index) => (
              <CardProduct
                key={index}
                price={item.price}
                name={item.name}
                image={item.image}
                id={item.id}
                border
                liked={item.liked}
              />
            ))}
          </div>
        }
      </div>
      <div className="lg:w-[12%] w-[50%] mx-auto">
        <Button text={"Xem thêm"} border dropdown />
      </div>
    </div>
  );
}

export default ProductContainer;
