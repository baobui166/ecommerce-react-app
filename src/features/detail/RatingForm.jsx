import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(1, "Email is required"),
  phone: z.number().min(1, "Phone number is required"),
  text: z.string(),
  link: z.string(),
  file: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, "You must upload exactly one file")
    .refine(
      (files) => files[0]?.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB"
    )
    .refine(
      (files) => ["image/png", "image/jpeg"].includes(files[0]?.type),
      "Only .png and .jpeg files are allowed"
    ),
});

function RatingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="border-t border-t-gray-400 w-[60%]">
      <h2 className="uppercase text-black font-bold my-4">Viết đánh giá</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="border border-gray-400 p-2">
            <input
              type="text"
              placeholder="Tên của bạn"
              className="outline-none border-none"
              {...register("name")}
            />
          </div>
          <div className="border border-gray-400 p-2">
            <input
              type="email"
              placeholder="xinchao@gmail.com"
              className="outline-none border-none"
              {...register("email")}
            />
          </div>
        </div>
        <div className="w-[59%] border border-gray-400 p-2">
          <input
            type="number"
            placeholder="Số điện thoại"
            className="outline-none border-none w-full"
            {...register("phone")}
          />
        </div>
        <div className="border border-gray-400 p-2">
          <textarea
            name=""
            id=""
            placeholder="Viết nội dung đánh giá ở đây"
            className="outline-none border-none w-full h-full"
            {...register("text")}
          ></textarea>
        </div>
        <div className="flex items-center gap-3">
          <div className="border border-gray-400 p-2">
            <input type="file" className="outline-none border-none" />
          </div>
          <div className="border border-gray-400 p-2">
            <input
              type="text"
              placeholder="Link video nếu có"
              className="outline-none border-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          {errors.file && <p className="text-red-500">{errors.file.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-red-800 px-6 py-2 rounded-lg"
          >
            Gửi đánh giá
          </button>
        </div>
      </form>
    </div>
  );
}

export default RatingForm;
