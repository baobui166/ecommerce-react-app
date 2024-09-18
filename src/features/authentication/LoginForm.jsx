function LoginForm() {
  return (
    <div className="w-screen h-screen">
      <div className="w-32 mx-auto p-5">
        <h1 className="font-medium text-red-300 uppercase">Login</h1>
        <div>
          <label htmlFor="">Enter your account</label>
          <input type="text" placeholder="usename" />
        </div>
        <div>
          <label htmlFor="">Enter your password</label>
          <input
            type="password"
            placeholder="password"
            className="outline-none border-none p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
