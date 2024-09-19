import Banner from "./Banner";
import Discount from "./Discount";
import Mixer from "./Mixer";

function HomeContainer() {
  return (
    <div className="w-full">
      <Banner />
      <Discount />
      <Mixer />
    </div>
  );
}

export default HomeContainer;
