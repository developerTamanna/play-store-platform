import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white px-4 md:px-10 py-10 mt-10">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm lg:container">
          {/* App Store Info */}
          <div>
            <div className="flex gap-2">
              <img
                className="w-10 h-8 "
                src="https://i.postimg.cc/QdWxLnQv/App-Store-Logo-2008.png"
                alt=""
              />
              <h2 className="text-xl font-bold mb-4">App Store</h2>
            </div>
            <p>Discover and manage your favorite apps easily and securely.</p>
          </div>

          {/* Terms & Privacy */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a href="/terms" className="hover:underline">
                  📄 Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  🔐 Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="/developer" className="hover:underline">
                  🧑‍💻 Developer Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} AppStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
