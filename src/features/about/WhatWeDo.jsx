import TitleAbout from "./TitleAbout";

function WhatWeDo() {
  const images = [
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
    "https://file.hstatic.net/200000260587/file/day_roi_b7f04b9edae443f29b33afb99de8f856.png",
  ];

  return (
    <div className="flex flex-col gap-3 mt-[90px]">
      <TitleAbout
        title={"What we do"}
        p="Tại Hardmode, trọng tâm chính của chúng tôi luôn là chất lượng sản phẩm và dịch vụ khách hàng vượt trội"
      />

      <div className="">
        <img src={images[0]} alt="" />
      </div>

      <p className="text-[18px] text-gray-400 my-5">
        Chúng tôi không chỉ tạo ra những sản phẩm thời trang cơ bản mà còn không
        ngừng sáng tạo các trang phục độc đáo để mỗi cá nhân được tự do thể hiện
        phong cách của bản thân mình
      </p>
    </div>
  );
}

export default WhatWeDo;
