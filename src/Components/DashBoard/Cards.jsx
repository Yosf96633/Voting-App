import React from 'react'
import candidates from "../../../Data/Candidates"
import voter from "../../../Data/Voters"
import { useSelector } from 'react-redux'
import {Chart} from "../index"

const Cards = () => {
    const darkmode = useSelector((state) => {
        return state.AdminTheme.Admin_dark_mode;
      });
  return (
    <div className={`flex gap-10 justify-center flex-wrap py-28 ${darkmode ? " bg-gray-900 text-white" : "bg-white text-black"} transition-colors duration-300`}>
        <div className={` bg-transparent border flex flex-col ${darkmode ? " border-white" : " border-black"} justify-start items-center p-5 rounded-xl gap-2`}>
           <p className=' text-7xl font-semibold'>{voter.length}</p>
           <p>Number of Voters</p>
        </div>
        <div  className={` bg-transparent border flex flex-col ${darkmode ? " border-white" : " border-black"} justify-start items-center p-5 rounded-xl  gap-2`}>
           <p className=' text-7xl font-semibold'>{candidates.length}</p>
           <p>Number of Candidates</p>
        </div>
        <div  className={` bg-transparent border flex flex-col ${darkmode ? " border-white" : " border-black"} justify-start items-center p-5 rounded-xl  gap-2`}>
           <p className=' text-7xl font-semibold'>{candidates.length}</p>
           <p>Number of Parties</p>
        </div>
        <div  className={` bg-transparent border flex flex-col ${darkmode ? " border-white" : " border-black"} justify-start items-center p-5 rounded-xl gap-2`}>
           <p className=' text-7xl font-semibold'>4</p>
           <p>Votes did'nt cast vote</p>
        </div>
       <Chart darkmode={darkmode}/>
    </div>
  )
}

export default Cards