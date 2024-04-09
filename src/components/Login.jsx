import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    // Firebase Error

    // Loading State start here


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");

    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");

    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (!email) {
            setErrEmail("Enter your email");
        }
        if (!password) {
            setErrPassword("Enter your password");
        }
        if (email && password) {
            console.log(email, password)
            setEmail("")
            setPassword("")
        }
    };
    return (
        <div className="w-full">
            <div className="w-full py-2">
                <form className="w-[350px] mx-auto flex flex-col items-center">
                    <Link className="flex items-center my-2" to="/">
                        <img
                            className="h-[35px] w-[100px]"
                            src={"../images/amazon-dark.png"}
                            alt="Amazon logo"
                        />
                        <span className="text-sm">.in</span>
                    </Link>
                    <div className="w-full border border-zinc-200 px-6 py-4 my-2 rounded-lg shadow-sm">
                        <h2 className="font-titleFont text-3xl font-sm mb-4">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">
                                    Email or mobile phone number
                                </p>
                                <input
                                    onChange={handleEmail}
                                    value={email}
                                    className="w-full lowercase py-0.5 border border-zinc-400 px-2 text-sm rounded-sm outline-none focus-within:outline-yellow-500 focus-within:shadow-amazonInput duration-100"
                                    type="email"
                                />
                                {errEmail && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">!</span>{errEmail}
                                    </p>
                                )}

                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">Password</p>
                                <input
                                    onChange={handlePassword}
                                    value={password}
                                    className="w-full lowercase py-0.5 border border-zinc-400 px-2 text-sm rounded-sm outline-none focus-within:outline-yellow-500 focus-within:shadow-amazonInput duration-100"
                                    type="password"
                                />
                                {errPassword && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>
                                        {errPassword}
                                    </p>
                                )}

                            </div>
                            <button
                                onClick={handleLogin}
                                className="w-full py-1.5 mt-2 text-sm font-normal rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 border active:shadow-amazonInput"
                            >
                                Continue
                            </button>

                        </div>
                        <p className="w-[95%] text-xs text-black leading-4 mt-4">
                            By Continuing, you agree to Amazon's{" "}
                            <span className="text-blue-500">Conditions of Use </span>and{" "}
                            <span className="text-blue-500">Privace Notice.</span>
                        </p>
                        <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                            {"➤"}{" "}
                            <span className="text-blue-500 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                                Need help?
                            </span>
                        </p>
                    </div>
                    <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
                        <span className="w-1/3 h-[1px] bg-zinc-200 inline-flex"></span>
                        <span className="w-1/3 text-center">New to Amazon?</span>
                        <span className="w-1/3 h-[1px] bg-zinc-200 inline-flex"></span>
                    </p>
                    <Link className="w-full" to="/signup">
                        <button className="w-full py-1 mt-4 text-sm font-normal rounded-lg  hover:bg-zinc-100 border border-zinc-200 active:border-yellow-500 active:shadow-amazonInput shadow-sm">
                            Create your Amazon account
                        </button>
                    </Link>
                </form>

            </div>
            <div className="w-full flex flex-col gap-4 justify-center items-center py-10">
                <div className="flex items-center gap-6">
                    <p className="text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                        Conditions of Use
                    </p>
                    <p className="text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                        Privacy Notice
                    </p>
                    <p className="text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                        Help
                    </p>
                </div>
                <p className="text-xs text-gray-600">
                    © 2024-Onwards, Sahilgupta.vercel.app, Inc. or its affiliates
                </p>
            </div>
        </div>
    );
};

export default Signin;