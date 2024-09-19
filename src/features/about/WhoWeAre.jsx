import TitleAbout from "./TitleAbout";

function WhoWeAre() {
  return (
    <div className="mt-8">
      <TitleAbout
        title={"Who we are"}
        p={
          "Hardmode là thương hiệu thời trang đường phố với phong cách thiết kế  trẻ trung, hiện đại, tối giản nhưng không đơn giản cùng mong muốn mang đến những sản phẩm chất lượng cao với giá thành phù hợp cho giới trẻ thể hiện và khẳng định bản thân."
        }
      />
      <div className="h-[392px] mt-5">
        <img
          src="https://file.hstatic.net/200000260587/file/20240820-131043_51d715c01fd34e8ea6dae7863eefd19d.jpg"
          alt="banner"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default WhoWeAre;
