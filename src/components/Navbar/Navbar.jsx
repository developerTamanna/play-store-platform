import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

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
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <header className="w-full bg-primary text-white shadow-lg fixed top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center h-16 px-4 lg:container">
        {/* Logo */}
        <a href="/" className="flex gap-3 items-center">
          <img
            src="https://img.freepik.com/premium-vector/appstore-icon-printed-paper-appstore-is-online-social-networking-service_773275-3092.jpg"
            alt="AppStore Logo"
            className="w-10 h-10 rounded-full border-2 border-violet-500 shadow-md"
          />
          <span
            className="text-2xl font-bold text-white tooltip tooltip-bottom"
            data-tip="Welcome to App Store"
          >
            App Store
          </span>
        </a>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center space-x-8 mx-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg transition-all duration-300 flex items-center ${
                isActive
                  ? "bg-violet-600 text-white shadow-md"
                  : " hover:bg-violet-700 hover:text-white"
              }`
            }
          >
            <span className="mr-1"></span> Apps
          </NavLink>
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `py-2 px-4 rounded-lg transition-all duration-300 flex items-center ${
                  isActive
                    ? "bg-violet-600 text-white shadow-md"
                    : " hover:bg-violet-700"
                }`
              }
            >
              <span className="mr-1"></span> MyProfile
            </NavLink>
          )}
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              `py-2 px-4 rounded-lg transition-all duration-300 flex items-center ${
                isActive
                  ? "bg-violet-600 text-white shadow-md"
                  : " hover:bg-violet-700 hover:text-white"
              }`
            }
          >
            <span className="mr-1"></span> Kids
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:from-red-600 hover:to-red-800 transition-all shadow-md font-bold"
              >
                Logout
              </button>
              <div className="relative group">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/5FG3Lhr/default-profile.png"
                  }
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-violet-500 cursor-pointer shadow-md"
                />
                <span className="absolute left-1/2 -translate-x-1/2 top-12 bg-violet-600 text-white text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-50 whitespace-nowrap">
                  {user.displayName || "Anonymous"}
                </span>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className={`px-6 font-bold py-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-lg hover:from-blue-600 hover:to-violet-700 transition-all shadow-md ${
                  pathname === "/login" ? "ring-2 ring-blue-400" : ""
                }`}
              >
                Log in
              </button>
              {/* <FaUserCircle className="text-3xl text-violet-400" /> */}
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-violet-400 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-purple-900 to-black text-white p-4 shadow-inner">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-lg transition-all ${
                    isActive
                      ? "bg-violet-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-violet-700"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">📱</span> Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-lg transition-all ${
                    isActive
                      ? "bg-violet-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-violet-700"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">👤</span> MyProfile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kids"
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-lg transition-all ${
                    isActive
                      ? "bg-violet-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-violet-700"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">🧒</span> Kids
              </NavLink>
            </li>
            <li className="pt-4 border-t border-violet-700">
              {user ? (
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/5FG3Lhr/default-profile.png"
                      }
                      alt="profile"
                      className="w-8 h-8 rounded-full border-2 border-violet-500 mr-3"
                    />
                    <span className="text-violet-300">
                      {user.displayName?.split(" ")[0]}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">Not logged in</span>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-lg hover:from-blue-600 hover:to-violet-700 transition-all"
                  >
                    Login
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
