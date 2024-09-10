import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setSuccess(false); // Reset success

    // Simple validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      // Send POST request to PHP server
      const response = await fetch('democrasys.42web.io/login.php', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      // Handle response from PHP
      if (result.success) {
        setSuccess(true);
        setError(""); 
        // Navigate to dashboard or other protected page
        // navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("An error occurred while logging in.");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-lg shadow-xl p-8 max-w-md w-full transition-colors duration-300 border`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
            Login successful! 🎉
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                  : "bg-white border-gray-300 text-gray-700 focus:ring-blue-300"
              }`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                  : "bg-white border-gray-300 text-gray-700 focus:ring-blue-300"
              }`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className={`hover:underline transition-colors duration-300 ${
              darkMode ? "text-blue-400" : "text-blue-500"
            }`}
          >
            Sign up
          </Link>
        </p>

        <p className="mt-4 text-center">
          Login as admin?{" "}
          <Link
            to="/admin_login"
            className={`hover:underline transition-colors duration-300 ${
              darkMode ? "text-blue-400" : "text-blue-500"
            }`}
          >
            Login Admin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;