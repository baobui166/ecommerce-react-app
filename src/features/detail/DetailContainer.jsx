import { product as productData } from "../../data/product";
import ImageProduct from "./ImageProduct";
import InformationProduct from "./InformationProduct";
import RatingForm from "./RatingForm";
import { useProductDetail } from "./useProductDetail";

function DetailContainer() {
  const { product, isLoading, error } = useProductDetail();
  console.log("product detail: ", product);

  if (isLoading) {
    return (
      <div className="flex w-[70vh] h-[70vh] items-center justify-center text-4xl mx-auto">
        <i className="fa-solid fa-spinner loading"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-[85%] mx-auto flex flex-col gap-3 my-10">
      <div className="flex items-start gap-5">
        <ImageProduct images={product?.images || productData.images} />
        <InformationProduct
          name={product?.title}
          price={product?.price}
          imagesInformation={product?.images || productData.imageInformation}
          sold={product?.minimumOrderQuantity}
        />
      </div>

      <div>
        <RatingForm />
      </div>
    </div>
  );
}

export default DetailContainer;
