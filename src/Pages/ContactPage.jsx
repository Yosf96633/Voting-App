import React, { useState } from "react";
import { useSelector } from "react-redux";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setSuccess(false); // Reset success

    // Simple validation
    if (!name || !email || !issue) {
      setError("Please fill in all fields.");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Issue', issue);

    try {
      const response = await fetch('http://localhost/VOTING%20SYSTEM/contact_us.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setError("");
        setName("");
        setEmail("");
        setIssue("");
      } else {
        setError(result.error);
      }
    } catch (err) {
        console.log(err);
        
      setError("An error occurred while sending your message.");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } py-20`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-lg shadow-xl p-8 max-w-md w-full transition-colors duration-300 border`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
            Your message has been sent successfully! 🎉
          </div>
        )}
 {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                  : "bg-white border-gray-300 text-gray-700 focus:ring-blue-300"
              }`}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            <label className="block mb-2" htmlFor="issue">
              Issue
            </label>
            <textarea
              id="issue"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                  : "bg-white border-gray-300 text-gray-700 focus:ring-blue-300"
              }`}
              placeholder="Describe the issue you're facing"
              rows="4"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
