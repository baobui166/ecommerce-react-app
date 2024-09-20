function Footer() {
  return (
    <div className="w-full border-t mt-10  p-5">
      <div className="w-[80%] flex items-center md:items-start justify-center md:justify-start flex-col md:flex-row mx-auto">
        <div className="flex flex-col flex-2 gap-5 md:w-[30%]">
          <h2 className="uppercase text-center md:text-start text-[24px]">
            về chúng tôi
          </h2>
          <h2 className="text-[26px] font-extrabold">Hardmode®</h2>
          <h3 className="text-[18px] text-gray-300 -mt-2">
            Everyday Urban Streetwear
          </h3>
          <h3 className="text-[18px] text-gray-300">
            © Bản quyền thuộc về Hardmode
          </h3>
        </div>
        <div className="flex-3 mt-5 md:mt-0 flex flex-col gap-5 w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <h2 className="uppercase text-center md:text-start text-[24px] mb-[20px]">
                Liên hệ
              </h2>
              <ul className="flex flex-col gap3">
                <li className="flex flex-col gap-[1px]">
                  <span className="text-[18px] text-gray-400">Điện thoại</span>
                  <span className="text-[18px] text-black">0847522269</span>
                </li>
                <li className="flex flex-col gap-[2px]">
                  <span className="text-[18px] text-gray-400">Email CSKH</span>
                  <span className="text-[18px] text-black">
                    hardmode.vn@gmail.com
                  </span>
                </li>
                <li className="flex flex-col gap-[2px]">
                  <span className="text-[18px] text-gray-400">
                    Email Liên hệ Công Việc
                  </span>
                  <span className="text-[18px] text-black">
                    hardmode.vn@gmail.com
                  </span>
                </li>
                <li className="flex flex-col gap-[2px]">
                  <span className="text-[18px] text-gray-400">
                    Thứ hai - Chủ nhật
                  </span>
                  <span className="text-[18px] text-black">9h20 - 21h30</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="uppercase text-center md:text-start text-[24px] mb-[20px]">
                Hỗ trợ
              </h2>
              <ul className="text-[18px] text-gray-400 flex flex-col gap-3">
                <li className="hover:text-black hover:scale-y-105 transition-all duration-300 cursor-pointer">
                  Tài khoản{" "}
                </li>
                <li className="hover:text-black hover:scale-y-105 transition-all duration-300 cursor-pointer">
                  Chính sách đổi trả
                </li>
                <li className="hover:text-black hover:scale-y-105 transition-all duration-300 cursor-pointer">
                  Chính Sách vận chuyển
                </li>
                <li className="hover:text-black hover:scale-y-105 transition-all duration-300 cursor-pointer">
                  Hướng dẫn mua hàng
                </li>
                <li className="hover:text-black hover:scale-y-105 transition-all duration-300 cursor-pointer">
                  Hướng dẫn bảo quản sản phẩm
                </li>
                <li className="hover:text-black hover:scale-y-105 transition-all duration-300 cursor-pointer">
                  Hướng dẫn quay video đóng gói mở hàng
                </li>
              </ul>
            </div>
            <div>
              <h2 className="uppercase text-center md:text-start text-[24px] mb-[20px]">
                Hệ thống cửa hàng
              </h2>
              <p className="text-[18px] text-gray-400">
                Hiện tại Hardmode® chỉ hoạt động kinh doanh qua các kênh trực
                tuyến: Website, Facebook, Instagram, Shopee, Lazada & Tiktok
                shop.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <h2 className="uppercase text-center md:text-start text-[24px]">
              Đăng kí nhận tin
            </h2>
            <div className=" flex flex-col gap-5 md:flex-row items-center justify-between">
              <form className="border mt-4 flex p-[5px] pl-2">
                <input
                  type="text"
                  className="outline-none border-none p2"
                  placeholder="Nhập email của bạn"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-2 py-1 "
                >
                  Đăng ký
                </button>
              </form>

              <div className="flex items-center gap-3">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
