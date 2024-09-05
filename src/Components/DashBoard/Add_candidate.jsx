import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AddCandidate = () => {
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    setFirstname("");
     setLastname("");
     setPosition("");
     setMessage("");

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('position', position);

    try {
      const response = await fetch('http://localhost/VOTING%20SYSTEM/add_candidate.php', {
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
      setMessage('An error occurred while adding the candidate');
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen max-sm:min-h-[80vh] ${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300`}>
      <div className={`shadow-md rounded-lg p-8 w-full max-w-lg border max-[540px]:mx-6 max-[425px]:mb-[2.75rem]${darkmode ? " bg-gray-900 text-white border-white" : " bg-white text-black border-gray-900"} transition-colors duration-300`}>
        <h2 className="text-2xl font-semibold text-center mb-6">Add New Candidate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-2">First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md  ${darkmode ? " bg-gray-700 " : " bg-white"}`}
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
              className={`w-full px-4 py-2 border border-gray-300 rounded-md  ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter last name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md  ${darkmode ? " bg-gray-700 " : " bg-white"}`}
              placeholder="Enter position"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add Candidate
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

export default AddCandidate;
