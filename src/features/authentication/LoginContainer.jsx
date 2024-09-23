import { useState } from "react";
import RegisterWithPhoneNumber from "./RegisterWithPhoneNumber";
import RegisterWithEmail from "./RegisterWithEmail";
import LoginForm from "./LoginForm";
import useAuth from "../../context/contextAuth";

import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const [login, setLogin] = useState("login");
  const [register, setRegister] = useState("numberphone");
  const [userName, setUserName] = useState("jamesd");
  const [password, setPassword] = useState("jamesdpass");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
          expiresInMins: 30,
        }),
      });
      if (!res.ok) throw new Error("Failed to fetch data");
      const result = await res.json();
      setUser(result);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex w-[70vh] h-[70vh] items-center justify-center text-4xl mx-auto">
        <i className="fa-solid fa-spinner loading"></i>
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="lg:w-[30%] px-2 mx-auto my-20 p-2 shadow-xl rounded-md">
      <div className="flex items-center justify-center gap-20 uppercase font-bold text-gray-400">
        <span
          className={`${
            login === "login" ? "text-black border-b border-b-black" : ""
          } cursor-pointer`}
          onClick={() => setLogin("login")}
        >
          đăng nhập
        </span>
        <span
          className={`${
            login === "register" ? "text-black border-b border-b-black" : ""
          } cursor-pointer`}
          onClick={() => setLogin("register")}
        >
          đăng kí
        </span>
      </div>
      {login === "login" && (
        <div>
          <LoginForm
            handleSubmit={handleSubmit}
            userName={userName}
            password={password}
            setUserName={setUserName}
            setPassword={setPassword}
            isLoadingLogin={loading}
          />
        </div>
      )}
      {login === "register" && (
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 justify-center text-black text-[24px] mt-3">
            <div className="flex items-center gap-2">
              <input
                onChange={() => setRegister("numberphone")}
                type="radio"
                name="checkboxGroup"
                className="form-radio text-black"
                checked={register === "numberphone"}
              />
              <span>Số điện thoại</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                onChange={() => setRegister("email")}
                type="radio"
                name="checkboxGroup"
              />
              <span>Email</span>
            </div>
            <div></div>
          </div>
          {register === "numberphone" && (
            <RegisterWithPhoneNumber register={register} />
          )}
          {register === "email" && <RegisterWithEmail />}
        </div>
      )}
    </div>
  );
}

export default LoginContainer;
