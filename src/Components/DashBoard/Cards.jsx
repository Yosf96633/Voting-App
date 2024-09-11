
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Cards = () => {
  const [votingStarted, setVotingStarted] = useState(false);
  const [votingEnded, setVotingEnded] = useState(false);
  const [message, setMessage] = useState("");
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);
  useEffect(() => {
    // Fetch the current voting status from the server when the component mounts
    fetch("http://localhost/VOTING%20SYSTEM/get_voting_status.php")
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         
        setVotingStarted(data.start_time);
        setVotingEnded(data.end_time);
      });
  }, []);

  const handleStartVoting = async () => {
    try {
      const response = await fetch("http://localhost/VOTING%20SYSTEM/start_voting.php", {
        method: "POST",
      });
      const result = await response.json();
      if (result.success) {
        setVotingStarted(true);
        setVotingEnded(false);
        setMessage("Voting has started.");
      } else {
        setMessage("Error starting voting.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  const handleEndVoting = async () => {
    try {
      const response = await fetch("http://localhost/VOTING%20SYSTEM/end_voting.php", {
        method: "POST",
      });
      const result = await response.json();
      if (result.success) {
        setVotingStarted(true);
        setVotingEnded(true);
        setMessage("Voting has ended.");
      } else {
        setMessage("Error ending voting.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  const handleCloseMessage = () => {
    setMessage("");
  };

  return (
    <div className=" h-[100vh] pt-12">
      <div
        className={`flex justify-center items-center flex-wrap gap-8 max-[708px]:flex-col${
          darkmode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {!votingStarted && !votingEnded && (
          <div
            className="flex justify-center items-center gap-2 text-lg border border-gray-300 h-[3.5rem] w-[12rem] max-[425px]:h-[2.5rem] max-[425px]:w-[9rem] rounded-lg cursor-pointer"
            onClick={handleStartVoting}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            <span>Start Voting</span>
          </div>
        )}

        {votingStarted && !votingEnded && (
          <div
            className="flex justify-center items-center gap-2 text-lg border border-gray-300 h-[3.5rem] w-[12rem] max-[425px]:h-[2.5rem] max-[425px]:w-[9rem] rounded-lg cursor-pointer"
            onClick={handleEndVoting}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
              />
            </svg>
            <span>End Voting</span>
          </div>
        )}

        <div className="flex justify-center items-center gap-2 text-lg border border-gray-300 h-[3.5rem] w-[12rem] max-[425px]:h-[2.5rem] max-[425px]:w-[9rem] rounded-lg cursor-pointer"
      
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <Link to={"winner"}>Winner</Link>
        </div>
        <div className=" flex justify-center items-center gap-2 text-lg border border-gray-300 h-[3.5rem] w-[12rem] max-[425px]:h-[2.5rem]  max-[425px]:w-[9rem] rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>

          <Link to={"reports"}>Reports</Link>
        </div>
      </div>
      {/* <Chart darkmode={darkmode} /> */}
    </div>
  );
};

export default Cards;

