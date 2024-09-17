import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { useSelector } from "react-redux";

const CustomXAxisTick = ({ x, y, payload }) => {
  const screenWidth = window.innerWidth;
  let fontSize = '12px';

  if (screenWidth > 1440) {
    fontSize = '16px';
  } else if (screenWidth > 1080) {
    fontSize = '14px';
  } else if (screenWidth > 768) {
    fontSize = '12px';
  } else {
    fontSize = '8px';
  }

  return (
    <text
      x={x}
      y={y + 10} // adjust position if needed
      dy={0}
      textAnchor="middle"
      fill="#666"
      fontSize={fontSize}
      style={{ wordBreak: 'break-all' }}
    >
      {payload.value}
    </text>
  );
};

const BarChartComponent = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const response = await fetch("http://localhost/VOTING%20SYSTEM/result.php"); // Replace with your backend URL
        const result = await response.json();
        
        if (result.success) {
          const formattedData = result.candidates.map((candidate) => ({
            name: `${candidate.firstname} ${candidate.lastname}`,
            votes: parseInt(candidate.Votes, 10), // Ensure votes are numbers
          }));

          setData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateData();
  }, []);

  const maxVotes = data.length > 0 ? Math.max(...data.map((d) => d.votes)) : 0;

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-white"} ${darkmode ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}>
      <div className="w-full max-w-4xl p-4">
        <h2 className={`text-center text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}>
          Candidate Voting Results
        </h2>
        {loading ? (
          <p className={`text-center ${darkMode ? "text-white" : "text-black"}`}>Loading...</p>
        ) : data.length === 0 ? (
          <p className={`text-center ${darkMode ? "text-white" : "text-black"}`}>No data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart 
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              barCategoryGap={20} // Adjust this value to control the gap between categories
              barGap={10} // Adjust this value to control the gap between bars
            >
              <XAxis 
                dataKey="name" 
                stroke={darkMode ? "white" : "black"} 
                tick={<CustomXAxisTick />} 
              />
              <YAxis 
                domain={[0, maxVotes]} 
                stroke={darkMode ? "white" : "black"} 
              />
              <Tooltip 
                contentStyle={{ backgroundColor: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000" }}
                cursor={{ fill: darkMode ? "#555" : "#eee" }}
              />
              <Bar 
                dataKey="votes" 
                fill={darkMode ? "rgba(75, 192, 192, 0.6)" : "rgba(255, 99, 132, 0.6)"}
              >
                <LabelList dataKey="votes" position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default BarChartComponent;
