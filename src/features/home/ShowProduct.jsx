import { useState } from "react";
import CardProduct from "../product/CardProduct";
import Button from "../../ui/Button";

function ShowProduct({ data, loading }) {
  const [filter, setFilter] = useState("outstanding");

  if (loading)
    return (
      <div className="flex w-[70vh] h-[70vh] items-center justify-center text-4xl mx-auto">
        <i className="fa-solid fa-spinner loading"></i>
      </div>
    );

  return (
    <div className="w-[100%] ">
      <div className="w-[80%] mx-auto my-5 flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-4 text-xs text-gray-400 text-center">
          <h2
            onClick={() => setFilter("outstanding")}
            className={`pb-2 transition-all duration-150 cursor-pointer ${
              filter === "outstanding"
                ? "border-b border-b-black text-black"
                : "hover:text-black border-b border-b-transparent hover:border-b hover:border-b-black"
            } `}
          >
            Sản phẩm nổi bật
          </h2>
          <h2
            onClick={() => setFilter("bestseller")}
            className={`pb-2 transition-all duration-150 cursor-pointer ${
              filter === "bestseller"
                ? "border-b border-b-black text-black"
                : "hover:text-black border-b border-b-transparent hover:border-b hover:border-b-black"
            } `}
          >
            Sản phẩm bán chạy
          </h2>
        </div>
        {filter === "outstanding" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {data.slice(0, 8).map((item, index) => (
              <CardProduct
                key={index}
                price={item.price}
                title={item.name}
                images={item.images}
                id={item.id}
              />
            ))}
          </div>
        )}
        {filter === "bestseller" && (
          <div className="w-full">
            <video
              className="w-[100%] h-[645px]"
              src="https://file.hstatic.net/200000260587/file/web_final_18mb.mp4"
              autoPlay
            ></video>
          </div>
        )}
      </div>
      <div className="w-[20%] mx-auto flex items-center justify-center">
        <Button text={"Xem thêm"} border dropdown link={"/products"}></Button>
      </div>
    </div>
  );
}

export default ShowProduct;
