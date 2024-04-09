import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    // Error Message start
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassword] = useState("");
    // Loading State start


    // Handle funtion start
    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName("");
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");

    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };
    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setErrCPassword("");
    };

    // Email validation start
    const emailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    // Submit button start
    const handleRegistration = (e) => {
        e.preventDefault();
        if (!clientName) {
            setErrClientName("Enter your name");
        }
        if (!email) {
            setErrEmail("Enter your email");
        } else {
            if (!emailValidation(email)) {
                setErrEmail("Enter a valid email");
            }
        }
        if (!password) {
            setErrPassword("Enter your password");
        } else {
            if (password.length < 6) {
                setErrPassword("Passwords must be at least 6 characters");
            }
        }
        if (!cPassword) {
            setErrCPassword("Confirm your password");
        } else {
            if (cPassword !== password) {
                setErrCPassword("Password not matched");
            }
        }

        if (
            clientName &&
            email &&
            emailValidation(email) &&
            password &&
            password.length >= 6 &&
            cPassword &&
            cPassword === password
        ) {
            // =========== Firebase Registration End here ===============
            setClientName("");
            setEmail("");
            setPassword("");
            setCPassword("");
            setErrCPassword("");
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
                            Create Account
                        </h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">Your name</p>
                                <input
                                    onChange={handleName}
                                    value={clientName}
                                    type="text"
                                    className="w-full lowercase py-0.5 border border-zinc-400 px-2 text-sm rounded-sm outline-none focus-within:outline-yellow-500 focus-within:shadow-amazonInput duration-100"
                                />
                                {errClientName && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>
                                        {errClientName}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">
                                    Email or mobile phone number
                                </p>
                                <input
                                    onChange={handleEmail}
                                    value={email}
                                    type="email"
                                    className="w-full lowercase py-0.5 border border-zinc-400 px-2 text-sm rounded-sm outline-none focus-within:outline-yellow-500 focus-within:shadow-amazonInput duration-100"
                                />
                                {errEmail && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>
                                        {errEmail}
                                    </p>
                                )}

                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">Password</p>
                                <input
                                    value={password}
                                    onChange={handlePassword}
                                    type="password"
                                    className="w-full lowercase py-0.5 border border-zinc-400 px-2 text-sm rounded-sm outline-none focus-within:outline-yellow-500 focus-within:shadow-amazonInput duration-100"
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
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">Re-enter Password</p>
                                <input
                                    onChange={handleCPassword}
                                    value={cPassword}
                                    type="password"
                                    className="w-full lowercase py-0.5 border border-zinc-400 px-2 text-sm rounded-sm outline-none focus-within:outline-yellow-500 focus-within:shadow-amazonInput duration-100"
                                />
                                {errCPassword && (
                                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                        <span className="italic font-titleFont font-extrabold text-base">
                                            !
                                        </span>
                                        {errCPassword}
                                    </p>
                                )}
                                <p className="text-xs text-gray-600">
                                    Passwords must be at least 6 characters.
                                </p>
                            </div>
                            <button
                                onClick={handleRegistration}
                                className="w-full py-1.5 mt-2 text-sm font-normal rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 border active:shadow-amazonInput"
                            >
                                Continue
                            </button>
                        </div>
                        <hr className="my-4" />
                        <p className="text-sm text-black font-semibold ">
                            Buying for work?{" "}
                        </p>
                        <p className="text-sm text-blue-500 hover:text-yellow-500 hover:underline underline-offset-1 cursor-pointer duration-100">
                            Create a free business account
                        </p>
                        <hr className="my-4" />
                        <p className="text-sm text-gray-700 ">
                            Already have an account?{" "}
                            <Link to="/login">
                                <span className="text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                                    Sign in{" "}
                                    <span>
                                        {"➤"}
                                    </span>
                                </span>
                            </Link>
                        </p>
                        <p className="text-xs text-gray-700 leading-5 mt-2">
                            By creating an account or logging in, you agree to Amazon’s{" "}
                            <span className="text-blue-500">Conditions of Use </span>and{" "}
                            <span className="text-blue-500">Privacy Policy.</span>
                        </p>
                    </div>
                </form>
            </div>
            <hr className="mx-40 shadow-sm" />
            <div className="w-full flex flex-col gap-2 justify-center items-center py-10">
                <div className="flex items-center gap-6">
                    <p className="text-xs text-blue-500 hover:text-yellow-500 hover:underline underline-offset-1 cursor-pointer duration-100">
                        Conditions of Use
                    </p>
                    <p className="text-xs text-blue-500 hover:text-yellow-500 hover:underline underline-offset-1 cursor-pointer duration-100">
                        Privacy Notice
                    </p>
                    <p className="text-xs text-blue-500 hover:text-yellow-500 hover:underline underline-offset-1 cursor-pointer duration-100">
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

export default Signup;