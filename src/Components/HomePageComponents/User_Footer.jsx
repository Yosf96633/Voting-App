import React from "react";
import { useSelector } from "react-redux";
const User_Footer = () => {
  const darkmode = useSelector((state) => {
    return state.theme.darkMode;
  });
  return (
    <footer
      className={` flex justify-center items-center gap-2${
        darkmode ? " bg-gray-900 text-white" : " bg-white text-black"
      } transition-colors duration-300 border-t border-gray-400`}
    >
      <p className=" text-wrap text-center py-6 text-[0.75rem] md:text-xl">
        Built with ❤️ by <span className=" font-medium underline">Yosf</span>{" "}
        and <span className="font-medium underline">Shahzaib Ali</span>. Proudly
        powered by React JS, Tailwind CSS, Recharts and PHP.
      </p>
    </footer>
  );
};

export default User_Footer;
