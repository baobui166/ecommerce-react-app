import { sort, sortCategory, sortPrice } from "../../data/selectOption";
import DropDown from "../../ui/DropDown";

function FilterProduct() {
  return (
    <div className="md:flex md:items-center grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-1">
      <div>
        <DropDown title={"Sắp xếp theo"} data={sort} />
      </div>
      <div>
        <DropDown title={"Giá sản phẩm"} data={sortPrice} />
      </div>
      <div>
        <DropDown title={"Danh mục"} data={sortCategory} />
      </div>
    </div>
  );
}

export default FilterProduct;
