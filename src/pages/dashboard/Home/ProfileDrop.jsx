import React, { useState, useEffect, useRef } from "react";
import {
  useGetFirstName,
  useGetLastName,
} from "../../../components/customHook/customHook";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../../assets/logo/Untitled-7-1024.webp";

const ProfileDropdown = () => {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const nav = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isopen, setisopen] = useState(false);
  const dropdownRef = useRef(null);

  const fName = useGetFirstName();
  const lName = useGetLastName();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggledropdown = () => {
    setisopen(!isopen);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    setCookie("access_token", "");
    localStorage.clear();
    nav("/");
  };

  return (
    <div
      className="relative inline-block text-left mr-10 md:mr-0"
      ref={dropdownRef}
    >
      {/* Profile Icon */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-full bg-gray-800 p-0.5  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <img src={bg} alt="Profile" className="rounded-full h-8 w-8" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              👋 Hello, {fName} {lName}
            </span>
            <button
              onClick={toggledropdown}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
            >
              Dashboard
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isopen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/user-profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Profile
                  </Link>
                  <a
                    href="/events"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Events
                  </a>
                  <a
                    href="/payments"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Payments
                  </a>
                  <a
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
            <span
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
