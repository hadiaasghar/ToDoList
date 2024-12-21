import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [data, setData] = useState([]);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formfields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formfields;

  const handleChange = (e) => {
    setFormFields((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setData([...data, formfields]);
    setFormFields({ name: "", email: "", password: "" });
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <>
      <form className="max-w-lg mx-auto p-6 mt-12 bg-white shadow-md rounded-md">
        <div className="space-y-6">
          <div className="border-b text-center border-gray-300 pb-4">
            <h2 className="font-bold text-2xl text-gray-800">SignUp</h2>
            <p className="mt-1 text-sm text-gray-600">
              Please enter your details
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              onChange={handleChange}
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              onChange={handleChange}
              value={email}
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              value={password}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              onClick={handleClick}
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>

          {/* Login Message */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-indigo-600 font-medium hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
