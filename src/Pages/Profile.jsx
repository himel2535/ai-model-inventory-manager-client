import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const token = await user.getIdToken();
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${user.email}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setUserData(data);
      setLoading(false);
    };

    if (user?.email) loadUser();
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = await user.getIdToken();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${user.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, photo }),
      }
    );

    if (res.ok) {
      toast.success("Profile updated");
      setUserData({ ...userData, name, photo });
      setIsEditing(false);
    } else {
      toast.error("Update failed");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <img
          src={userData.photo}
          className="w-32 h-32 mx-auto rounded-full"
        />

        <h2 className="text-3xl font-bold mt-4">{userData.name}</h2>
        <p className="text-blue-500">{userData.email}</p>

        <div className="mt-4">
          {userData.role === "admin" ? (
            <span className="badge badge-error">ADMIN</span>
          ) : (
            <span className="badge badge-info">USER</span>
          )}
        </div>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary mt-6"
          >
            Edit Profile
          </button>
        ) : (
          <form onSubmit={handleUpdate} className="mt-6 space-y-4">
            <input
              name="name"
              defaultValue={userData.name}
              className="input w-full"
            />
            <input
              name="photo"
              defaultValue={userData.photo}
              className="input w-full"
            />
            <button className="btn btn-success w-full">Save</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
