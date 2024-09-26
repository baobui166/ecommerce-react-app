export const getAllCartByUser = async (id) => {
  const response = await fetch(`https://dummyjson.com/carts/user/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const data = await response.json();

  return data;
};

export const addToCart = async (product) => {
  const response = fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch add a new cart");
  }

  const data = await response.json();

  return data;
};
