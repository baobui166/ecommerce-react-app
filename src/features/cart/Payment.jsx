import useAuth from "../../context/contextAuth";
import { productCart } from "../../data/product";
import Button from "../../ui/Button";

function Payment() {
  const totalBill = productCart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    1
  );
  const { denomination } = useAuth();
  return (
    <div className="flex flex-col gap-5 p-3">
      <div className="flex items-center justify-between">
        <span className="text-gray-400">Tạm tính:</span>
        <span>
          {totalBill.toLocaleString("vi-VN")}
          {denomination}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-400 text-xs text-center">
          Các loại phí khác sẽ được tính trong phần thanh toán
        </span>
        <Button text={"Thanh toán"} border />
      </div>
    </div>
  );
}

export default Payment;
