import { products } from "../../data/product";
import CardProduct from "../product/CardProduct";

function LikedContainer() {
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-3 mt-10 uppercase">
      <h1 className="text-xl text-black font-bold">
        Sản phẩm bạn đã yêu thích
      </h1>
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
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default LikedContainer;
