import { useEffect, useState } from "react";
import useAuth from "../../context/contextAuth";
import { quantity as quantityData } from "../../data/selectOption";
import Button from "../../ui/Button";
import DropDown from "../../ui/DropDown";
import { useAddToCart } from "./useAddToCart";
import { useParams } from "react-router-dom";

function InformationProduct({ name, price, imagesInformation, sold }) {
  const {
    denomination,
    quantity,
    setQuantity,
    user,
    productsCart,
    setProductsCart,
  } = useAuth();
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const { mutate: addToCartFunc, isLoading: isLoadingAddToCart } =
    useAddToCart();

  const handleShow = () => {
    setShow((pre) => !pre);
  };

  useEffect(() => {
    console.log("so luong sản phẩm", quantity);
  }, [quantity]);

  const handleAddToCart = () => {
    let updatedCart = [...productsCart];

    let existingItem = updatedCart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += Number(quantity);
    } else {
      updatedCart.push({ id: Number(id), quantity: Number(quantity) });
    }

    setProductsCart(updatedCart);

    console.log("mang sau khi update: ", productsCart);
    addToCartFunc({ userId: Number(user.id), products: updatedCart });
  };

  return (
    <div className="w-[30%]">
      <div
        className={` flex flex-col gap-3 overflow-hidden ${
          show ? "max-h-full" : "max-h-[780px]"
        }`}
      >
        <div className="text-black text-xl">
          <span>{name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>
            {price.toLocaleString("vi-VN")} {denomination}
          </span>
          <span className="text-gray-400">
            Đã bán: <span className="text-black">{sold ? sold : 0}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMYJnav3IsjWhojNLRgzvctY3vxC0zFMCjA&s"
            className="w-[32px] h-[32px] cursor-pointer rounded-md"
          >
            <img
              src="https://1000logos.net/wp-content/uploads/2021/02/Shopee-logo.png"
              alt="Shoppe"
            />
          </a>
          <a
            href="https://www.tiktok.com/@hardmode.vn"
            className="w-[32px] h-[32px] cursor-pointer rounded-md"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/561/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png"
              alt="Tiktok"
            />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <DropDown title={"Số lượng"} func={setQuantity} data={quantityData} />
        </div>
        <div className="w-full">
          <Button
            text={"Thêm vào giỏ hàng"}
            border
            func={handleAddToCart}
            disabled={isLoadingAddToCart}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-black text-xl border-b border-b-black">
            Thông tin sản phẩm
          </h2>
          <p className="my-3 text-gray-600">
            Hardmode là thương hiệu thời trang đường phố với phong cách thiết kế
            trẻ trung, hiện đại, tối giản nhưng không đơn giản cùng mong muốn
            mang đến những sản phẩm chất lượng cao với giá thành phù hợp cho
            giới trẻ thể hiện và khẳng định bản thân. Trọng tâm chính của chúng
            tôi luôn là chất lượng sản phẩm và dịch vụ khách hàng vượt trội.
            Chúng tôi không chỉ tạo ra những sản phẩm thời trang cơ bản mà còn
            không ngừng sáng tạo các trang phục độc đáo để mỗi cá nhân được tự
            do thể hiện phong cách của bản thân mình. Hardmode ra đời nhằm mục
            đích đáp ứng được tất cả các nhu cầu về thời trang của mọi người
            trong tương lai gần.
          </p>
          <div className="flex flex-col gap-3 overflow-hidden">
            {imagesInformation.map((item, index) => (
              <img key={index} src={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[30%] mx-auto mt-3">
        <Button text={show ? "Rút gọn" : "Xem thêm"} border func={handleShow} />
      </div>
    </div>
  );
}

export default InformationProduct;
