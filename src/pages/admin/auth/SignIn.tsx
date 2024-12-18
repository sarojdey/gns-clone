import "./signin.css";

function SignIn() {
  return (
    <div className="signin-container">
      <div className="blob-c">
        <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
      </div>
      <div className="w-[350px] min-h-[500px] rounded-md bg-gradient-to-br from-[#011430] to-black opa z-10 border border-[#346e9b] p-7">
        <h1 className=" text-3xl font-bold text-[#2b89d1]">Welcome Back!</h1>
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
            className="focus:border-[2px] mt-1 mb-4 p-2 bg-gradient-to-b from-[#0a1e38] to-[#061222] w-full min-h-10  rounded-md border border-[#346e9b] placeholder:text-sm placeholder:text-slate-500 text-[#4cc9f0]"
          />
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            placeholder="Enter you password"
            type="password"
            name="password"
            id="password"
            className="focus:border-[2px] mt-1 p-2 bg-gradient-to-b from-[#0a1e38] to-[#061222] w-full min-h-10  rounded-md border border-[#346e9b] placeholder:text-sm placeholder:text-slate-500 text-[#4cc9f0]"
          />
          <button
            type="submit"
            className=" mt-10 w-full bg-gradient-to-b from-[#0a61b2] to-[#001a41] hover:from-[#007bff] hover:to-[#001d6b] min-h-10 rounded-md text-center uppercase font-semibold"
          >
            Log in
          </button>
          <p className="text-sm mt-5 text-center text-[#0096f3] hover:text-[#6fc8ff] cursor-pointer">
            forgot password?
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
