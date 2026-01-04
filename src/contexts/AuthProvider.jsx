import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);          // firebase user
  const [dbUser, setDbUser] = useState(null);      // mongodb user
  const [loading, setLoading] = useState(true);

  // ---------------- AUTH METHODS ----------------

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = () =>
    signInWithPopup(auth, googleProvider);

  const signOutUser = () => signOut(auth);

  // ---------------- AUTH STATE ----------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        try {
          const token = await currentUser.getIdToken();

          // 🔥 1. Sync user to MongoDB (WITH TOKEN)
          await fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: currentUser.displayName,
              email: currentUser.email,
              photo: currentUser.photoURL,
            }),
          });

          // 🔥 2. Get full user from MongoDB
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/users/${currentUser.email}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );

          const data = await res.json();
          setDbUser(data); // 💥 THIS WAS MISSING

        } catch (err) {
          console.error("Auth sync error:", err);
          setDbUser(null);
        }
      } else {
        setDbUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 Admin derived from MongoDB
  const isAdmin = dbUser?.role === "admin";

  const authInfo = {
    user,
    dbUser,
    isAdmin,
    loading,
    setLoading,  // Add this back for components that use it
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
