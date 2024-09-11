import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../Redux/themeSlice";
import { UserSideMenu } from "../index";
import { SetUserBars } from "../../../Redux/UserBar";
import { setLogin } from "../../../Redux/isLogin";
const Header = () => {
  const isLogin = useSelector(state=>{
    return state.login.login
    
  })
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const userBars = useSelector((state) => state.UserBars.UserBars);
  return (
    <header
      className={` ${
        darkMode ? "bg-gray-900 text-white" : " bg-white text-black"
      } flex justify-between items-center px-4 py-6 transition-colors duration-300 border-b `}
    >
      <div className=" flex justify-center items-center gap-1">
        <span className={`font-semibold text-2xl max-[500px]:text-lg`}>DemocraSys</span>
      </div>

      <nav className=" block max-md:hidden">
        <ul className="flex gap-14 text-sm">
          <li>
            <Link
              className={`transition-colors  duration-200 hover:text-gray-500`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`transition-colors duration-200 hover:text-gray-500 `}
              to="/about"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className={`transition-colors duration-200 hover:text-gray-500`}
              to="/contact"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      <div className=" flex gap-6 ">
        {/* button */}
       {
          !isLogin ?  <div className=" flex gap-4 max-md:hidden">
          <Link
            className={` font-medium border px-6 py-2 rounded-md ${
              darkMode
                ? " bg-white border-gray-900 text-black"
                : " bg-gray-900 border-white text-white"
            }`}
            to="login"
          >
            Log in
          </Link>
          <Link
            className={` font-medium border px-4 py-2 rounded-md ${
              darkMode
                ? " bg-gray-900 border-white text-white"
                : " bg-white border-gray-900 text-black"
            }`}
            to="signup"
          >
            Sign up
          </Link>
        </div> :  
         <div
         className={` font-medium border px-6 py-2 rounded-md cursor-pointer block max-md:hidden${
           darkMode
             ? " bg-white border-gray-900 text-black"
             : " bg-gray-900 border-white text-white"
         }`}
         onClick={()=>{
          dispatch(setLogin(false));
         }}
       >
         Logout
       </div>

       }
        {/* theme svg */}
        <div className="flex items-center gap-7">
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => dispatch(toggleDarkMode())}
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
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
              onClick={() => dispatch(toggleDarkMode())}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              dispatch(SetUserBars(true));
            }}
            className="size-6 hidden max-md:block "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {userBars && (
        <UserSideMenu userBars={userBars} SetuserBars={SetUserBars} />
      )}
    </header>
  );
};

export default Header;
