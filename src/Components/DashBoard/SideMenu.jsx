import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate , Link } from "react-router-dom";
const SideMenu = ({ bars, setBars }) => {
  // useEffect(()=>{
  //   if(!bars)
  //   {setBars(false)}
  // },[bars])
  const navigate = useNavigate();
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  return (
    <div
      className={`fixed top-0 left-0 w-[20rem] h-full border-r z-10${
        darkmode
          ? " bg-gray-900 text-white border-white"
          : " bg-gray-300  text-black border-gray-900"
      } Link-6 transform ${
        bars ? "translate-x-0" : "-translate-x-full"
      } transition-colors duration-300`}
    >
      <div className=" flex justify-between mb-10 items-center">
        <h2 className="text-2xl font-semibold">Menu</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => {
            setBars(false);
          }}
          className="size-7 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <ul className=" flex flex-col items-center">
        <li
          className={`py-2 my-5 border w-[80%] ${
            darkmode ? "border-white" : "border-black"
          }  rounded-md cursor-pointer`}
        >
          <div className="flex justify-center gap-2">
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <Link onClick={()=>{
                  navigate("/dashboard")
                  setBars(false)
            }}>Home</Link>
          </div>
        </li>
        <li
          className={`py-2 my-5 border w-[80%] ${
            darkmode ? "border-white" : "border-black"
          }  rounded-md cursor-pointer`}
        >
          <div className="flex justify-center gap-2">
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

            <Link to="winner" onClick={()=>{
                 setBars(false)
            }}>Winner</Link>
          </div>
        </li>
        <li
          className={`py-2 my-5 border w-[80%] ${
            darkmode ? "border-white" : "border-black"
          }  rounded-md cursor-pointer`}
        >
          <div className="flex justify-center gap-2">
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
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            <Link to="add_candidate" onClick={()=>{
              setBars(false)
            }}>Add Candidate</Link>
          </div>
        </li>
        <li
          className={`py-2 my-5 border w-[80%] ${
            darkmode ? "border-white" : "border-black"
          }  rounded-md cursor-pointer`}
        >
          <div className="flex justify-center gap-2">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <Link to="add_voter" onClick={()=>{
              setBars(false)
            }}>Add Voter</Link>
          </div>
        </li>
        <li
          className={`py-2 my-5 border w-[80%] ${
            darkmode ? "border-white" : "border-black"
          }  rounded-md cursor-pointer`}
          onClick={() => {
            navigate("/admin_login", { replace: true });
          }}
        >
          <div className="flex justify-center gap-2">
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
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>

            <Link>Log out</Link>
          </div>
        </li>
      </ul>
    </div>

    //   {isOpen && (
    //     <div
    //       className="fixed inset-0 bg-black opacity-50"
    //       onClick={toggleMenu}
    //     ></div>
    //   )}
  );
};

export default SideMenu;
