import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUser, FaEnvelope, FaUserShield, FaCalendar } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user?.email) return;
      try {
        const token = await user.getIdToken();
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users/all`, {
          headers: { authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [user]);

  const filteredUsers = users.filter(u => 
    u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <LoadingSpinner fullScreen={false} />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black heading-text-dark-aware tracking-tight">
            All Users
          </h2>
          <p className="text-gray-500 mt-2">
            Manage registered users on the platform
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <span className="text-2xl font-black heading-text-dark-aware">{users.length}</span>
          <span className="text-gray-400 ml-2 text-sm">Total Users</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input w-full rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((userData, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <img
                src={userData.photo || "https://i.pravatar.cc/150"}
                alt={userData.name}
                className="w-16 h-16 rounded-2xl object-cover shadow-lg"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold heading-text-dark-aware truncate">
                  {userData.name || "Anonymous"}
                </h3>
                <p className="text-sm text-gray-500 truncate">{userData.email}</p>
                
                {/* Role Badge */}
                <div className="mt-3">
                  {userData.role === "admin" ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold">
                      <FaUserShield /> Admin
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold">
                      <FaUser /> User
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No users found</p>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
