import Button from "../../ui/Button";

function RegisterWithPhoneNumber({ register }) {
  return (
    <form className="flex flex-col gap-10">
      <div className="py-1 border-b-[1px] border-b-gray-400 ">
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          className="border-none outline-none w-full"
          checked={register === "numberphone"}
        />
      </div>
      <Button text={"Gửi mã xác nhận"} border />
    </form>
  );
}

export default RegisterWithPhoneNumber;
