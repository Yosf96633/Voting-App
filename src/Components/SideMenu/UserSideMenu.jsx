import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setLogin } from "../../../Redux/isLogin";
const UserSideMenu = ({ userBars, SetuserBars }) => {
  const isLogin = useSelector(state=>{
    return state.login.login
    
  })
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => {
    return state.theme.darkMode;
  });
  return (
    <div
      className={`fixed top-0 right-0 w-[20rem] max-[520px]:w-[16rem] h-full border-l z-10${
        darkMode
          ? " bg-gray-900 text-white border-white"
          : " bg-gray-100  text-black border-gray-900"
      } ${
        userBars ? "translate-x-0" : "-translate-x-full"
      } transition-colors duration-300 pt-6 px-4`}
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
            dispatch(SetuserBars(false));
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
            darkMode ? "border-white" : "border-black"
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
              to="/"
              onClick={() => {
                dispatch(SetuserBars(false));
              }}
            >
              Home
            </Link>
          </div>
        </li>
        <li
          className={`py-2 my-5 border w-[80%] ${
            darkMode ? "border-white" : "border-black"
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <Link
              to="contact"
              onClick={() => {
                dispatch(SetuserBars(false));
              }}
            >
              Contact us
            </Link>
          </div>
        </li>
        <li
          className={`py-2 my-5 border w-[80%] ${
            darkMode ? "border-white" : "border-black"
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
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <Link
              to="about"
              onClick={() => {
                dispatch(SetuserBars(false));
              }}
            >
              About us
            </Link>
          </div>
        </li>
        <li
          className={`py-2 my-5  w-[80%] cursor-pointer`}
        >
          { isLogin ?  <div
         className={` font-medium  text-center border px-6 py-2 rounded-md cursor-pointer${
           darkMode
             ? " bg-white border-gray-900 text-black"
             : " bg-gray-900 border-white text-white"
         }`}
         onClick={()=>{
          dispatch(setLogin(false));
          dispatch(SetuserBars(false));
         }}
       >
         Logout
       </div> : <div className="flex justify-center items-center gap-2">
          <div className=" flex gap-4 max-[520px]:flex-col">
          <Link
            className={` font-medium border px-6 py-2 rounded-md ${
              darkMode
                ? " bg-white border-gray-900 text-black"
                : " bg-gray-900 border-white text-white"
            }`}
            to="login"
            onClick={()=>{dispatch(SetuserBars(false))}}
          >
            Log in
          </Link>
        </div>
          </div>}
        </li>
        {/* <li
          className={`py-2 my-5 border w-[80%] ${
            darkMode ? "border-white" : "border-black"
          }  rounded-md cursor-pointer`}
          onClick={() => {
            // navigate("/admin_login", { replace: true });
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
        </li> */}
      </ul>
    </div>
  );
};

export default UserSideMenu;
