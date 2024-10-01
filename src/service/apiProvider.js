export const getAllProvider = async () => {
  const response = await fetch("https://provinces.open-api.vn/api/");

  if (!response.ok) {
    throw new Error("Fail fetching provider api");
  }

  const data = response.json();

  return data;
};
