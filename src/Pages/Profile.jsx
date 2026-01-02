import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaUser, FaEnvelope, FaCamera, FaSave } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
      // Wait for a bit to let Firebase update locally or suggest a reload
      setTimeout(() => window.location.reload(), 1500);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="h-48 bg-gradient-to-r from-[#1CB5E0] to-[#000851] relative">
           <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <div className="relative group">
                <img 
                  src={user?.photoURL || "https://i.pravatar.cc/150"} 
                  alt="Avatar" 
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-lg"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaCamera className="text-white text-xl" />
                  </div>
                )}
              </div>
           </div>
        </div>
        
        <div className="pt-20 pb-12 px-8 text-center">
          {!isEditing ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold heading-text-dark-aware">{user?.displayName || "Anonymous User"}</h2>
                <p className="text-blue-500 font-medium">{user?.email}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto py-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center gap-4 text-left">
                  <FaUser className="text-gray-400" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Full Name</p>
                    <p className="font-bold heading-text-dark-aware">{user?.displayName}</p>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center gap-4 text-left">
                  <FaEnvelope className="text-gray-400" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Email Address</p>
                    <p className="font-bold heading-text-dark-aware truncate w-32 md:w-full">{user?.email}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(true)}
                className="btn bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white border-none rounded-2xl px-12 hover:scale-105 transition-transform"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleUpdate} className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Display Name</label>
                <input 
                  name="name" 
                  defaultValue={user?.displayName} 
                  required 
                  className="input w-full rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Photo URL</label>
                <input 
                  name="photo" 
                  defaultValue={user?.photoURL} 
                  required 
                  className="input w-full rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn flex-1 bg-green-500 hover:bg-green-600 text-white border-none rounded-2xl lg:h-14"
                >
                  <FaSave /> {submitting ? "Saving..." : "Save Changes"}
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)}
                  className="btn flex-1 bg-gray-200 dark:bg-gray-800 heading-text-dark-aware border-none rounded-2xl lg:h-14"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
