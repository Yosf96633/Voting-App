import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const DeletePosition = () => {
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);

  const [position_name, setPositionName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Prepare form data to send to the backend
    const formData = new FormData();
    formData.append('position_name', position_name);

    try {
      const response = await fetch('http://localhost/VOTING%20SYSTEM/delete_position.php', {
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
      setMessage('An error occurred while deleting the position');
    }
  };

  return (
    <div
      className={`flex items-center justify-center py-8 max-sm:min-h-[90vh] min-h-screen ${
        darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } transition-colors duration-300`}
    >
      <div
        className={`shadow-md rounded-lg p-8 w-full max-w-lg border ${
          darkmode ? 'bg-gray-900 text-white border-white' : 'bg-white text-black border-gray-900'
        } transition-colors duration-300`}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 max-[440px]:text-xl">Delete Position</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-2 max-[440px]:text-sm">Position Name</label>
            <input
              type="text"
              value={position_name}
              onChange={(e) => setPositionName(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 ${
                darkmode ? 'bg-gray-700' : 'bg-white'
              }`}
              placeholder="Enter position Name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Delete Position
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

export default DeletePosition;
