function TitleAbout({ title, p }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <h2 className="text-[22px] font-extrabold">{title}</h2>
      <p className="text-gray-400 text-center text-xs">{p}</p>
    </div>
  );
}

export default TitleAbout;
