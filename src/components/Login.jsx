import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 rounded-lg">Login</button>
            </fieldset>
          </form>

          {/* Google */}
          <button className="btn ">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                {/* <path d="m0 0H512V512H0" fill="#fff"></path> */}
                <path
                  fill="#ea4335"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#34a853"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-center">
            New to our website? Please{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
