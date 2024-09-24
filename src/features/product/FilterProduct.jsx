import useAuth from "../../context/contextAuth";
import { sort, sortPrice } from "../../data/selectOption";
import DropDown from "../../ui/DropDown";
import { useCategories } from "./useCategory";

function FilterProduct() {
  const { setSort, setSortPrice, setCategory } = useAuth();
  const { categories, isLoadingCategories, error } = useCategories();

  console.log(categories);

  if (isLoadingCategories) {
    return (
      <div className="flex w-[70vh] h-[70vh] items-center justify-center text-4xl mx-auto">
        <i className="fa-solid fa-spinner loading"></i>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="md:flex md:items-center grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-1">
      <div>
        <DropDown title={"Sắp xếp theo"} func={setSort} data={sort} />
      </div>
      <div>
        <DropDown title={"Giá sản phẩm"} func={setSortPrice} data={sortPrice} />
      </div>
      <div>
        <DropDown title={"Danh mục"} func={setCategory} data={categories} />
      </div>
    </div>
  );
}

export default FilterProduct;
