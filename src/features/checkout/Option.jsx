import useAuth from "../../context/contextAuth";

function Option({ title, price, name, func, check }) {
  const { denomination } = useAuth();
  return (
    <div className="flex items-center justify-between  text-xs">
      <div className="flex gap-2 items-center">
        <input type="radio" name={name} onChange={func} checked={check} />
        <span>{title}</span>
      </div>

      <div>
        {price && (
          <span>
            {denomination}
            {price}
          </span>
        )}
      </div>
    </div>
  );
}

export default Option;
