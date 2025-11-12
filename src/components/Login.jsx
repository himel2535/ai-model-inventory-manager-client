import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import LoadingLine from "../components/LoadingLine";

const Login = () => {
  const { signInWithGoogle, signInUser } = use(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ----Email Sign In----
  const handleSignIn = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(location.state || "/");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid email or password");
      })
      .finally(() => setSubmitting(false));
  };

  // ---Google Sign In---
  const handleGoogleSignIn = () => {
    setSubmitting(true);
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mt-14 ">
        <span className="text-gray-700">Login for</span> <br />
        <span className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent">
          AI Model Inventory Manager
        </span>
      </h1>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Password"
                required
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="btn w-full mt-6 disabled:opacity-70 text-white"
                disabled={submitting}
              >
                {submitting ? "Logging in..." : "Login"}
              </button>

              {submitting && (
                <div className="mt-4">
                  <LoadingLine />
                </div>
              )}
            </fieldset>
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignIn}
            className="btn mt-4 w-full disabled:opacity-70"
            disabled={submitting}
          >
            {submitting ? (
              "Signing in with Google..."
            ) : (
              <>
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
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
                <span className="ml-2">Login with Google</span>
              </>
            )}
          </button>

          {submitting && (
            <div className="mt-4">
              <LoadingLine />
            </div>
          )}

          <p className="text-center mt-3">
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
