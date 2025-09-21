import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your backend
    console.log("Submitting:", formData);
    // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify(formData) })
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Back to Home Button */}
      <button
        className="absolute top-8 right-8 px-4 py-2 bg-green-700 text-white rounded-full font-semibold hover:bg-green-600 transition z-50"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg mx-auto my-20 relative">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLoginMode(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLoginMode(false)}
          >
            Signup
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-green-700 via-green-600 to-cyan-200 transition-all ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Signup-only Field */}
          {!isLoginMode && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-green-500 placeholder-gray-400"
            />
          )}

          {/* Phone Number Field (Shared) */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-green-500 placeholder-gray-400"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-green-500 placeholder-gray-400"
          />

          {/* Password Field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-green-500 placeholder-gray-400"
          />

          {/* Confirm Password (Signup-only) */}
          {!isLoginMode && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-green-500 placeholder-gray-400"
            />
          )}

          {/* Forgot Password (Login-only) */}
          {isLoginMode && (
            <div className="text-right">
              <a href="#" className="text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button className="w-full p-3 bg-gradient-to-r from-blue-700 via-green-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
            {isLoginMode ? "Login" : "Signup"}
          </button>

          {/* Switch Mode Link */}
          <p className="text-center text-gray-600">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-green-600 hover:underline"
            >
              {isLoginMode ? "Signup now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
