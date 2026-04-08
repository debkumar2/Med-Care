import React from "react";
import assets from "../assets/assets";
import ButtonComp from "./ButtonComp";
import { FaRegCalendar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Doctors", path: "/doctors" },
    { name: "Timetable", path: "/timetable" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full flex items-center justify-between py-6 px-12">
      
      {/* Logo */}
      <NavLink to="/" className="max-w-[180px]">
        <img src={assets.brandLogo} alt="logo" className="w-full h-full" />
      </NavLink>

      {/* Menu */}
      <ul className="flex gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-bold text-[#303334] py-2.5 px-4 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-[#838585] "
                    : "text-[#303334] hover:text-[#18bcc7]"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div>
        <ButtonComp
          icon={<FaRegCalendar />}
          primary={true}
          text="Book Online"
        />
      </div>
    </div>
  );
};

export default Navbar;