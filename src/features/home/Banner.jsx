import Button from "../../ui/Button";
import bannerImage from "../../assets/banner_home.jpg";

function Banner() {
  return (
    <div className="w-full h-[470px] relative">
      <img src={bannerImage} alt="banner" className="" />
      <div className="absolute top-2">
        <Button size={"lg"} text="Xem sản phẩm" />
      </div>
    </div>
  );
}

export default Banner;
