import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleAdminDarkMode} from "../../../Redux/AdminTheme"
import {SideMenu} from "../../Components/index"
function DBHeader() {
    const [bars , setBars] = useState(false);
    const dispatch = useDispatch();
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  return (
    <header className={`${
        darkmode ? "bg-gray-900 text-white" : " bg-white text-black"
      } flex justify-between items-center px-4 py-6 transition-colors duration-300 border-b max-sm:px-1`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={()=>{
            setBars(true)
        }}
        className="size-7 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <h1 className=" text-2xl font-semibold">
           Hi, Admin 👋
      </h1>
      {darkmode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => dispatch(toggleAdminDarkMode())}
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => dispatch(toggleAdminDarkMode())}
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
        {bars && <SideMenu bars={bars} setBars={setBars}/>}
    </header>
  );
}

export default DBHeader;
