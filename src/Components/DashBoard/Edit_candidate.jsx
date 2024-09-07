import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const EditCandidate = () => {
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);

  const [currentFirstname, setCurrentFirstname] = useState('');
  const [currentLastname, setCurrentLastname] = useState('');
  const [newFirstname, setNewFirstname] = useState('');
  const [newLastname, setNewLastname] = useState('');
  const [newPosition, setNewPosition] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    
    const formData = new FormData();
    formData.append('current_firstname', currentFirstname);
    formData.append('current_lastname', currentLastname);
    formData.append('new_firstname', newFirstname);
    formData.append('new_lastname', newLastname);
    formData.append('new_position', newPosition);

    try {
      const response = await fetch('http://localhost/VOTING%20SYSTEM/edit_candidate.php', {
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
      setMessage('An error occurred while editing the candidate');
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen max-sm:min-h-[80vh] max-[440px]:p-10 ${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300`}>
      <div className={`shadow-md rounded-lg p-8 w-full max-w-lg border max-[540px]:mx-6 max-[425px]:mb-[2.75rem]${darkmode ? " bg-gray-900 text-white border-white" : " bg-white text-black border-gray-900"} transition-colors duration-300`}>
        <h2 className="text-2xl font-semibold text-center mb-6  max-[440px]:text-xl">Edit Candidate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Candidate Info */}
          <div>
            <label className="block text-sm font-medium mb-2">Current First Name</label>
            <input
              type="text"
              value={currentFirstname}
              onChange={(e) => setCurrentFirstname(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter current first name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Current Last Name</label>
            <input
              type="text"
              value={currentLastname}
              onChange={(e) => setCurrentLastname(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter current last name"
              required
            />
          </div>

          {/* New Candidate Info */}
          <div>
            <label className="block text-sm font-medium mb-2">New First Name</label>
            <input
              type="text"
              value={newFirstname}
              onChange={(e) => setNewFirstname(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter new first name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">New Last Name</label>
            <input
              type="text"
              value={newLastname}
              onChange={(e) => setNewLastname(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter new last name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">New Position</label>
            <select
              value={newPosition}
              onChange={(e) => setNewPosition(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              required
            >
              <option value="">Select Position</option>
              <option value="PartyA">PartyA</option>
              <option value="PartyB">PartyB</option>
              <option value="PartyC">PartyC</option>
              <option value="IND">IND</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Edit Candidate
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

export default EditCandidate;
