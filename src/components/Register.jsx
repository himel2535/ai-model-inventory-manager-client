import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import LoadingLine from "./LoadingLine";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // -------- EMAIL REGISTER --------
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setEmailLoading(true);

    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      setEmailLoading(false);
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      setEmailLoading(false);
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      setEmailLoading(false);
      return;
    }

    try {
      // 1️⃣ Firebase user create
      const result = await createUser(email, password);
      const token = await result.user.getIdToken();

      // 2️⃣ Save / sync user to MongoDB (NO ROLE)
      await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: displayName,
          email,
          photo: photoURL,
        }),
      });

      toast.success("Registration successful!");
      form.reset();
      navigate(location.state || "/");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    } finally {
      setEmailLoading(false);
    }
  };

  // -------- GOOGLE SIGN IN --------
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);

    try {
      await signInWithGoogle();
      toast.success("Login successful!");
      navigate(location.state || "/");
    } catch (error) {
      console.error(error);
      toast.error("Google sign-in failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center mx-4">
      <h1 className="text-3xl font-bold text-center mt-14">
        Register for <br /> AI Model Inventory Manager
      </h1>

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleEmailSignIn}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="displayName"
                className="input w-full"
                required
              />

              <label className="label">Photo URL</label>
              <input
                name="photoURL"
                className="input w-full"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                required
              />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full pr-12"
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-3 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                className="btn w-full mt-4"
                disabled={emailLoading || googleLoading}
              >
                {emailLoading ? "Registering..." : "Register"}
              </button>

              {emailLoading && <LoadingLine />}
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full mt-4"
            disabled={googleLoading || emailLoading}
          >
            Login with Google
          </button>

          {googleLoading && <LoadingLine />}

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
