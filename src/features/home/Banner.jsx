import Button from "../../ui/Button";
import bannerImage from "../../assets/banner_home.jpg";

function Banner() {
  return (
    <div className="w-full h-[470px] sm:h[] relative mt-2 mb-36">
      <div className="relative ">
        <img src={bannerImage} alt="banner" />
        <div className="absolute hidden sm:block lg:bottom-[40px] lg:right-[43%] sm:bottom-3 sm:right-[35%] right-[43%] ">
          <Button size={"lg"} text="Xem sản phẩm" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
