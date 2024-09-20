function ContactRow({ method, contacAddress, phone, send }) {
  return (
    <div className="flex items-center text-[12px] sm:text-[16px]  sm:justify-between gap-2 sm:gap-0">
      <div className="flex gap-4 items-center">
        <h2 className="text-gray-800 text-[20px] ">{method} :</h2>
        <h2 className="text-black text-[20px]">{contacAddress}</h2>
      </div>

      <button className="py-1 px-2 text-[14px] text-white bg-black w-[110px] rounded-sm cursor-pointer">
        {phone ? "Gọi ngay" : send ? "Gửi ngay" : "Nhắn ngay"}
      </button>
    </div>
  );
}

export default ContactRow;
