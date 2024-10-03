import { Link } from "react-router-dom";

function ItemService({ title, path, index }) {
  return (
    <div className="md:text-[24px] text-[16px]  gap-[2px] text-black font-bold">
      <stong>{index}.</stong>
      <strong className="text-nowrap">{title}</strong>
      <strong className="text-gray-400 font-light flex-1">
        - Xem thêm{" "}
        <Link to={path} className="underline text-black font-bold">
          Tại đây
        </Link>
      </strong>
    </div>
  );
}

export default ItemService;
