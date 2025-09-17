import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { auth } from "../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const valueContext = createContext();

const RootLayout = () => {
  const [user, setUser] = useState(null);
  // console.log(user)

  //loader
  const [loading, setLoading] = useState(true);

  //new
  const location = useLocation();
  const from = location?.state?.from;
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      navigate(from ? from : "/");
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error };
    }
  };

  const handleRegister = async (name, email, password, photo) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photo,
      });
      setUser(userCredential.user);
      navigate(from ? from : "/");
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error };
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate(from ? from : "/");
      return { success: true, user: result.user };
    } catch (error) {
      return { success: false, error };
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('Auth changed:', currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe(); // cleanup
    };
  }, []);

  const authContextValue = {
    user,
    handleLogin,
    handleRegister,
    handleGoogleLogin,
    loading,
    setLoading,
    setUser,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <valueContext.Provider value={authContextValue}>
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>
        <main className="flex-grow w-full mx-auto">
          <Outlet />
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </valueContext.Provider>
    </div>
  );
};

export default RootLayout;
