import CardDiscount from "./CardDiscount";

function Discount() {
  return (
    <div className="w-full -mt-[200px] bg-yellow-600 min-h-[212px] p-5 rounded-lg flex items-center justify-center flex-col gap-5 md:-mt-[69px]">
      <h3 className="text-xl text-center text-white font-bold">
        Mã khuyến mãi
      </h3>
      <div className="flex flex-col md:flex-row items-center gap-5 mx-auto">
        <CardDiscount
          priceDiscount={"70k"}
          minimum="500k"
          quantityDiscount="100"
          endDate="13"
        />
        <CardDiscount
          priceDiscount={"30k"}
          quantityDiscount="91"
          endDate="13"
        />
      </div>
    </div>
  );
}

export default Discount;
