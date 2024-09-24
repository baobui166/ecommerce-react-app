import Banner from "./Banner";
import Discount from "./Discount";
import Mixer from "./Mixer";
import ShowProduct from "./ShowProduct";
import { useProduct } from "../product/useProduct";
import { product } from "../../data/product";

function HomeContainer() {
  const { products, isLoadingProduct, error } = useProduct();
  console.log(products);
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
