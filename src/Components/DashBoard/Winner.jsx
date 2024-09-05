import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import candidates from "../../../Data/Candidates";
import { useSelector } from "react-redux";

const Winner = () => {
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  return (
    <div
      className={` h-[120vh] flex flex-col items-center justify-center max-sm:gap-0 gap-3 ${
        darkmode ? " bg-gray-900 text-white " : " bg-white text-black"
      } transition-colors duration-300 border-t`}
    >
        
      <h1 className=" my-8 text-center font-semibold max-sm:text-5xl text-6xl">Overall Results of Voting</h1>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={candidates}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickCount={5} domain={[0, "dataMax"]} allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="votes" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <h1 className={`font-bold my-6 mx-auto text-center max-sm:text-3xl text-5xl ${
        darkmode ? " bg-gray-900 text-white " : " bg-white text-black"
      } `}> <span className=" border-b border-gray-500">Candidate 1</span> is Winner🎉</h1>
    </div>
  );
};

export default Winner;
