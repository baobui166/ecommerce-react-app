function MixerCard({ image, title }) {
  console.log(image);
  return (
    <div className="w-[300px] h-[400px] relative group overflow-hidden">
      <img src={image} alt="Mixer" className="object-cover" />
      <span className="block absolute text-[22px] font-bold text-black bottom-1 left-[10%] group-hover:bottom-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
        {title}
      </span>
    </div>
  );
}

export default MixerCard;
