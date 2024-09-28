import Banner from "./Banner";
import Discount from "./Discount";
import Mixer from "./Mixer";
import ShowProduct from "./ShowProduct";
import { useProduct } from "../product/useProduct";
import { product } from "../../data/product";
import useAuth from "../../context/contextAuth";

function HomeContainer() {
  const { products, isLoadingProduct, error } = useProduct();
  const { user } = useAuth();

  console.log(user);
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full">
      <Banner />
      <Discount />
      <ShowProduct
        data={products?.products || product}
        loading={isLoadingProduct}
      />
      <Mixer />
    </div>
  );
}

export default HomeContainer;
