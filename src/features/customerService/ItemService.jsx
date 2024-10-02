import { Link } from "react-router-dom";

function ItemService({ title, path, index }) {
  return (
    <div className="text-[24px] flex items-center gap-[2px] text-black font-bold">
      <span>{index}.</span>
      <span>{title}</span>
      <span className="text-gray-400 font-light">
        - Xem thêm{" "}
        <Link to={path} className="underline text-black font-bold">
          Tại đây
        </Link>
      </span>
    </div>
  );
}

export default ItemService;
