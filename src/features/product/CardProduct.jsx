import { useNavigate } from "react-router-dom";
import useAuth from "../../context/contextAuth";
import { useAddToCart } from "../detail/useAddToCart";

function CardProduct({
  title,
  images,
  price,
  border = false,
  id,
  liked = false,
}) {
  const { denomination, user } = useAuth();
  const navigate = useNavigate();
  const { mutate: addToCartFunc, isLoading: isLoadingAddToCart } =
    useAddToCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Ngăn việc sự kiện click lan ra ngoài
    addToCartFunc(user.id, id, 1);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Điều hướng sang trang chi tiết sản phẩm
  };

  //to={`/product/${id}`}

  return (
    <div
      onClick={handleCardClick}
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
        <button
          onClick={handleAddToCart}
          className="absolute bottom-1 right-1 "
        >
          {isLoadingAddToCart ? (
            <i className="fa-solid fa-spinner loading"></i>
          ) : (
            <i className="fa-solid fa-cart-shopping"></i>
          )}
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
    </div>
  );
}

export default CardProduct;
