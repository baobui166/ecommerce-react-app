import TitleAbout from "./TitleAbout";

function WhyWeDo() {
  const images = [
    "https://file.hstatic.net/200000260587/file/my_new_project_1_3x4_1_17a220d619a14d0d94d0f882217d5800.png",
    "https://file.hstatic.net/200000260587/file/my_new_project_1_3x4_1_17a220d619a14d0d94d0f882217d5800.png",
    "https://file.hstatic.net/200000260587/file/my_new_project_1_3x4_1_17a220d619a14d0d94d0f882217d5800.png",
    "https://file.hstatic.net/200000260587/file/my_new_project_1_3x4_1_17a220d619a14d0d94d0f882217d5800.png",
  ];
  return (
    <div className="flex flex-col gap-3">
      <TitleAbout
        title={"Why we do"}
        p={
          "Hardmode ra đời nhằm mục đích đáp ứng được tất cả các nhu cầu về thời trang của mọi người"
        }
      />

      <div className="">
        <img src={images[0]} alt="" />
      </div>
      <p className="text-gray-400 text-[20px] text-center">
        Chúng tôi muốn, thông qua những thiết kế nổi bật, thời thượng và nền
        tảng đề cao các khía cạnh cá nhân nhằm tìm kiếm sự công nhận từ mọi
        người.
      </p>
    </div>
  );
}

export default WhyWeDo;
