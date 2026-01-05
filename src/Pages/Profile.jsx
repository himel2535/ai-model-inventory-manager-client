import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserEdit, FaSave, FaTimes, FaCamera, FaEnvelope, FaIdBadge } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      if (!user?.email) return;
      try {
        const token = await user.getIdToken();
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/users/${user.email}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = await user.getIdToken();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    try {
      // FIX: Use /users endpoint (not /users/:email) and include email in body
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          email: user.email, 
          name, 
          photo 
        }),
      });

      if (res.ok) {
        toast.success("Profile updated successfully");
        setUserData({ ...userData, name, photo });
        setIsEditing(false);
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred");
    }
  };

  if (loading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
       {/* Background decorations */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[100px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden z-10 relative border border-gray-100 dark:border-gray-700"
      >
        {/* Header Gradient */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="px-8 pb-10">
          <div className="relative flex flex-col items-center -mt-16 mb-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative p-1 bg-white dark:bg-gray-800 rounded-full"
            >
              <img
                src={userData?.photo || user?.photoURL}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
              <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-white dark:border-gray-800"></div>
            </motion.div>
            
            {!isEditing && (
              <div className="text-center mt-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{userData?.name || "User"}</h2>
                <div className="flex items-center justify-center gap-2 mt-1 text-gray-500 dark:text-gray-400">
                  <FaEnvelope className="text-sm" />
                  <span>{userData?.email}</span>
                </div>
                <div className="mt-4">
                   <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm ${
                     userData?.role === "admin" 
                      ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" 
                      : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                   }`}>
                     {userData?.role || "USER"}
                   </span>
                </div>
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            {!isEditing ? (
              <motion.div
                key="view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-center"
              >
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaUserEdit /> Edit Profile
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="edit"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleUpdate}
                className="max-w-lg mx-auto space-y-5"
              >
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                    <FaIdBadge /> Full Name
                  </label>
                  <input
                    name="name"
                    defaultValue={userData?.name}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                    <FaCamera /> Photo URL
                  </label>
                  <input
                    name="photo"
                    defaultValue={userData?.photo}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-mono text-gray-600"
                    placeholder="https://..."
                  />
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaTimes /> Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <FaSave /> Save Changes
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
