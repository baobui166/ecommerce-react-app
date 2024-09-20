import { useState } from "react";

function ImageProduct({ images }) {
  const [imgCurrent, setImgCurrent] = useState(0);

  return (
    <div className="w-[70%] flex items-center gap-5">
      <div className="flex flex-col gap-2 p-2">
        {images.map((item, index) => (
          <div
            key={index}
            className={`w-[90px] h-[115px] p-[5px] ${
              index === imgCurrent ? "border border-solid border-black" : ""
            } `}
          >
            <img
              src={item}
              onClick={() => setImgCurrent(index)}
              className={` `}
            />
          </div>
        ))}
      </div>
      <div className="w-[5px] h-full bg-gray-500">
        <div className="w-full h-[30%] bg-black"></div>
      </div>
      <div className="w-[723px] h-[723px] overflow-hidden">
        <img src={images[imgCurrent]} alt="Product" className="object-cover" />
      </div>
    </div>
  );
}

export default ImageProduct;
