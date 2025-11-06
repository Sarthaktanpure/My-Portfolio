import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 flex items-center justify-between px-10 py-4">
      {/* Left Side - Name / Logo */}
      <div className="text-2xl font-bold tracking-wide">
        Sarthak<span className="text-yellow-400"></span>
      </div>

      {/* Right Side - Navigation Links */}
      <ul className="flex gap-8 text-lg">
        <li>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
        </li>
        {/* <li>
          <a href="" className="hover:text-yellow-400 transition">
            Skills
          </a>
        </li> */}
        <li>
          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
