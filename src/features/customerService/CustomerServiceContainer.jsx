import { clauses } from "../../data/customerService";
import ItemService from "./ItemService";

function CustomerServiceContainer() {
  return (
    <div className="flex flex-col gap-1 w-[80%] mx-auto py-20">
      <h2 className="text-3xl text-center mb-10">Chăm sóc khách hàng</h2>
      <div>
        {clauses.map((item, index) => (
          <ItemService
            key={index}
            index={index + 1}
            path={item.path}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerServiceContainer;
