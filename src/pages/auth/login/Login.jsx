import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GoInfo } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import Home from "../../home/Home";

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cookies, setCookie] = useCookies(["access_token"]);
  const nav = useNavigate();
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      // For demonstration, just showing a success message
      const response = await axios.post(
        "https://winngoogala.winngooconsultancy.in/api/login",
        data
      );
      if (response.data.message == "Member logged in successfully.") {
        setCookie("access_token", response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("firstname", response.data.data.first_name);
        localStorage.setItem("surname", response.data.data.surname);
        toast.success(
          `${response.data.data.first_name} ${response.data.data.surname} Logged in  successfully`
        );
        nav("/");
      }
    } catch (error) {
      toast.error(`${error.response.data.errors.error}`);
    }
  };

  const handleForgotPassword = () => {
    // Logic for handling password reset
    toast.info("Forgot password functionality is not implemented yet.");
  };

  return (
    <>
      {cookies.access_token ? (
        <>
          <Home />
        </>
      ) : (
        <>
          {" "}
          <div className="flex justify-center items-center w-full h-screen -mb-20 -mt-20">
            <form onSubmit={onSubmit}>
              <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <h1 className="text-xl font-semibold">Welcome back</h1>
                    <small className="text-gray-400 dark:text-gray-200">
                      Sign in to your account to start using Winngoo Gala
                    </small>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-gray-600 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                      className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "focus:border-primary"
                      }`}
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="Enter Email Address"
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 py-1 text-red-500">
                        <GoInfo className="inline" />
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-1 text-gray-600 text-sm font-medium">
                      Password
                    </label>
                    <input
                      type={passwordShow ? "text" : "password"}
                      id="password"
                      {...register("password", {
                        required: "Password is Required",
                      })}
                      className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
                        errors.password
                          ? "border-red-500 focus:border-red-500"
                          : "focus:border-primary"
                      }`}
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    <span
                      onClick={() => setPasswordShow(!passwordShow)}
                      className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none">
                      {passwordShow ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </span>
                    {errors.password && (
                      <span className="flex items-center gap-1 py-1 text-red-500">
                        <GoInfo className="inline" />
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                    onClick={handleForgotPassword}>
                    Forgot Password?
                  </Link>
                </div>
                <button className="mt-4 w-full bg-primary text-white py-2 rounded-md text-md tracking-wide">
                  Sign In
                </button>
                <div>
                  <div className="p-5 text-sm text-center">
                    Don’t have an account yet?
                    <Link
                      to="/register"
                      className="font-medium text-primary hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                      <span className="px-1 font-bold">Sign Up</span>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Login;
