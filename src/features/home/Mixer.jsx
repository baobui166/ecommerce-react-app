import Button from "../../ui/Button";
import MixerCard from "./MixerCard";

function Mixer() {
  const data = [
    { image: "../../assets/mixer1.webp", title: "Áo Thun Hardmode / Cream" },
    { image: "../../assets/mixer2.webp", title: "Áo Thun Hardmode / Black" },
    { image: "../../assets/mixer3.webp", title: "Áo Thun Hardmode / Cream" },
    { image: "../../assets/mixer4.webp", title: "Áo Thun Hardmode / Black" },
  ];
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center mt-10">
      <h2 className="uppercase text-xl text-black font-semibold">
        Bộ phối HARDMODE
      </h2>
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-2">
        {data.map((item, index) => (
          <MixerCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
      <Button text={"Xem thêm"} dropdown size="medium" border />
    </div>
  );
}

export default Mixer;
