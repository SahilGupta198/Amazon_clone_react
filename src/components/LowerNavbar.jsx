import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { SideNav } from ".";

const HeaderBottom = () => {
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSidebar(false);
            }
        }); 
    }, [ref, sidebar]);
    return (
        <div className="w-full px-4 h-[40px] bg-amazonclone-light_blue text-white flex items-center ">
            {/*List Items Start here*/}
            <ul className=" w-full flex items-center justify-between gap-2 text-sm font-semibold pr-8">
                <li onClick={() => setSidebar(true)} className=" flex items-center gap-1 font-bold hover:underline hover:cursor-pointer"><Bars3Icon className="text-white hover:cursor-pointer w-7 duration-300" />All</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Fresh</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Amazon miniTV</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Sell</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Best Seller</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Mobile</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Today's Deals</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">prime</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Customer Service</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Electronics</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">New Releases</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Home & Kitchen</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Amazon Pay</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Fashion</li>
                <li className="hidden md:inline-flex hover:underline hover:cursor-pointer">Gift Ideas</li>
            </ul>
            {/*List Items End sidebar start*/}
            {sidebar && (
                <div className=" h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-30 z-40 " id="side-nav">
                    <div className="w-full h-full relative">
                        <motion.div
                            ref={ref}
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-[300px] md:w-[365px] h-full bg-amazonclone-light_blue shadow-black shadow-xl overflow-scroll">
                            <div className="w-full bg-amazon_light text-white py-2 px-8 flex items-center gap-2">
                                <UserCircleIcon className="w-8" />
                                <h3 className="font-titleFont font-bold text-lg tracking-wide ">Hello, sign in</h3>
                            </div>
                            <SideNav
                                title="Trending"
                                one="Best Sellers"
                                two="New Releases"
                                three="Movers & Shakers"
                            />
                            <SideNav
                                title="Digital Content & Devices"
                                one="Amazon miniTV - Free Entertainment"
                                two="Kindle E-readers & Books"
                                three="Audible Audiobooks"
                            />
                            <SideNav
                                title="Shop By Category"
                                one="Mobiles, Computers"
                                two="TV, Appliances, Electronics"
                                three="Smart Home"
                            />
                            <SideNav
                                title="Programs & Features"
                                one="AmazonPay"
                                two="Amazon Launchpad"
                                three="Handloom & Handicrafts"
                            />
                            <SideNav
                                title="Help & Settings"
                                one="Your Account"
                                two="Customer Service"
                                three="Sign In"
                            />
                            <span
                                onClick={() => setSidebar(false)}
                                className="cursor-pointer absolute top-3 left-[300px] md:left-[370px] w-8 h-8 text-white flex items-center justify-center hover:cursor-pointer duration-300">
                                <XMarkIcon />
                            </span>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderBottom;