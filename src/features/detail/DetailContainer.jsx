import { product as productData } from "../../data/product";
import ImageProduct from "./ImageProduct";
import InformationProduct from "./InformationProduct";
import RatingForm from "./RatingForm";

function DetailContainer() {
  const product = productData;
  return (
    <div className="w-[85%] mx-auto flex flex-col gap-3 my-10">
      <div className="flex items-start gap-5">
        <ImageProduct images={product.images} />
        <InformationProduct
          name={product.name}
          price={product.price}
          imagesInformation={product.imageInformation}
          sold={product.sold}
        />
      </div>

      <div>
        <RatingForm />
      </div>
    </div>
  );
}

export default DetailContainer;
