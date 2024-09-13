"use client";

import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import ReactIcons from "@/utils/reactIcons";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="dark:bg-black bg-white sticky top-0 z-20">
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <a className="inline-flex text-3xl font-bold leading-none" href="#">
          <ReactIcons name="SiNextdotjs" className="inline-block text-yellow-600" />
          <span className="ml-2 dark:text-white">Next App</span>
        </a>
        <ThemeSwitcher className={"lg:hidden ml-auto"} />
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-yellow-700 p-3"
            onClick={toggleMenu}
          >
            <ReactIcons
              name="MdMenu"
              className="w-9 h-9 text-yellow-700"
            />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-sm text-yellow-700 font-bold hover:text-yellow-600" href="#">
              Home
            </a>
          </li>
          <li className="text-gray-300">
            <ReactIcons name="CiMenuKebab" className="w-6 h-6 text-zinc-900 dark:text-zinc-500" />
          </li>
          <li>
            <a className="text-sm text-yellow-700 font-bold hover:text-yellow-600" href="#">
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <ReactIcons name="CiMenuKebab" className="w-6 h-6 text-zinc-900 dark:text-zinc-500" />
          </li>
          <li>
            <a className="text-sm  text-yellow-700 font-bold hover:text-yellow-600" href="#">
              Services
            </a>
          </li>
          <li className="text-gray-300">
            <ReactIcons name="CiMenuKebab" className="w-6 h-6 text-zinc-900 dark:text-zinc-500" />
          </li>
          <li>
            <a className="text-sm  text-yellow-700 font-bold hover:text-yellow-600" href="#">
              Pricing
            </a>
          </li>
          <li className="text-gray-300">
            <ReactIcons name="CiMenuKebab" className="w-6 h-6 text-zinc-900 dark:text-zinc-500" />
          </li>
          <li>
            <a className="text-sm text-yellow-700 font-bold hover:text-yellow-600" href="#">
              Contact
            </a>
          </li>
        </ul>
        <ThemeSwitcher className={"hidden lg:inline-block"} />
        <a
          className="hidden lg:inline-flex lg:mr-3 py-2 px-6 bg-yellow-700 hover:bg-yellow-600 hover:text-zinc-100 text-md text-white font-bold rounded transition duration-200"
          href="#"
        >
          <ReactIcons name="MdOutlinePhoneInTalk" className="w-6 h-6 mr-3" /> Call Us
        </a>
        {/* <a
          className="hidden lg:inline-block py-2 px-6 bg-black hover:bg-gray-800 text-sm text-white font-bold rounded transition duration-200"
          href="#"
        >
          Sign up
        </a> */}
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black dark:bg-black-light border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <ReactIcons name="SiNextdotjs" className="inline-block text-yellow-600" />
            <span className="ml-2 dark:text-white text-zinc-300">Next App</span>
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <ReactIcons name="MdOutlineClose" className="w-9 h-9 text-yellow-700" />
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign In
              </a>
              {/* <a
                className="block px-4 py-3 mb-2 text-xs text-center font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
                href="#"
              >
                Sign Up
              </a> */}
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
