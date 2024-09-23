import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function RegisterWithEmail() {
  return (
    <div className="flex flex-col gap-10">
      <div className="py-1 border-b-[1px] border-b-gray-400 ">
        <input
          type="text"
          placeholder="Họ"
          className="border-none outline-none w-full"
        />
      </div>
      <div className="py-1 border-b-[1px] border-b-gray-400 ">
        <input
          type="text"
          placeholder="Tên"
          className="border-none outline-none w-full"
        />
      </div>
      <div className="py-1 border-b-[1px] border-b-gray-400 ">
        <input
          type="text"
          placeholder="Email"
          className="border-none outline-none w-full"
        />
      </div>
      <div className="py-1 border-b-[1px] border-b-gray-400 ">
        <input
          type="text"
          placeholder="Mật khẩu"
          className="border-none outline-none w-full"
        />
      </div>
      <Button text={"Đăng kí"} border />
      <Link to="/" className="flex items-center text-gray-400 gap-5">
        <i className="fa-solid fa-backward"></i>
        <span>Quay lại trang chủ</span>
      </Link>
    </div>
  );
}

export default RegisterWithEmail;
