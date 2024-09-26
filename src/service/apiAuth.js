export const login = async (username, password) => {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://dummyjson.com/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Login failed!");
  }

  const data = await response.json();

  return data;
};
