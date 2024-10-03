import Button from "../../ui/Button";
import bannerImage from "../../assets/banner_home.jpg";

function Banner() {
  return (
    <div className="w-full lg:h-[470px] h-[180px] relative mt-2 md:mb-36 lg:mb-12">
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
