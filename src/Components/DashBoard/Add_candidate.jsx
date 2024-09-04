import React, { useState } from "react";
import { useSelector } from "react-redux";
const Add_candidate = () => {
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  const [name, setName] = useState("");
  const [party, setParty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Candidate:", { name, party });

    // Reset form
    setName("");
    setParty("");
  };

  return (
    <div className={` h-[90vh] flex justify-center items-center ${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300`}>
        <div
      className={` w-[35vw] mt-10 p-6 rounded-lg shadow-md border border-gray-400 flex flex-col gap-4`}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Add Candidate
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">
            Candidate Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter candidate name"
          />
        </div>
        <div>
          <label className="block font-medium">Party</label>
          <input
            type="text"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            required
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter party name"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Candidate
        </button>
      </form>
    </div>
    </div>
  );
};

export default Add_candidate;
