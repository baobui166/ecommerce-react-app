function NotFound({ query }) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <p className="text-xl">Không tìm thấy nội dung bạn yêu cầu</p>
      <p className="text-gray-400 text-xs">
        Không tìm thấy <span className="text-black">{query}</span>. Vui lòng
        kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!
      </p>
    </div>
  );
}

export default NotFound;
