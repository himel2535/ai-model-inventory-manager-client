import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import LoadingLine from "./LoadingLine";

const Register = () => {
  const { signInWithGoogle, createUser, updateUserProfile } = use(AuthContext);

  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  // ----Handle Email Signin----
  const handleEmailSignIn = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

 
    if (!hasUpperCase) {
      toast.error("Password must contain at least one uppercase letter.");
      setSubmitting(false); 
      return;
    }

    if (!hasLowerCase) {
      toast.error("Password must contain at least one lowercase letter.");
      setSubmitting(false); 
      return;
    }

    if (!isValidLength) {
      toast.error("Password must be at least 6 characters long.");
      setSubmitting(false); 
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result)
        updateUserProfile({ displayName, photoURL });
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Email already in use or invalid credentials.");
      })
      .finally(() => {
        setSubmitting(false); 
      });
  };


  // ----handle google sign in----

  const handleGoogleSignIn = () => {
    setSubmitting(true);
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
        toast("Something Wrong With", error.massage);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className=" flex flex-col gap-12 items-center justify-center">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mt-14 ">
        <span className="text-gray-700">Register for</span> <br />{" "}
        <span className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent">
          AI Model Inventory Manager
        </span>
      </h1>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleEmailSignIn}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="displayName"
                className="input rounded-lg  focus:border-0 focus:outline-gray-200"
                placeholder="Name"
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input rounded-lg  focus:border-0 focus:outline-gray-200"
                placeholder="Photo URL"
              />
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-lg  focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />
              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-lg  focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 " disabled={submitting}>
                {submitting ? "Registering..." : "Register"}
              </button>
              {submitting && (
                <div>
                  <LoadingLine></LoadingLine>
                </div>
              )}
            </fieldset>
          </form>

          {/* Google */}
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
            Register our website? Please{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
