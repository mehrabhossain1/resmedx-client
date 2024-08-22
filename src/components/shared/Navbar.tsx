"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.jpg";
import { useState } from "react";

const Navbar = () => {
  // Example state to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Function to handle logout (this should be updated to actually perform logout)
  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false); // Update state to reflect logged out status
  };

  return (
    <div className="navbar bg-[#FAF5EC] h-20 font-semibold text-gray-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/notice">Notice</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/specific-journal">Request For Specific Journal</Link>
            </li>
          </ul>
        </div>
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-base">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base">
            <Link href="/notice">Notice</Link>
          </li>
          <li className="text-base">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-base">
            <Link href="/specific-journal">Request For Specific Journal</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <Link href="/auth/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
