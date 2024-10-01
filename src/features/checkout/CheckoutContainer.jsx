import { useState } from "react";
import OrderInfor from "./OrderInfor";
import CheckoutInfor from "./CheckoutInfor";
import PaymentMethod from "./PaymentMethod";

function CheckoutContainer() {
  const [invalid, setInvalid] = useState(false);

  return (
    <div className="w-[80%] min-h-[60vh] flex items-center justify-center mx-auto">
      <div className="pt-20 pr-10 w-[50%] border-r-gray-400">
        {invalid ? (
          <PaymentMethod invalid={invalid} setInvalid={setInvalid} />
        ) : (
          <CheckoutInfor invalid={invalid} setInvalid={setInvalid} />
        )}
      </div>
      <div className="pt-20 pl-10 w-[50%] border-l-gray-400">
        <OrderInfor />
      </div>
    </div>
  );
}

export default CheckoutContainer;
