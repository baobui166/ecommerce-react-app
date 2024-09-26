function Topbar() {
  const topbar = [
    "HardMode is comming back!!!",
    "Giao hàng miễn phí toàn quốc với đơn hàng trên 50.000đ",
    "HardMode - Everyday Urban Sweater",
  ];
  return (
    <div className="h-[20px] bg-black flex items-center text-xs justify-center py-4">
      <span className="text-white">{topbar[0]}</span>
    </div>
  );
}

export default Topbar;
