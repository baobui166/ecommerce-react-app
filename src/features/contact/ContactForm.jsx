import { z } from "zod";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InformationContact from "./InformationContact";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Email is required"),
  text: z.string(),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "0396714892",
      email: "",
      text: "",
    },
  });

  console.log({ errors });

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div className="text-[12px] sm:text-[26px]">
      <div className="text-[16px] md:text-xl text-gray-400 font-thin">
        <h2>Gửi tin nhắn cho Hardmode</h2>
        <h2>khi bạn cần hỗ trợ hoặc có thắc mắc nhé:</h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-5"
      >
        <div className="w-1/3 border-b border-b-gray-400 py-2">
          <input
            type="text"
            {...register("name")}
            className=" border-none outline-none"
            placeholder="Họ và tên"
          />
        </div>
        {errors.name && (
          <p className="text-[16px] text-red-400 mt-[2px]">
            *{errors.name.message}
          </p>
        )}
        <div className="w-2/3 flex items-center gap-3">
          <div className="border-b border-b-gray-400 py-2">
            <input
              type="text"
              {...register("phone")}
              className=" border-none outline-none"
              placeholder="Số điện thoại"
            />
            {errors.phone && (
              <p className="text-[16px] text-red-400 mt-[2px]">
                *{errors.phone.message}
              </p>
            )}
          </div>

          <div className="border-b border-b-gray-400 py-2 ">
            <input
              type="email"
              {...register("email")}
              className=" border-none outline-none"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-[16px] text-red-400 mt-[2px]">
                *{errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full border border-gray-400 p-2">
          <textarea
            name=""
            id=""
            placeholder="Nội dung"
            {...register("text")}
            className="w-full border-none outline-none"
          ></textarea>
        </div>

        <div className="w-[20%]">
          <Button text={"Gửi"} type="submit" border />
        </div>
      </form>

      <div className="mt-5">
        <InformationContact />
      </div>
    </div>
  );
}

export default ContactForm;
