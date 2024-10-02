export const getAllProducts = async () => {
  const res = await fetch(`https://dummyjson.com/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const data = await res.json();
  return data;
};

export const getAllCategory = async () => {
  const res = await fetch("https://dummyjson.com/products/category-list");

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const data = await res.json();
  return data;
};

export const getProductDetail = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const data = await res.json();
  return data;
};

export const searchProduct = async (query) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );

  if (!response.ok) {
    throw new Error("Invalid fetch search product");
  }

  const data = await response.json();

  return data;
};
