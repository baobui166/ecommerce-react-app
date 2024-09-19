import Banner from "./Banner";
import Discount from "./Discount";
import Mixer from "./Mixer";
import ShowProduct from "./ShowProduct";

function HomeContainer() {
  return (
    <div className="w-full">
      <Banner />
      <Discount />
      <ShowProduct />
      <Mixer />
    </div>
  );
}

export default HomeContainer;
