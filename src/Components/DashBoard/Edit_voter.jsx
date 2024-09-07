import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const EditVoter = () => {
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);

  const [currentFirstName, setCurrentFirstName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    setCurrentFirstName("");
    setCurrentLastName("");
    setNewFirstName("");
    setNewLastName("");
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('current_firstname', currentFirstName);
    formData.append('current_lastname', currentLastName);
    formData.append('new_firstname', newFirstName);
    formData.append('new_lastname', newLastName);

    try {
      const response = await fetch('http://localhost/VOTING%20SYSTEM/edit_voter.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setMessage(result.success || result.error);
    } catch (error) {
      setMessage('An error occurred while editing the voter');
    }
  };

  return (
    <div className={`flex items-center justify-center max-[440px]:p-10 min-h-screen ${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300`}>
      <div className={`shadow-lg rounded-lg p-8 w-full max-w-lg border ${darkmode ? " bg-gray-800 text-white border-white" : " bg-white text-black border-gray-300"} transition-colors duration-300`}>
        <h2 className="text-3xl font-bold text-center mb-6 max-[440px]:text-xl">Edit Voter Information</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Current First Name</label>
            <input
              type="text"
              value={currentFirstName}
              onChange={(e) => setCurrentFirstName(e.target.value)}
              className={`w-full px-4 py-2 border ${darkmode ? " bg-gray-700 border-gray-500" : " bg-gray-100 border-gray-300"} rounded-md`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Current Last Name</label>
            <input
              type="text"
              value={currentLastName}
              onChange={(e) => setCurrentLastName(e.target.value)}
              className={`w-full px-4 py-2 border ${darkmode ? " bg-gray-700 border-gray-500" : " bg-gray-100 border-gray-300"} rounded-md`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">New First Name</label>
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              className={`w-full px-4 py-2 border ${darkmode ? " bg-gray-700 border-gray-500" : " bg-gray-100 border-gray-300"} rounded-md`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">New Last Name</label>
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              className={`w-full px-4 py-2 border ${darkmode ? " bg-gray-700 border-gray-500" : " bg-gray-100 border-gray-300"} rounded-md`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
        {message && (
          <p className={`text-center mt-4 ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default EditVoter;
