import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VotingStatus = ({children}) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [status, setStatus] = useState({ start_time: false, end_time: false });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Fetch voting status from backend
  useEffect(() => {
    const fetchVotingStatus = async () => {
      try {
        const response = await fetch("http://localhost/VOTING%20SYSTEM/voting_status.php");
        const result = await response.json();
        console.log(result);
        if (result.success) {
          // PHP should return start_time and end_time as booleans or 1/0
          setStatus({
            start_time: result.start_time, // ensure it's boolean
            end_time: result.end_time,
          });
          setLoading(false);
        } else {
          setMessage(result.message || "Failed to fetch voting status.");
          setLoading(false);
        }
      } catch (error) {
        setMessage("Error fetching voting status. Please try again later.");
        setLoading(false);
      }
    };

    fetchVotingStatus();
  }, []);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          darkMode ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300`}
      >
        <div className="border-t-transparent border-solid animate-spin rounded-full border-indigo-500 border-8 h-16 w-16"></div>
      </div>
    );
  }
   if(status.start_time && status.end_time)
     return children;
   if(status.start_time && !status.end_time)
   {
    return (<div
        className={`flex flex-col items-center justify-center min-h-screen ${
          darkMode ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300 p-6`}
      >
        <div
          className={`p-8 rounded-lg shadow-2xl w-full max-w-lg ${
            darkMode ? "bg-gray-800 border border-white" : "bg-white border border-gray-300"
          } transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-semibold text-center mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            } transition-colors duration-300`}
          >
            Voting is in process. Please come back later
          </h2>
        </div>
      </div>)
   }
   if(!status.start_time && !status.end_time)
    {
     return (<div
         className={`flex flex-col items-center justify-center min-h-screen ${
           darkMode ? "bg-gray-900" : "bg-white"
         } transition-colors duration-300 p-6`}
       >
         <div
           className={`p-8 rounded-lg shadow-2xl w-full max-w-lg ${
             darkMode ? "bg-gray-800 border border-white" : "bg-white border border-gray-300"
           } transition-colors duration-300`}
         >
           <h2
             className={`text-2xl font-semibold text-center mb-6 ${
               darkMode ? "text-white" : "text-gray-900"
             } transition-colors duration-300`}
           >
             Voting did not start yet
           </h2>
         </div>
       </div>)
    }

};

export default VotingStatus;
