import { useState } from "react";
import ItemProduct from "./ItemProduct";
import useAuth from "../../context/contextAuth";

function OrderInfor() {
  const [discount, setDiscount] = useState("");
  const [feeDelivery, setFeeDelivery] = useState("");
  const totalPrice = 190000;
  const { denomination } = useAuth();

  return (
    <div className="text-gray-800 text-xs flex flex-col gap-3 ">
      <ItemProduct />
      <div className="flex border-t pt-2">
        <input
          type="text"
          className="text border rounded-sm border-gray-400 p-2 active:outline-black flex-1 mr-2"
        />
        <button className="bg-gray-300 px-3 rounded-md">Sử dụng</button>
      </div>
      <div className="flex flex-col gap-2 mt-3 border-t pt-2">
        <div className="flex items-center justify-between">
          <span>Tạm tính</span>
          <span>
            {denomination} {totalPrice}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Phí vận chuyển</span>
          <span>{feeDelivery ? feeDelivery : "—"}</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t pt-2">
        <span className="text-xl">Tổng cộng</span>
        <span>
          {denomination} {totalPrice}
        </span>
      </div>
    </div>
  );
}

export default OrderInfor;
