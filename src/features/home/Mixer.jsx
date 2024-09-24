import Button from "../../ui/Button";
import MixerCard from "./MixerCard";

function Mixer() {
  const data = [
    {
      image:
        "https://theme.hstatic.net/200000260587/1001225543/14/lookbook_1_image.jpg?v=294",
      title: "Áo Thun Hardmode / Cream",
    },
    {
      image:
        "https://theme.hstatic.net/200000260587/1001225543/14/lookbook_2_image.jpg?v=294",
      title: "Áo Thun Hardmode / Black",
    },
    {
      image:
        "https://theme.hstatic.net/200000260587/1001225543/14/lookbook_3_image.jpg?v=294",
      title: "Áo Thun Hardmode / Cream",
    },
    {
      image:
        "https://theme.hstatic.net/200000260587/1001225543/14/lookbook_4_image.jpg?v=294",
      title: "Áo Thun Hardmode / Black",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center mt-10">
      <h2 className="uppercase text-xl text-black font-semibold">
        Bộ phối HARDMODE
      </h2>
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-2">
        {data.map((item, index) => (
          <MixerCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
      <div className="w-[15%] mx-auto">
        <Button text={"Xem thêm"} dropdown size="medium" border />
      </div>
    </div>
  );
}

export default Mixer;
