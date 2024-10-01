import { useState } from "react";
import Option from "./Option";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

function PaymentMethod({ invalid, setInvalid }) {
  const [payment, setPayment] = useState("COD");
  const [transport, setTransport] = useState("FEE");

  const handelChangeToCOD = () => {
    setPayment("COD");
  };

  const handelChangeToCard = () => {
    setPayment("CARD");
  };

  return (
    <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-3">
        <h2>Phương thức vận chuyển</h2>
        <div className="p-3 border border-black flex flex-col gap-3 ">
          <Option
            name={"transform"}
            title="Khối lượng đơn hàng dưới 1KG"
            price="2"
            func={() => {
              setTransport("FEE");
            }}
            check={transport === "FEE"}
          />
          <Option
            name={"transform"}
            title="Khối lượng đơn hàng trên 1KG"
            price="0"
            func={() => {
              setTransport("FREE");
            }}
            check={transport === "FREE"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2>Phương thức thanh toán</h2>
        <div className=" border border-black flex flex-col gap-2 ">
          <div className="p-3">
            <Option
              name={"payment"}
              title="Thanh toán khi giao hàng (COD)"
              func={handelChangeToCOD}
              check={payment === "COD"}
            />
          </div>
          {payment === "COD" && (
            <div className="p-3 flex text-xs items-center justify-center text-center bg-gray-200">
              Cảm ơn bạn đã tin tưởng và chọn mua hàng tại Hardmode.vn. Chúng
              mình sẽ sớm liên hệ với bạn để Xác Nhận Đơn Hàng qua điện thoại
              trước khi giao hàng.{" "}
            </div>
          )}
          <div className="p-3">
            <Option
              name={"payment"}
              title="Khối lượng đơn hàng trên 1KG"
              func={handelChangeToCard}
              check={payment === "CARD"}
            />
          </div>

          {payment === "CARD" && (
            <div className="p-3 flex flex-col gap-2 text-xs items-center justify-center text-center bg-gray-200">
              <p>Số tài khoản: 1041570190</p>
              <p>Chủ tài khoản: HUYNH DO NHAT PHI</p>
              <p>Ngân hàng thụ hưởng: VIETCOMBANK</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-2 md:flex-row md:justify-between gap-3 md:gap-0 items-center">
        <Link to="/cart" className="text-sm text-blue-400">
          Giỏ hàng
        </Link>
        <div>
          <Button text={"Hoàn thành đơn hàng"} border hover />
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
