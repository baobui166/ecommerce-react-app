function ItemProduct({
  image,
  quantity = 1,
  nameProduct = "Ao thun",
  kind = "Trang kem",
  totalPrice = 190000,
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-2 items-center">
        <div className="relative">
          <img
            src={
              image ||
              "https://product.hstatic.net/200000260587/product/hun-nu-form-rong-tay-lo-ao-phong-rong-ao-phong-nam-nu-unisex-hat01__1__386a51e0f0194d55b36099e0b56477bd_small.jpg"
            }
            alt=""
            className="border border-gray-300 rounded-md"
          />
          <span className="absolute w-2 h-2 -top-1 -right-1  p-2 rounded-full bg-gray-500 text-white flex items-center justify-center">
            {quantity}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span>{nameProduct}</span>
          <span>{kind}</span>
        </div>
      </div>
      <div className="text-gray-400">
        <span>{totalPrice}</span>
      </div>
    </div>
  );
}

export default ItemProduct;
