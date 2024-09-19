import Button from "../../ui/Button";
import bannerImage from "../../assets/banner_home.jpg";

function Banner() {
  return (
    <div className="w-full h-[470px] relative mt-2 mb-36">
      <img src={bannerImage} alt="banner" className="" />
      <div className="absolute bottom-[-40px] right-[43%] ">
        <Button size={"lg"} text="Xem sản phẩm" />
      </div>
    </div>
  );
}

export default Banner;
