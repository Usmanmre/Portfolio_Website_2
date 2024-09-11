import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import { Link } from "react-scroll";
import favicon from "../Images/favicon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleAbout = () => {
    navigate("/about");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav className="border-gray-200 text-white bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Usman Logo" />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <button
                className="text-sm font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                onClick={handleAbout}
              >
                About
              </button>
            </li>
            {isHomePage && (
              <>
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                >
                  Products
                </Link>
                <Link
                  to="reviews"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                >
                  Reviews
                </Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                >
                  Services
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                >
                  Contact Us
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="bg-black lg:hidden">
        <div className="fixed inset-0 z-10  bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 bg-black z-20 w-1/2 max-w-sm overflow-y-auto text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center  justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={favicon} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 ">
            <div className=" divide-gray-200">
              <div className=" flex flex-col items-start text-white">
                <a
                  href="/about"
                  className="block rounded-lg hover:text-yellow-600  py-2 text-base font-semibold leading-6  "
                >
                  About
                </a>
                {isHomePage && (
                  <>
                    <Link
                      to="products"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="block py-2 text-base font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                    >
                      Products
                    </Link>
                    <Link
                      to="reviews"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="block py-2 text-base font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                    >
                      Reviews
                    </Link>
                    <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                >
                  Services
                </Link>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="block py-2 text-base font-semibold leading-6 cursor-pointer hover:text-yellow-600"
                    >
                      Contact Us
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}

export default Navbar;
