import React from 'react';
import { LineChart, Line, BarChart, Bar , XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../../Data/data'; 
const Chart = ({darkmode}) => {
  return (
   <div className=' w-[80vw]'>
    <h1 className=' text-center font-semibold text-3xl py-[2rem]'>Voting Results Over Time</h1>
     <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis tickCount={4} domain={[1, 4]} allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="votes.candidateA" stroke="#8884d8" activeDot={{ r: 8 }} name="Candidate A" />
        <Line type="monotone" dataKey="votes.candidateB" stroke="#82ca9d" name="Candidate B" />
        <Line type="monotone" dataKey="votes.candidateC" stroke="#ffc658" name="Candidate C" />
      </LineChart>
    </ResponsiveContainer>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis tickCount={6} domain={[0, 26]} allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="votes.candidateA" fill="#8884d8" name="Candidate A" />
        <Bar dataKey="votes.candidateB" fill="#82ca9d" name="Candidate B" />
        <Bar dataKey="votes.candidateC" fill="#ffc658" name="Candidate C" />
      </BarChart>
    </ResponsiveContainer>
   </div>
  );
};

export default Chart;
