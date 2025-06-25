import React, { useContext, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { valueContext } from '../../RootLayout/RootLayout';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  useEffect(() => {
    document.title = "Login | My Apps";
  }, []);

  const { handleLogin, handleGoogleLogin } = useContext(valueContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      return toast.error("Please fill in both fields!");
    }

    const result = await handleLogin(email, password);

    if (result.success) {
      toast.success("Login successful!");
    } else {
      toast.error(`Login failed! ${result?.error?.message || "Unknown error"}`);
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await handleGoogleLogin();
    if (result.success) {
      toast.success("Google login successful!");
    } else {
      toast.error(`Google login failed! ${result?.error?.message || "Unknown error"}`);
    }
  };

  const handleForgotPassword = async () => {
    const email = document.querySelector('input[name="email"]').value;

    if (!email) {
      return toast.error("Please enter your email first.");
    }

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error(error.message || "Failed to send reset email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot password */}
        <p className="text-sm text-center mt-2">
          <button
            onClick={handleForgotPassword}
            className="text-violet-600 hover:underline"
          >
            Forgot Password?
          </button>
        </p>

        {/* Register link */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <a href="/register" className="text-violet-600 hover:underline">Register</a>
        </p>

        {/* Google login */}
        <div className="mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
          >
            <FaGoogle className="text-lg" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
