import { Link } from "react-router-dom";
import useAuth from "../../context/contextAuth";

function CardProduct({
  title,
  images,
  price,
  border = false,
  id,
  liked = false,
}) {
  const { denomination } = useAuth();

  return (
    <Link
      to={`/product/${id}`}
      className={`p-3 flex flex-col ${border ? "border border-black" : ""}`}
    >
      <div className="flex items-center justify-between "></div>
      <div className="relative">
        <img
          src={images[0]}
          alt="Product"
          className="w-[340px] h-[340px] object-cover"
        />
        <span className="block px-2 py-1 bg-black text-white font-bold text-[16px] absolute top-1 left-1">
          {"New"}
        </span>
        <button className="text-sm absolute top-1 right-1 ">
          {liked ? (
            <img src="../../assets/heart.svg" alt="heart" />
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
        <button className="absolute bottom-1 right-1 ">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>

      <div className="text-gray-400  text-sm">
        <span>{title}</span>
      </div>
      <div className="mt-2">
        <span>
          {price.toLocaleString("vi-VN")}
          {denomination}
        </span>
      </div>
    </Link>
  );
}

export default CardProduct;
