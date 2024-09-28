export const getAllCartByUser = async (userId) => {
  const response = await fetch(`https://dummyjson.com/carts/user/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const data = await response.json();
  return data;
};

export const addToCart = async (userId, productId, quantity) => {
  const response = await fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      products: [{ productId, quantity }],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add product to cart");
  }

  const data = await response.json();

  return data;
};
