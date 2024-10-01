import { Link } from "react-router-dom";
import FormInfor from "./FormInfor";
import Button from "../../ui/Button";
import { useState } from "react";

function CheckoutInfor({ invalid, setInvalid }) {
  const [provider, setProvider] = useState();

  const handleChangePage = () => {
    setInvalid(true);
  };

  return (
    <div className="w-full flex flex-col gap-2 text-gray-400">
      <h1 className="text-gray-800 font-bold text-2xl">Hardmode</h1>
      <div className="text-xs flex gap-1 items-center">
        <span
          onClick={() => setInvalid(true)}
          className={`${
            invalid ? "text-gray-300" : "text-black"
          } cursor-pointer`}
        >
          Thông tin giao hàng
        </span>
        <span>{">"}</span>
        <span
          onClick={() => setInvalid(false)}
          className={`${
            !invalid ? "text-gray-300" : "text-black"
          } cursor-pointer`}
        >
          Phương thức thanh toán
        </span>
      </div>
      <FormInfor provider={provider} setProvider={setProvider} />
      <div className="flex flex-col mt-2 md:flex-row md:justify-between gap-3 md:gap-0 items-center">
        <Link to="/cart" className="text-sm text-blue-400">
          Giỏ hàng
        </Link>
        <div>
          <Button
            text={"Tiếp tục đến phương thức thanh toán"}
            func={handleChangePage}
            border
            hover
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutInfor;
