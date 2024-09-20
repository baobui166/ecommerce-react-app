import { productCart } from "../../data/product";
import Discount from "../home/Discount";
import ItemProduct from "./ItemProduct";
import Payment from "./Payment";
import RecommendProduct from "./RecommendProduct";

function CartContainer() {
  return (
    <div className=" px-5 sm:px-0 sm:w-[80%] flex flex-col md:justify-between items-center justify-center gap-3 mx-auto my-10">
      <h2 className="uppercase text-2xl text-center">Giỏ Hàng</h2>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div>
          {productCart.map((item, index) => (
            <ItemProduct
              key={index}
              name={item.name}
              quantity={item.quantity}
              color={item.color}
              size={item.size}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="mt-4">
          <Payment />
        </div>
      </div>
      <div className="lg:mt-10 mt-[200px] w-full">
        <Discount />
      </div>
      <RecommendProduct />
    </div>
  );
}

export default CartContainer;
