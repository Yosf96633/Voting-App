import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Delete_voter = () => {
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
     setFirstname("");
     setLastname("")
    // Prepare form data to send to the backend
    const formData = new FormData();
    formData.append('first_name', firstname);
    formData.append('last_name', lastname);

    try {
      const response = await fetch('http://localhost/VOTING%20SYSTEM/delete_voter.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setMessage(result.success);
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage('An error occurred while deleting the voter');
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300 py-12`}>
      <div className={`shadow-md rounded-lg p-8 w-full max-w-lg border ${darkmode ? " bg-gray-900 text-white border-white" : " bg-white text-black border-gray-900"} transition-colors duration-300`}>
        <h2 className="text-2xl font-semibold text-center mb-6">Delete Voter</h2>
        <form onSubmit={handleDelete} className="space-y-4">
          <div>
            <label className="block font-medium mb-2">First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter last name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Delete Voter
          </button>
        </form>
        {message && (
          <p className={`text-center mt-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Delete_voter;
