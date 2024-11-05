// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form"; // Import Controller
// import toast from "react-hot-toast";
// import { GoInfo } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
// import axios from "axios";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const Register = () => {
//   const [passwordShow, setPasswordShow] = useState(false);
//   const [confirmpasswordShow, setConfirmPasswordShow] = useState(false);
//   const navigate = useNavigate();
//   const [country1, setCountry] = useState("");
//   const [mobileCountryCode, setMobileCountryCode] = useState("");

//   const [first_name, setfirst_name] = useState("");
//   const [surname, setsurname] = useState("");
//   const [email, setemail] = useState("");
//   const [confirm_email, setconfirm_email] = useState("");
//   const [mobile_number, setmobile_number] = useState("");
//   const [country, setcountry] = useState("");
//   const [agreement, setagreement] = useState(false);
//   const [password, setpassword] = useState("");
//   const [confirmed_password, setconfirmed_password] = useState("");

//   const {
//     register,
//     formState: { errors },
//     watch,
//     control, // Include control here for use with Controller
//   } = useForm();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const toastLoading = toast.loading("User Signing Up...");
//     try {
//       // Simulating successful registration
//       // Here you would typically send your data to an API.
//       const data = {
//         first_name: first_name,
//         surname: surname,
//         email: email,
//         confirm_email: confirm_email,
//         mobile_number: mobile_number,
//         country: country,
//         agreement: agreement,
//         password: password,
//         confirmed_password: confirmed_password,
//       };
//       // console.log(data);
//       const response = await axios.post(
//         "https://winngoogala.winngooconsultancy.in/api/register",
//         data
//       );
//       // console.log(response);
//       toast.dismiss(toastLoading);
//       toast.success("Sign Up Successfully");
//       navigate("/login"); // Navigate after successful signup
//     } catch (error) {
//       // console.log(error.response.data.errors.email[0]);
//       toast.dismiss(toastLoading);
//       toast.error(error.response.data.errors.email[0]);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center w-full max-h-full mt-10 mb-10">
//       <form onSubmit={onSubmit}>
//         <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
//           <div className="space-y-4">
//             <div className="text-center space-y-2">
//               <h1 className="text-xl font-semibold">Welcome</h1>
//               <small className="text-gray-400 dark:text-gray-200">
//                 Create an account to start using Winngoo Gala
//               </small>
//             </div>
//             <div className="flex flex-col md:flex-row gap-2">
//               <div>
//                 <label
//                   htmlFor="firstname"
//                   className="block mb-1 text-gray-600 text-sm font-medium">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstname"
//                   {...register("firstname", {
//                     required: "Firstname is Required",
//                   })}
//                   value={first_name}
//                   onChange={(e) => setfirst_name(e.target.value)}
//                   required
//                   className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
//                     errors.firstname
//                       ? "border-red-500 focus:border-red-500"
//                       : "focus:border-primary"
//                   }`}
//                   placeholder="FirstName"
//                 />
//                 {errors.firstname && (
//                   <span className="flex items-center gap-1 py-1 text-red-500">
//                     <GoInfo className="inline" />
//                     {errors.firstname.message}
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="lastname"
//                   className="block mb-1 text-gray-600 text-sm font-medium">
//                   Surname
//                 </label>
//                 <input
//                   type="text"
//                   id="lastname"
//                   {...register("lastname", {
//                     required: "Surname is Required",
//                   })}
//                   value={surname}
//                   onChange={(e) => setsurname(e.target.value)}
//                   className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
//                     errors.lastname
//                       ? "border-red-500 focus:border-red-500"
//                       : "focus:border-primary"
//                   }`}
//                   required
//                   placeholder="Surname"
//                 />
//                 {errors.lastname && (
//                   <span className="flex items-center gap-1 py-1 text-red-500">
//                     <GoInfo className="inline" />
//                     {errors.lastname.message}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Email Fields */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block mb-1 text-gray-600 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 id="email"
//                 {...register("email", {
//                   required: "Email is Required",
//                   pattern: {
//                     value: /^\S+@\S+$/i,
//                     message: "Invalid email format",
//                   },
//                 })}
//                 onChange={(e) => setemail(e.target.value)}
//                 value={email}
//                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
//                   errors.email
//                     ? "border-red-500 focus:border-red-500"
//                     : "focus:border-primary"
//                 }`}
//                 required
//                 placeholder="Enter Email Address"
//               />
//               {errors.email && (
//                 <span className="flex items-center gap-1 py-1 text-red-500">
//                   <GoInfo className="inline" />
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="confirmEmail"
//                 className="block mb-1 text-gray-600 text-sm font-medium">
//                 Confirm Email
//               </label>
//               <input
//                 type="text"
//                 id="confirmEmail"
//                 {...register("confirmEmail", {
//                   required: "Confirm Email is Required",
//                   validate: (value) =>
//                     value === watch("email") || "Emails do not match",
//                 })}
//                 value={confirm_email}
//                 onChange={(e) => setconfirm_email(e.target.value)}
//                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
//                   errors.confirmEmail
//                     ? "border-red-500 focus:border-red-500"
//                     : "focus:border-primary"
//                 }`}
//                 placeholder="Confirm Email Address"
//                 required
//               />
//               {errors.confirmEmail && (
//                 <span className="flex items-center gap-1 py-1 text-red-500">
//                   <GoInfo className="inline" />
//                   {errors.confirmEmail.message}
//                 </span>
//               )}
//             </div>

//             {/* Country Dropdown */}
//             <div>
//               <label
//                 htmlFor="country"
//                 className="block mb-1 text-gray-600 text-sm font-medium">
//                 Country
//               </label>
//               <Controller
//                 name="country"
//                 control={control}
//                 defaultValue=""
//                 rules={{ required: "Country is Required" }}
//                 render={({ field }) => (
//                   <CountryDropdown
//                     {...field}
//                     value={country1}
//                     onChange={(val) => {
//                       field.onChange(val); // Update React Hook Form state
//                       setCountry(val);
//                       setcountry(val);
//                       // Automatically update mobile country code based on selected country
//                       setMobileCountryCode(val);
//                     }}
//                     classes={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 text-gray-600 focus-visible:shadow-none ${
//                       errors.country1
//                         ? "border-red-500 focus:border-red-500"
//                         : "focus:border-primary"
//                     }`}
//                   />
//                 )}
//               />
//               {errors.country && (
//                 <span className="flex items-center gap-1 py-1 text-red-500">
//                   <GoInfo className="inline" />
//                   {errors.country.message}
//                 </span>
//               )}
//             </div>

//             {/* Mobile Number with Auto Country Code */}
//             <div className="flex flex-col">
//               <label
//                 htmlFor="mobile"
//                 className="block mb-1 text-gray-600 text-sm font-medium">
//                 Mobile Number
//               </label>
//               <div className="flex items-center border rounded-lg border-stroke bg-transparent">
//                 <PhoneInput
//                   country={mobileCountryCode}
//                   value={mobile_number}
//                   onChange={(phone) => setmobile_number(phone)}
//                   inputClass={`flex-1 rounded-lg border-0 py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
//                     errors.mobile
//                       ? "border-red-500 focus:border-red-500"
//                       : "focus:border-primary"
//                   }`}
//                   inputProps={{
//                     name: "mobile",
//                     required: true,
//                     autoFocus: true,
//                     placeholder: "Enter Mobile Number",
//                   }}
//                 />
//               </div>
//               {errors.mobile && (
//                 <span className="flex items-center gap-1 py-1 text-red-500">
//                   <GoInfo className="inline" />
//                   {errors.mobile.message}
//                 </span>
//               )}
//             </div>

//             {/* Password Fields */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block mb-1 text-gray-600 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 type={passwordShow ? "text" : "password"}
//                 id="password"
//                 {...register("password", {
//                   required: "Password is Required",
//                   minLength: { value: 6, message: "Minimum length is 6" },
//                 })}
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
//                   errors.password
//                     ? "border-red-500 focus:border-red-500"
//                     : "focus:border-primary"
//                 }`}
//                 required
//                 placeholder="Enter Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setPasswordShow(!passwordShow)}
//                 className="absolute right-3 top-3">
//                 {passwordShow ? "Hide" : "Show"}
//               </button>
//               {errors.password && (
//                 <span className="flex items-center gap-1 py-1 text-red-500">
//                   <GoInfo className="inline" />
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="confirmpassword"
//                 className="block mb-1 text-gray-600 text-sm font-medium">
//                 Confirm Password
//               </label>
//               <input
//                 type={confirmpasswordShow ? "text" : "password"}
//                 id="confirmpassword"
//                 {...register("confirmpassword", {
//                   required: "Please confirm your password",
//                   validate: (value) =>
//                     value === watch("password") || "Passwords do not match",
//                 })}
//                 value={confirmed_password}
//                 onChange={(e) => setconfirmed_password(e.target.value)}
//                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
//                   errors.confirmpassword
//                     ? "border-red-500 focus:border-red-500"
//                     : "focus:border-primary"
//                 }`}
//                 required
//                 placeholder="Confirm Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setConfirmPasswordShow(!confirmpasswordShow)}
//                 className="absolute right-3 top-3">
//                 {confirmpasswordShow ? "Hide" : "Show"}
//               </button>
//               <span
//                 onClick={() => setPasswordShow(!passwordShow)}
//                 className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none">
//                 {passwordShow ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round">
//                     <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
//                     <line x1="1" y1="1" x2="23" y2="23"></line>
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round">
//                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                     <circle cx="12" cy="12" r="3"></circle>
//                   </svg>
//                 )}
//               </span>
//               {errors.confirmpassword && (
//                 <span className="flex items-center gap-1 py-1 text-red-500">
//                   <GoInfo className="inline" />
//                   {errors.confirmpassword.message}
//                 </span>
//               )}
//             </div>

//             {/* Accept Terms and Conditions Checkbox */}
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 {...register("terms", {
//                   required: "You must accept the terms and conditions",
//                 })}
//                 value={agreement}
//                 onChange={(e) => setagreement(e.target.checked)}
//                 className={`mr-2 border-gray-300 rounded ${
//                   errors.terms ? "border-red-500" : ""
//                 }`}
//                 required
//               />
//               <label
//                 htmlFor="terms"
//                 className="text-gray-600 text-sm font-medium">
//                 I accept the{" "}
//                 <Link to="#" className="text-primary hover:text-blue-400">
//                   terms and conditions
//                 </Link>
//               </label>
//             </div>
//             {errors.terms && (
//               <span className="flex items-center gap-1 py-1 text-red-500">
//                 <GoInfo className="inline" />
//                 {errors.terms.message}
//               </span>
//             )}

//             <button
//               type="submit"
//               className="mt-4 w-full bg-primary text-white py-2 rounded-md text-md tracking-wide">
//               Create Account
//             </button>

//             <div className="text-center">
//               <span className="text-gray-400 dark:text-gray-200">
//                 Already have an account?{" "}
//               </span>
//               <Link
//                 to="/login"
//                 className="font-medium text-primary hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
//                 Log in
//               </Link>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { GoInfo } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmpasswordShow, setConfirmPasswordShow] = useState(false);
  const navigate = useNavigate();
  const [mobileCountryCode, setMobileCountryCode] = useState("");

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is Required"),
    surname: Yup.string().required("Surname is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    confirm_email: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails do not match")
      .required("Confirm Email is Required"),
    mobile_number: Yup.string().required("Mobile Number is Required"),
    country: Yup.string().required("Country is Required"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/,
        "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 8-14 characters long"
      ),
    confirmed_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Please confirm your password"),
    agreement: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const onSubmit = async (values) => {
    const toastLoading = toast.loading("User Signing Up...");
    try {
      const response = await axios.post(
        "https://winngoogala.winngooconsultancy.in/api/register",
        values
      );
      toast.dismiss(toastLoading);
      toast.success("Sign Up Successfully");
      navigate("/login");
    } catch (error) {
      toast.dismiss(toastLoading);
      toast.error(error.response.data.errors.email[0]);
    }
  };

  return (
    <div className="flex justify-center items-center w-full max-h-full mt-10 mb-10">
      <Formik
        initialValues={{
          first_name: "",
          surname: "",
          email: "",
          confirm_email: "",
          mobile_number: "",
          country: "",
          password: "",
          confirmed_password: "",
          agreement: false,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <h1 className="text-xl font-semibold">Welcome</h1>
                  <small className="text-gray-400 dark:text-gray-200">
                    Create an account to start using Winngoo Gala
                  </small>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1 text-gray-600 text-sm font-medium">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="first_name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="span"
                      className="text-red-500 flex items-center gap-1 py-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="surname"
                      className="block mb-1 text-gray-600 text-sm font-medium">
                      Surname
                    </label>
                    <Field
                      type="text"
                      name="surname"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="Surname"
                    />
                    <ErrorMessage
                      name="surname"
                      component="span"
                      className="text-red-500 flex items-center gap-1 py-1"
                    />
                  </div>
                </div>

                {/* Email and Confirm Email Fields */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                    placeholder="Enter Email Address"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirm_email"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Confirm Email
                  </label>
                  <Field
                    type="text"
                    name="confirm_email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                    placeholder="Confirm Email Address"
                  />
                  <ErrorMessage
                    name="confirm_email"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Country Dropdown */}
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Country
                  </label>
                  <CountryDropdown
                    value={values.country}
                    onChange={(val) => setFieldValue("country", val)}
                    classes="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 text-gray-600"
                  />
                  <ErrorMessage
                    name="country"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Mobile Number with Auto Country Code */}
                <div className="flex flex-col">
                  <label
                    htmlFor="mobile_number"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Mobile Number
                  </label>
                  <PhoneInput
                    country={mobileCountryCode}
                    value={values.mobile_number}
                    onChange={(phone) => setFieldValue("mobile_number", phone)}
                    inputClass="flex-1 rounded-lg border-0 py-2 px-3 outline-none text-gray-600"
                    inputProps={{
                      name: "mobile_number",
                      required: true,
                      autoFocus: true,
                      placeholder: "Enter Mobile Number",
                    }}
                  />
                  <ErrorMessage
                    name="mobile_number"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Password Fields */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      type={passwordShow ? "text" : "password"}
                      name="password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="Enter Password"
                    />
                    <span
                      onClick={() => setPasswordShow(!passwordShow)}
                      className="absolute top-[15px] text-gray-500 right-5 cursor-pointer select-none">
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
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Confirm Password Fields */}
                <div>
                  <label
                    htmlFor="confirmed_password"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Field
                      type={confirmpasswordShow ? "text" : "password"}
                      name="confirmed_password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="Confirm Password"
                    />
                    <span
                      onClick={() =>
                        setConfirmPasswordShow(!confirmpasswordShow)
                      }
                      className="absolute top-[15px] text-gray-500 right-5 cursor-pointer select-none">
                      {confirmpasswordShow ? (
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
                  </div>
                  <ErrorMessage
                    name="confirmed_password"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-center">
                  <Field type="checkbox" name="agreement" />
                  <label
                    htmlFor="agreement"
                    className="ml-2 text-sm text-gray-600">
                    I agree to all{" "}
                    <Link to="/terms" className="font-semibold text-primary">
                      Terms & Conditions
                    </Link>
                  </label>
                  <ErrorMessage
                    name="agreement"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg">
                  Register
                </button>

                {/* Login Link */}
                <div className="text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold text-primary">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
