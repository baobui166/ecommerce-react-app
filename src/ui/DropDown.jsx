function DropDown({ title, data, func = () => {} }) {
  return (
    <select
      onChange={(e) => func(e.target.value)}
      className="block sm:px-4 sm:py-2 px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="">{title}</option>
      {data.map((item, index) => (
        <option key={index} value={item.value || item.codename}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
