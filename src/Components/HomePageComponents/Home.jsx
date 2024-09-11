import React from "react";
import { vote } from "../../../public/assests/image";
import { useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
const Home = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div>
      <section className={`text-gray-400 ${ darkMode ? "bg-gray-900" : " bg-white"} body-font transition-colors duration-300`}>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={vote}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className={`title-font sm:text-4xl text-2xl mb-4 font-medium ${darkMode ? " text-white" : " text-black"}`}>
            Modernizing Elections: Secure Online Voting
            </h1>
            <p className={`leading-relaxed mb-8 text-gray-500`}>
              Our online voting platform transforms the way people cast their
              votes by offering a secure, user-friendly solution. With robust
              encryption and a streamlined interface, we ensure every vote is
              counted accurately and confidentially, making participation easier
              and more accessible for everyone. Embrace the future of voting
              with convenience and confidence.
            </p>
            <div className="flex justify-center">
              <Link
               to={"cast_vote"}
               className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Vote
              </Link>
              <Link className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                View results
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
