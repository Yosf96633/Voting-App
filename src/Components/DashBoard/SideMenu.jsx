import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
const SideMenu = ({ bars, setBars }) => {
  const navigate = useNavigate();
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  return (
    <div
      className={`fixed top-0 left-0 w-[20rem] h-full border-r z-10${
        darkmode
          ? " bg-gray-900 text-white border-white"
          : " bg-gray-100  text-black border-gray-900"
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

            <Link
              onClick={() => {
                navigate("/dashboard");
                setBars(false);
              }}
            >
              Home
            </Link>
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

            <Link
              to="winner"
              onClick={() => {
                setBars(false);
              }}
            >
              Winner
            </Link>
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
                d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
              />
            </svg>

            <Link
            to="position"
              onClick={() => {
                setBars(false);
              }}
            >
              Positions
            </Link>
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
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>

            <Link
              to="candidate"
              onClick={() => {
                setBars(false);
              }}
            >
              Candidates
            </Link>
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
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>

            <Link
              to="voter"
              onClick={() => {
                setBars(false);
              }}
            >
              Voters
            </Link>
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
