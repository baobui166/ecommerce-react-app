export const login = async (user) => {
  const response = await fetch(
    "https://thingproxy.freeboard.io/fetch/https://dummyjson.com/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed!");
  }

  const data = await response.json();

  return data;
};
