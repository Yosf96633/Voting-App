import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {user} from "../../../public/assests/image"
const IssuesDisplay = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const darkMode = useSelector((state) => {
        return state.AdminTheme.Admin_dark_mode
  });

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('http://localhost/VOTING%20SYSTEM/get_issues.php');
        const data = await response.json();
       if(data.issues)
       {
        setIssues(data.issues)
       }
       else{
        setIssues(0)
       }
      } catch (error) {
        console.error("Error fetching issues:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  const handleDelete = async (issueId) => {
    try {
      const response = await fetch(`http://localhost/VOTING%20SYSTEM/delete_issue.php?issueid=${issueId}`, {
        method: 'DELETE',
      });
  
      const data = await response.json();
      if (data.success) {
        // Remove the issue from the local state
        setIssues(issues.filter(issue => issue.id !== issueId));
      } else {
        // Handle errors
        console.error("Failed to delete issue:", data.message);
      }
    } catch (error) {
      console.error("Error deleting issue:", error);
    }
  };
  

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } transition-colors duration-300`}
      >
        <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-500 border-8 h-16 w-16"></div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center p-6 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <h1 className={`text-4xl font-bold mb-8`}>
        Reports of Users
      </h1>
      <div className="flex flex-col w-full max-w-3xl px-4 overflow-y-auto custom-scrollbar">
        {issues.length > 0 ? (
          issues.map((issue) => (
            <div
              key={issue.id}
              className={`relative flex flex-col p-4 border rounded-lg shadow-lg mb-4 ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
              }`}
            >
              <button
                onClick={() => handleDelete(issue.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex items-center mb-4">
                <img
                  src={user}
                  alt="User"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <p className="text-xl font-semibold">{issue.name}</p>
                  <p className="text-gray-500">{issue.email}</p>
                </div>
              </div>
              <p className={`text-base ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                {issue.issue}
              </p>
            </div>
          ))
        ) : (
          <p className="text-lg text-center">No issues found.</p>
        )}
      </div>
    </div>
  );
};

export default IssuesDisplay;
