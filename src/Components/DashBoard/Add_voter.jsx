import React, { useState } from 'react';
import { useSelector } from "react-redux";

const Add_voter = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Voter:', { name, age, address });
    
    // Reset form
    setName('');
    setAge('');
    setAddress('');
  };

  return (
    <div className={` flex justify-center items-center h-[90vh]${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300`}>
        <div className={` w-[35vw] mt-10 p-6 rounded-lg shadow-md border border-gray-400 ${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300`}>
      <h2 className="text-2xl font-semibold text-center mb-6">Add Voter</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Voter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter voter name"
          />
        </div>
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter voter age"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter voter address"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          Add Voter
        </button>
      </form>
    </div>
    </div>
  );
};

export default Add_voter;
