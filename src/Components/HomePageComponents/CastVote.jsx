import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const VoteComponent = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const votersId = useSelector((state) => state.LoginID.loginID);

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [message, setMessage] = useState(""); // For showing messages to the user

  useEffect(() => {
    const checkIfVoted = async () => {
      try {
        // Construct the URL with query parameters
        const url = new URL("http://localhost/VOTING%20SYSTEM/check_voter_status.php");
        url.searchParams.append("voters_id", votersId);
    
        // Send the GET request with query parameters
        const response = await fetch(url, {
          method: "GET",
        });
    
        const result = await response.json();
        if (result.success) {
          if (result.voted) {
            setVoted(true);
            setLoading(false)
            setMessage("You have already voted!");
            return;
          } else {
            fetchCandidates(); // Fetch candidates if not voted
          }
        } else {
          setMessage(result.message || "Error checking your vote status. Please try again later.");
        }
      } catch (error) {
        console.error("Error checking voted status:", error);
        setMessage("Error checking your vote status. Please try again later.");
      }
    };
    
    const fetchCandidates = async () => {
      try {
        const response = await fetch("http://localhost/VOTING%20SYSTEM/get_candidate.php");
        const data = await response.json();
        setCandidates(data.candidates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setMessage("Error fetching candidates. Please try again later.");
        setLoading(false);
      }
    };

    checkIfVoted(); // Check if voter has already voted
  }, [votersId]);

  const handleVote = async () => {
    if (selectedCandidate) {
      try {
        const formData = new FormData();
        formData.append("id", selectedCandidate);

        const response = await fetch("http://localhost/VOTING%20SYSTEM/cast_vote.php", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (result.success) {
          setVoted(true);
          setMessage("Thank you for voting!");
          updateVotedStatus(votersId);
        } else {
          setMessage("Error casting vote. Please try again.");
        }
      } catch (error) {
        console.error("Error casting vote:", error);
        setMessage("Error casting vote. Please try again.");
      }
    } else {
      setMessage("Please select a candidate to vote.");
    }
  };

  const updateVotedStatus = async (votersId) => {
    try {
      const formData = new FormData();
      formData.append("voters_id", votersId);

      const response = await fetch("http://localhost/VOTING%20SYSTEM/update_voter_status.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        console.log(result.message); // "Voted status updated successfully"
      } else {
        setMessage("Error updating vote status.");
      }
    } catch (error) {
      console.error("Error updating voted status:", error);
      setMessage("Error updating vote status.");
    }
  };

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

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300 p-6`}
    >
      {voted ? (
        <div className={`text-3xl ${darkMode ? " text-white " : " text-black"} font-semibold text-center`}>
          {message || "You have already voted!"}
        </div>
      ) : (
        <div
          className={`p-8 rounded-lg shadow-2xl w-full max-w-lg ${
            darkMode ? "bg-gray-800 border border-white" : "bg-white border border-gray-300"
          } transition-colors duration-300`}
        >
          <h2
            className={`text-2xl font-bold text-center mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            } transition-colors duration-300`}
          >
            Vote for a Candidate
          </h2>
          {message && (
            <p className="text-center text-lg font-semibold text-red-600">{message}</p>
          )}
          {candidates.length > 0 ? (
            <div className="space-y-4">
              {candidates.map((candidate) => (
                <label
                  key={candidate.id}
                  className={`block p-4 border ${
                    darkMode ? "bg-gray-900 border-white" : "bg-white border-gray-900"
                  } rounded-lg hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out`}
                >
                  <div className="flex flex-col">
                    <span className={`text-lg font-semibold text-gray-500`}>
                      {candidate.firstname} {candidate.lastname}
                    </span>
                    <span className="text-sm text-gray-400">
                      Candidate ID: {candidate.id}
                    </span>
                    <span className="text-sm text-gray-400">
                      Position: {candidate.position}
                    </span>
                  </div>
                  <div className="mt-2">
                    <input
                      type="radio"
                      name="candidate"
                      value={candidate.id}
                      onChange={() => setSelectedCandidate(candidate.id)}
                      checked={selectedCandidate === candidate.id}
                      className="form-radio text-indigo-600"
                    />
                  </div>
                </label>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg font-semibold text-red-600">
              No candidate elected for voting.
            </p>
          )}
          {candidates.length > 0 && (
            <button
              onClick={handleVote}
              className={`mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out`}
            >
              Submit Vote
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default VoteComponent;
