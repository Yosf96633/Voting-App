import React from 'react'
import {Cards} from '../index'
import { useSelector } from 'react-redux';
const DashHero = () => {
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);
  return (
    <div className={`flex flex-col justify-center items-center gap-2 ${darkmode ? " bg-gray-900 text-white" : " bg-white text-black"} transition-colors duration-300`}>
         <Cards/>
    </div>
  )
}

export default DashHero