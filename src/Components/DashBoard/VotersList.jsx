import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const VotersList = () => {
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);
  const [loading, setLoading] = useState(true);
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    const fetchVoters = async () => {
      try {
        const response = await fetch(
          "http://localhost/VOTING%20SYSTEM/get_voters.php"
        );
        const data = await response.json();
        console.log(data) 
            if(data.success){
          setVoters(data)
        }
        
      } catch (error) {
        console.error("Error fetching voters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVoters();
  }, []);
  console.log(voters);

  return (
    <div
      className={`${
        darkmode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-colors duration-300 max-[421px]:text-[0.75rem] max-md:py-11 py-24 min-h-screen  flex justify-center items-center`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      ) : voters.length === 0 ? (
        <p className="text-2xl font-semibold">Voter list is empty!</p>
      ) : (
        <div
          className={`border border-gray-400 h-[70vh] w-[70vw] max-sm:w-[90vw] max-sm:h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 ${darkmode?"scrollbar-track-gray-800":"scrollbar-track-slate-50"} p-8 rounded-[1rem]`}
        >
          <div
            className={` ${
              darkmode ? "bg-gray-900 text-white" : "bg-white text-black"
            } transition-colors duration-300 grid grid-cols-3 p-4 font-semibold`}
          >
            <div className="col-span-1">Voter ID</div>
            <div className="col-span-1 flex justify-center">First Name</div>
            <div className="col-span-1 flex justify-center ">Last Name</div>
          </div>
          <ul className="divide-y divide-gray-400 overflow-y-auto">
            {voters.voters.map((voter) => (
              <li
                key={voter.id}
                className={` ${
                  darkmode ? "bg-gray-700 text-white" : "bg-white text-black"
                } transition-colors duration-300 grid grid-cols-3 p-4 my-4 rounded shadow-md`}
              >
                <div className="col-span-1">{voter.voters_id}</div>
                <div className="col-span-1 flex justify-center">
                  {voter.first_name}
                </div>
                <div className="col-span-1 flex justify-center">
                  {voter.last_name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VotersList;
