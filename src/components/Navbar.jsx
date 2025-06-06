import React, { useState } from "react";
//import React from "react";

import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/constants";
import { menu, close, pbonzai } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  //  return <div>farahnavbar</div>;
  const linkStyle = {
    textTransform: 'uppercase',
   // fontWeight: 'light',  // Lightweight font style

   // color: active? '#ffffff':'#f9d9ff',                // White text color for better contrast
    textDecoration: 'none',
   // fontSize: '24px',                 // Adjust font size to your preference
    position: 'relative',
    transition: 'color 0.3s ease, text-shadow 0.3s ease', // Smooth color and shadow transition
    textShadow: active 
      ? '0 20px 10px rgba(223, 43, 226, 0.4)'             // Violet shadow on click, larger spread
      : '0 4px 6px rgba(223, 43, 226, 0.3)',             // Default subtle shadow
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link

          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); //scroll to tha top of the page
          }}
        >
          <img
            src={pbonzai}
            alt="logo"
            className="w-9 h-9 object-contain -ml-14"
          />
          <p className="text-white text-[18px] font-bold  flex">
            <span className="sm:block hidden"> Farah Bassoumi</span>{" "}
          </p>
        </Link>

        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
            style={linkStyle}
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } text-[18px] font-medium `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4 uppercase">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white underline " : "text-secondary"
                    } hover:text-white text-[16px] font-medium font-poppins `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                    console.log("toggle", toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
