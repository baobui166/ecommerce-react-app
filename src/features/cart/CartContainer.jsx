import { useNavigate } from "react-router-dom";
import useAuth from "../../context/contextAuth";
import Discount from "../home/Discount";
import ItemProduct from "./ItemProduct";
import Payment from "./Payment";
import RecommendProduct from "./RecommendProduct";
import { useCart } from "./useCart";

function CartContainer() {
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(user.id);
  const { data, isLoading, error } = useCart();

  if (!user.id) {
    navigate("/login");
  }

  console.log(data);

  if (isLoading) {
    return (
      <div className="flex w-[70vh] h-[70vh] items-center justify-center text-4xl mx-auto">
        <i className="fa-solid fa-spinner loading"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-red-400 text-2xl">Error: {error}</span>
      </div>
    );
  }

  return (
    <div className=" px-5 sm:px-0 sm:w-[80%] flex flex-col md:justify-between items-center justify-center gap-3 mx-auto my-10">
      <h2 className="uppercase text-2xl text-center">Giỏ Hàng</h2>
      {data.carts.length >= 1 ? (
        <div className="flex flex-col gap-5 lg:flex-row">
          <div>
            {data.carts.map((item, index) => (
              <ItemProduct
                key={index}
                name={item.title}
                quantity={item.quantity}
                price={item.price}
                image={item.thumbnail}
              />
            ))}
          </div>
          <div className="mt-4">
            <Payment />
          </div>
        </div>
      ) : (
        <div className="w-full h-[300px] flex items-center justify-center">
          <h2 className="text-gray-400 text-2xl">
            Không có sản phẩm nào trong giỏ hàng!!!
          </h2>
        </div>
      )}
      <div className="lg:mt-10 mt-[200px] w-full">
        <Discount />
      </div>
      <div className="lg:mt-10 mt-[200px] w-full">
        <RecommendProduct />
      </div>
    </div>
  );
}

export default CartContainer;
