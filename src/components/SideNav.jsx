import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SideNavContent = ({ title, one, two, three }) => {
    return (
        <div className="py-4 border-b-[1px] border-b-gray-200 bg-white ">
            <h3 className="text-lg  font-semibold mb-1 px-6 text-gray-900">
                {title}
            </h3>
            <ul className="text-sm font-semibold text-gray-600">
                <li className="flex items-center justify-between hover:bg-slate-100 px-6 py-2 cursor-pointer">
                    {one}
                    <span>
                        <ChevronRightIcon />
                    </span>
                </li>
                <li className="flex items-center justify-between hover:bg-slate-100 px-6 py-2 cursor-pointer">
                    {two}
                    <span>
                        <ChevronRightIcon />
                    </span>
                </li>
                <li className="flex items-center justify-between hover:bg-slate-100 px-6 py-2 cursor-pointer">
                    {three}
                    <span>
                        <ChevronRightIcon />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SideNavContent;


