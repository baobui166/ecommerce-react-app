import useAuth from "../../context/contextAuth";

function ItemProduct({ image, name, price, color, size, quantity }) {
  const totalPrice = quantity * price;
  const { denomination } = useAuth();

  return (
    <div className="flex items-center gap-3">
      <div className="w-[140px] h-[180px]">
        <img src={image} alt="" />
      </div>
      <div className="flex justify-between md:gap-5">
        <div className="flex flex-col md:flex-row md:gap-5 md:items-start justify-between gap-1">
          <div className="text-gray-400 text-[16px] sm:text-sm flex flex-col gap-[3px]">
            <h2 className="text-black">{name}</h2>
            <span>
              {price.toLocaleString("vi-VN")}
              {denomination}
            </span>
            <span>
              {color}/{size}
            </span>
          </div>
          <div className="text-[16px] flex items-center gap-3">
            <button>-</button>
            <span className="text-black">{quantity}</span>
            <button>+</button>
          </div>
        </div>
        <div className="flex flex-col justify-between md:justify-center md:flex-row-reverse md:items-start md:gap-3">
          <div className="text-sm flex justify-end mt-1">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="flex text-sm justify-start">
            <span>
              {totalPrice.toLocaleString("vi-VN")}
              {denomination}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
