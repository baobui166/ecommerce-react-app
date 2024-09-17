export async function login({ username, password }) {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const data = await response.json();

  return data;
}
