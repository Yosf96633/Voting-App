import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {PositionsList} from "../index";
const Position = () => {
  const navigate = useNavigate();
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  return (
    <div
      className={` flex flex-col justify-center min-h-[100vh] ${
        darkmode ? " bg-gray-900 text-white" : " bg-white text-black"
      } transition-colors duration-300 py-12`}
    >
      <div className=" flex justify-center items-center flex-wrap gap-8 max-[708px]:flex-col">
        <div className=" flex justify-center items-center gap-2 text-lg border border-gray-300 h-[3.5rem] w-[12rem] max-[425px]:h-[2.5rem]  max-[425px]:w-[9rem] rounded-lg cursor-pointer"
        onClick={()=>{
            navigate("/dashboard/position/add_position");
        }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          <span>Add Position</span>
        </div>
        <div className=" flex justify-center items-center gap-2 text-lg border border-gray-300 h-[3.5rem] w-[12rem] max-[425px]:h-[2.5rem]  max-[425px]:w-[9rem] rounded-lg cursor-pointer"
         onClick={()=>{
          navigate("/dashboard/position/edit_position")
      }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>

          <span>Edit Position</span>
        </div>
        <div className=" flex justify-center items-center gap-2 text-lg border border-gray-300 h-[3.5rem] w-[12rem] max-[425px]:h-[2.5rem]  max-[425px]:w-[9rem] rounded-lg cursor-pointer"
        onClick={()=>{
            navigate("/dashboard/position/delete_position")
        }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>

          <span>Delete Position</span>
        </div>
      </div>
       <PositionsList/>
    </div>
  );
};

export default Position;
