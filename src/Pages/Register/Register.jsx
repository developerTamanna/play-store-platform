import React, { useContext, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { valueContext } from '../../RootLayout/RootLayout';

const Register = () => {

//title set
   useEffect(()=>{
    document.title = "Register | Apps"
   },[])

  //next
  const { handleRegister, handleGoogleLogin } = useContext(valueContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must include at least one uppercase letter!");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must include at least one lowercase letter!");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }

    const result = await handleRegister(name, email, password, photo);
    if (result.success) {
      toast.success("Registration successful!");
    } else {
      toast.error(`Registration failed! ${result.error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await handleGoogleLogin();
    if (result.success) {
      toast.success("Google login successful!");
    } else {
      toast.error(`Google login failed! ${result.error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name='name'
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              name='photo'
              type="url"
              placeholder="Enter photo URL (optional)"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name='password'
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-violet-600 hover:underline">Login</a>
        </p>

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

export default Register;
