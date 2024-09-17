import React, { useState } from "react";
import { useSelector } from "react-redux";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setSuccess(false); // Reset success

    // Simple validation
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Issue', message);

    try {
      const response = await fetch('http://localhost/VOTING%20SYSTEM/contact_us.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      
      if (result.success) {
        setSuccess(true);
        setError("");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred while sending your message.");
    }
  };

  return (
    <section className={`text-gray-400 ${darkMode ? "bg-gray-900" : "bg-white"} body-font relative`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Contact Us
          </h1>
          <p className={`lg:w-2/3 mx-auto leading-relaxed text-base ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
            Whatever cardigan bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className={`leading-7 text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className={`leading-7 text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className={`leading-7 text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out h-32 ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                  placeholder="Describe the issue you're facing"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
              onClick={handleSubmit}
                type="submit"
                className={`flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-colors duration-200 ease-in-out ${
                  darkMode ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"
                }`}
              >
                Send Message
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <a className={`text-indigo-400 ${darkMode ? "hover:text-indigo-300" : "hover:text-indigo-500"}`}>
                example@email.com
              </a>
              <p className={`leading-normal my-5 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              <span className="inline-flex">
                <a className={`text-gray-500 ${darkMode ? "hover:text-gray-400" : "hover:text-gray-600"}`}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className={`ml-4 text-gray-500 ${darkMode ? "hover:text-gray-400" : "hover:text-gray-600"}`}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className={`ml-4 text-gray-500 ${darkMode ? "hover:text-gray-400" : "hover:text-gray-600"}`}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className={`ml-4 text-gray-500 ${darkMode ? "hover:text-gray-400" : "hover:text-gray-600"}`}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-1.64 5.04 7.48 7.48 0 01-5.36 2.36 7.48 7.48 0 01-5.36-2.36A8.38 8.38 0 013 11.5a8.38 8.38 0 011.64-5.04 7.48 7.48 0 015.36-2.36 7.48 7.48 0 015.36 2.36A8.38 8.38 0 0121 11.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
