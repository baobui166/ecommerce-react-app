import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import DropDown from "../../ui/DropDown";
import { useProvider } from "./useProvider";
import useAuth from "../../context/contextAuth";
import { useState } from "react";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().min(1, { message: "Username is required" }),
  numberphone: z.number().min(1, { message: "Numberphone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
});

function FormInfor({ provider, setProvider }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(provider);

  const { data: listProvider, isLoading, error } = useProvider();
  const { user } = useAuth();
  const [userName, setUserName] = useState(() => {
    const username = user?.username;

    if (username) {
      return username;
    }

    return "";
  });
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  if (error) {
    return (
      <div className="flex items-center justify-center w-[80vw] h-[80vh]">
        <span className="text-red-400 text-xl">{error.message}</span>
      </div>
    );
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="border rounded-sm border-gray-400 p-[10px]">
          <input
            type="text"
            className="border-none outline-none overflow-hidden w-full text-gray-800"
            id="username"
            placeholder="Họ và tên"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            {...register("username")}
          />
        </div>
        {errors.username && (
          <span className="my-1 text-red-600">{errors.message.username}</span>
        )}
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-[60%]">
            <div className="border rounded-sm border-gray-400 p-[10px] ">
              <input
                type="text"
                className="border-none outline-none overflow-hidden w-full text-gray-800  "
                id="username"
                placeholder="Email"
                value={user?.email || email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.username && (
              <span className="my-1 text-red-600">
                {errors.message.username}
              </span>
            )}
          </div>

          <div className="md:w-[40%]">
            <div className="border rounded-sm border-gray-400 p-[10px] ">
              <input
                type="text"
                className="border-none outline-none overflow-hidden w-full text-gray-800"
                id="username"
                placeholder="Số điện thoại"
                value={user?.phoneNumber || phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            {errors.username && (
              <span className="my-1 text-red-600">
                {errors.message.username}
              </span>
            )}
          </div>
        </div>
        <div className="border rounded-sm border-gray-400 p-[10px] ">
          <input
            type="text"
            className="border-none outline-none overflow-hidden w-full text-gray-800"
            id="username"
            placeholder="Địa chỉ"
            value={user?.address || address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-full">
          {isLoading ? (
            <div>
              <i className="fa-solid fa-spinner loading"></i>
            </div>
          ) : (
            <Controller
              name="province" // Tên của trường dữ liệu trong form
              control={control}
              defaultValue=""
              render={({ field }) => (
                <DropDown
                  data={listProvider}
                  title={"Chọn tỉnh thành"}
                  func={(value) => {
                    field.onChange(value); // Cập nhật vào form qua React Hook Form
                    setProvider(value); // Cập nhật vào state qua setProvider
                  }}
                />
              )}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default FormInfor;
