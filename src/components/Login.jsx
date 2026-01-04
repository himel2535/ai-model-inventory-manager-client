import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import LoadingLine from "../components/LoadingLine";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // ----Email Sign In----
  const handleSignIn = (e) => {
    e.preventDefault();
    setEmailLoading(true);

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
      .finally(() => setEmailLoading(false));
  };

  // ---Google Sign In---
  const handleGoogleSignIn = () => {
    setGoogleLoading(true);
    signInWithGoogle()
      .then(async (result) => {
        console.log("Google sign-in successful:", result.user);
        
        // Save user to database
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
          role: "user",
        };

        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          });

          const data = await response.json();
          console.log("User saved to database:", data);
          
          if (!response.ok) {
            console.error("Database save failed:", data);
          }
        } catch (dbError) {
          console.error("Database sync error:", dbError);
        }
        
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center mx-4">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mt-14 ">
        <span className="heading-text-dark-aware">Login for</span> <br />
        <span className="flex flex-wrap justify-center gap-x-3">
          {"AI Model Inventory Manager".split(" ").map((word, idx) => (
            <span key={idx} className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent">
              {word}
            </span>
          ))}
        </span>
      </h1>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                id="login-email"
                className="input rounded-lg focus:border-0 focus:outline-gray-200 block w-full"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="login-password"
                  className="input rounded-lg focus:border-0 focus:outline-gray-200 block w-full pr-10"
                  placeholder="Password"
                  required
                />

                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <button
                  type="submit"
                  className="btn w-full text-white bg-gradient-to-r from-[#1CB5E0] to-[#000851] border-none"
                  disabled={emailLoading || googleLoading}
                >
                  {emailLoading ? "Logging in..." : "Login"}
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    type="button" 
                    onClick={() => {
                      document.getElementById('login-email').value = "user@demo.com";
                      document.getElementById('login-password').value = "123456";
                    }}
                    className="btn btn-xs btn-outline"
                  >
                    Demo User
                  </button>
                  <button 
                    type="button" 
                    onClick={() => {
                      document.getElementById('login-email').value = "admin@demo.com";
                      document.getElementById('login-password').value = "123456";
                    }}
                    className="btn btn-xs btn-outline"
                  >
                    Demo Admin
                  </button>
                </div>
              </div>

              {emailLoading && (
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
            disabled={googleLoading || emailLoading}
          >
            {googleLoading ? (
              "Signing in with Google..."
            ) : (
              <>
                {/* Google SVG */}
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

          {googleLoading && (
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
