import React from "react";

function LogIn() {
  return (
    <div className="max-w-4xl mx-auto font-sans p-6">
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-4xl underline uppercase">
          <a href="\">log in to blog man</a>
        </h1>
      </div>
      <form>
        <div className="grid sm:grid-cols-2 gap-8 shadow-xl p-5">
          <h1 className="font-semibold text-xl  w-auto h-auto">
            Login Your Account
          </h1>
          <br />
          <hr />
          <br />

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input
              name="email"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent "
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent"
              placeholder="Enter password"
            />
          </div>

          <div>
            <button
              type="button"
              className="bg-blue-600 text-white hover:bg-blue-700 translate-x-2 hover:scale-110 duration-700 py-3 px-7 text-sm font-semibold tracking-wider rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <br />
      <h3>
        Already have an account?
        <a className=" ml-2 text-blue-600" href="/signUp">
          Sign Up
        </a>{" "}
      </h3>
    </div>
  );
}

export default LogIn;
