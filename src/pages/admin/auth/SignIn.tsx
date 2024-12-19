import "./signin.css";

function SignIn() {
  return (
    <div className="signin-container">
      <div className="blob-c">
        <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
      </div>
      <div className="w-[350px] min-h-[500px] rounded-md bg-gradient-to-bl from-[#01301e] to-[#00130c] opa z-10 border border-[#349b7c] p-7">
        <h1 className=" text-3xl font-bold text-[#2bd1a8]">Welcome Back!</h1>
        <p className="mt-2 text-xl">Let's get you logged in.</p>

        <form action="submit" className="mt-10">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            className="focus:border-[2px] mt-1 mb-4 p-2 bg-gradient-to-b from-[#0a3830] to-[#06221a] w-full min-h-10  rounded-md border border-[#349b7c] placeholder:text-sm placeholder:text-gray-500 text-[#26e7ad]"
          />
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            placeholder="Enter you password"
            type="password"
            name="password"
            id="password"
            className="focus:border-[2px] mt-1 p-2 bg-gradient-to-b from-[#0a3830] to-[#06221a] w-full min-h-10  rounded-md border border-[#349b7c] placeholder:text-sm placeholder:text-gray-500 text-[#26e7ad]"
          />
          <button
            type="submit"
            className=" mt-10 w-full bg-gradient-to-b from-[#0ab290] to-[#004136] hover:from-[#00ffbf] hover:to-[#006b49] min-h-10 rounded-md text-center uppercase font-semibold"
          >
            Log in
          </button>
          <p className="text-sm mt-5 text-center text-[#13debc] hover:text-[#6fffd6] cursor-pointer">
            forgot password?
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
