import React from 'react'
import { middleList, footerBottomItem } from "../utils/constants"

const Footer = () => {
    return (
        <div className="footer">
            {/* footer top */}
            <div className='w-full bg-white py-6'>
                <div className="w-full border-t-[1px] border-b-[1px] py-8">
                    <div className="w-64 mx-auto text-center flex flex-col gap-1">
                        <p className="text-sm">See Personalized Recommendations</p>
                        <a href="/login">
                            <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">Sign In</button>
                        </a>
                        <p className="text-sm mt-1">
                            New Customer? <a href="signup" > <span className="text-blue-600 ml-1 cursor-pointer hover:underline hover:text-yellow-500">Start here.</span></a>
                        </p>
                    </div>
                </div>
            </div>

            {/* footer middle */}
            <div className="w-full bg-amazonclone-light_blue text-white">
                <div className="w-full border-b-[1px] border-gray-500 py-10">
                    <div className="max-w-5xl mx-auto text-gray-300">
                        <div className="w-full grid grid-cols-4 place-items-center items-start">
                            {middleList.map((item) => (
                                <div>
                                    <h3 className="text-white text-base font-semibold mb-3">
                                        {item.title}
                                    </h3>
                                    <ul className='flex flex-col gap-2'>
                                        {item.listItem.map((item) => (
                                            item.listData.map((data, i) => (
                                                <li key={i} className='footer-link'>{data}</li>
                                            ))
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className="w-full bg-amazonclone py-8">
                <div className="max-w-5xl mx-auto">
                    <div className="w-full grid grid-cols-4 gap-3 place-content-center text-gray-400">
                        {footerBottomItem.map((item => (
                            <div className="group cursor-pointer" key={item._id}>
                                <h3 className="w-32 font-semibold text-[12px] group-hover:underline text-[#ddd] leading-3 mb-[4px]">
                                    {item.title}
                                </h3>
                                <p className="w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3">{item.des}</p>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer