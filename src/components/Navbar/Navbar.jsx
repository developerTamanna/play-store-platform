import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
 

  //new loader
  

  // Observe auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully!");
        navigate('/');
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <header className="p-4 bg-black text-white">
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <a href="/" className="flex gap-3 items-center">
          <img
            src="https://img.freepik.com/premium-vector/appstore-icon-printed-paper-appstore-is-online-social-networking-service_773275-3092.jpg"
            alt="AppStore Logo"
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold text-violet-600">AppStore</span>
        </a>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center space-x-6 mx-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-white pb-2 border-b-2 transition-all duration-300 ${
                isActive ? 'border-violet-600' : 'border-transparent hover:border-violet-500'
              }`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `text-white pb-2 border-b-2 transition-all duration-300 ${
                isActive ? 'border-violet-600' : 'border-transparent hover:border-violet-500'
              }`
            }
          >
            MyProfile
          </NavLink>
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              `text-white pb-2 border-b-2 transition-all duration-300 ${
                isActive ? 'border-violet-600' : 'border-transparent hover:border-violet-500'
              }`
            }
          >
            Kids
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="px-6 py-2 hover:border-b-2 hover:border-violet-600"
              >
                Logout
              </button>
              <div className="relative group">
                <img
                  src={user.photoURL || 'https://i.ibb.co/5FG3Lhr/default-profile.png'}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-violet-600 cursor-pointer"
                />
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-white text-black text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-50">
                  {user.displayName || "Anonymous"}
                </span>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className={`px-6 py-2 hover:border-b-2 hover:border-violet-600 ${
                  pathname === "/login" ? "border-2 border-blue-500" : ""
                }`}
              >
                Log in
              </button>
              <FaUserCircle className="text-3xl text-white" />
            </>
          )}
        </div>

        {/* Hamburger */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black text-white p-4">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block pb-2 ${isActive ? 'border-b-2 border-violet-600' : ''}`
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `block pb-2 ${isActive ? 'border-b-2 border-violet-600' : ''}`
                }
              >
                MyProfile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kids"
                className={({ isActive }) =>
                  `block pb-2 ${isActive ? 'border-b-2 border-violet-600' : ''}`
                }
              >
                Kids
              </NavLink>
            </li>
            <li className="flex items-center gap-2">
              {user ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                  <span>{user.displayName?.split(" ")[0]}</span>
                </>
              ) : (
                <>
                  <button onClick={() => navigate("/login")}>Login</button>
                  <FaUserCircle className="text-2xl" />
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
