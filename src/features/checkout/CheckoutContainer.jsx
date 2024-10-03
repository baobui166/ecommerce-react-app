import { useState } from "react";
import OrderInfor from "./OrderInfor";
import CheckoutInfor from "./CheckoutInfor";
import PaymentMethod from "./PaymentMethod";

function CheckoutContainer() {
  const [invalid, setInvalid] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleShowProduct = () => {
    setShowProduct((pre) => !pre);
  };

  return (
    <div className="w-[80%] min-h-[60vh] px-4 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center mx-auto">
      <div className="lg:pt-20 pt-5 lg:pr-10 pr-0 lg:w-[50%] border-r-gray-400">
        {invalid ? (
          <PaymentMethod invalid={invalid} setInvalid={setInvalid} />
        ) : (
          <CheckoutInfor invalid={invalid} setInvalid={setInvalid} />
        )}
      </div>
      <div className="lg:pt-20 pt-5 lg:pl-10 lg:w-[50%] border-l-gray-400">
        <div
          className="flex items-center justify-between lg:hidden p-3 border border-blue-300 rounded-md"
          onClick={handleShowProduct}
        >
          <div className="flex items-center gap-3 text-blue-400">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Hiển thị đơn hàng</span>
          </div>
          <div className="text-blue-400">
            <i className="fa-solid fa-square-caret-down"></i>
          </div>
        </div>

        <div className="lg:hidden flex w-full mt-5 show ">
          {showProduct && <OrderInfor />}
        </div>

        <div className="lg:block hidden">
          <OrderInfor />
        </div>
      </div>
    </div>
  );
}

export default CheckoutContainer;
