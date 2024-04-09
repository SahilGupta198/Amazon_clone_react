import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, LowerNavbar } from "./";
import { useState } from "react";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  const [Lang, setLang] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="min-w-[1000px] ">
      <div className="flex bg-amazonclone text-white h-[60px] ">

        {/* Left */}
        <div className="flex items-center m-4">
          <Link className="flex justify-center items-center" to={"/"}>
            <img
              className="h-[32px] w-[100px]"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
            <span className="text-sm font-semibold self-start">.in</span>
          </Link>
          <div className="pl-4 pr-2 flex items-center">
            <img src={"../images/location.png"} className="w-4" alt="loc-icon" />
            <div>
              <div className="text-xs text-gray-300 leading-3">Delivering to Delhi 110031</div>
              <div className="text-sm font-bold">Update location</div>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* Right */}
        <div className="flex items-center justify-center ml-4">
          <img src={"../images/flag-india.png"} className="w-6 " alt="lang-icon" />
          <select
            onChange={(e) => setLang(e.target.value)}
            className=" bg-amazonclone text-white text-xs xl:text-sm outline-none font-bold">
            <option> EN</option>
            <option>HI</option>
          </select>
        </div>
        <div className="flex items-center ">
          <div className="relative z-30 inline-block text-left">
            <div>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex justify-center items-end w-full px-4 text-sm  text-white" id="options-menu" aria-expanded="true" aria-haspopup="true">
                <div className="signin-text">
                  <div className="text-xs text-left leading-3">Hello, sign in</div>
                  <div className="text-sm font-bold">Account & Lists</div>
                </div>
                <svg
                  className="-mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute -right-20 top-9 mt-2 w-[30rem] origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="p-4 flex flex-col text-black justify-center items-center">
                  <a href="/login">
                    <button className="w-48 bg-yellow-400 rounded-md py-2 text-xs cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">Sign In</button>
                  </a>
                  <p className=" text-xs mt-1">
                    New Customer? <span className="text-blue-600 ml-1 cursor-pointer">Start here.</span>
                  </p>
                </div>
                <div className="flex justify-between divide-x divide-gray-200  p-3 text-black">
                  <div className="p-4">
                    <p className=" font-semibold">Your Lists</p>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem">Create a Wish List</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Wish from Any Website</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Baby Wishlist</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Discover Your Style</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Explore Showroom</a>
                  </div>

                  <div className="p-4">
                    <p className=" font-semibold">Your Account</p>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem">Your Account</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Order</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Wish List</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Recommendations</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Prime Membership</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Prime Video</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Subscribe & Save Items</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Memberships & Subscriptions</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Seller Account</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Manage Your Content & Devices</a>
                    <a href="#" className="block pt-1 text-sm text-gray-900 hover:underline hover:text-amazonclone-yellow" role="menuitem" >Your Free Amazon Business Account</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-2">
            <div className="text-xs leading-3">Returns</div>
            <div className="text-sm font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[42px]" />
              <div className="relative">
                <div className="absolute right-[7px] bottom-[6px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>

      {/* lower navbar */}
      <LowerNavbar />
    </header>
  );
};

export default NavBar;
