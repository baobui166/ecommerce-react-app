function CardDiscount({
  priceDiscount,
  minimum = false,
  quantityDiscount,
  endDate,
}) {
  return (
    <div className="flex items-center rounded-xl bg-yellow-100  gap-5">
      <div className="pl-3">
        <div className="w-[54px] h-[54px] flex items-center justify-center bg-red-300 rounded-full">
          <i className="fa-solid fa-gift"></i>
        </div>
      </div>
      <div className="flex flex-col px2 py-1 border-l p-2 border-l-gray-300">
        <h2 className="text-black text-[20px] font-bold">
          Giảm {priceDiscount}
        </h2>
        <p className="text-[16px]">
          {minimum
            ? `Cho đơn hàng tối thiểu ${minimum}`
            : "Áp dụng cho tất cả đơn hàng"}
        </p>
        <p className="text-[16px] text-red-300 mt-1">
          Còn {quantityDiscount} mã, hết hạn trong {endDate} ngày
        </p>
        <div className="w-full bg-red-100 h-[2px]">
          <div className="w-[20%] h-full bg-red-500"></div>
        </div>
        <div className="text-sm flex items-center gap-10 mt-3 text-[16px]">
          <button className="bg-transparent text-blue-400">Chi tiết</button>
          <button className="px-2 py-1 bg-black text-white rounded-md">
            Sao chép
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDiscount;
