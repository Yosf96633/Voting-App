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
              <Link 
              to={"result"}
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                View results
              </Link>
            </div>
          </div>
        </div>
      </section>
    <section className={`text-gray-400 body-font ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className={`text-2xl font-medium title-font mb-4 ${darkMode ? 'text-white' : 'text-black'} sm:text-3xl`}>
            Features of Our Online Voting System
          </h1>
          <p className={`text-base leading-relaxed mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'} xl:w-2/4 lg:w-3/4`}>
            Discover the powerful features of our online voting system designed to streamline the voting process and ensure transparency and security.
          </p>
          <div className="flex mt-6 justify-center">
            <div className={`w-16 h-1 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'} inline-flex`}></div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className={`w-20 h-20 inline-flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-800 text-indigo-400' : 'bg-gray-200 text-indigo-600'} mb-5 flex-shrink-0`}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className={`text-lg title-font font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>Secure Authentication</h2>
              <p className={`leading-relaxed text-base ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Ensures secure and reliable voter authentication through advanced encryption and verification methods, safeguarding the integrity of each vote.
              </p>
          
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className={`w-20 h-20 inline-flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-800 text-indigo-400' : 'bg-gray-200 text-indigo-600'} mb-5 flex-shrink-0`}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className={`text-lg title-font font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>Real-Time Results</h2>
              <p className={`leading-relaxed text-base ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                View live updates and results as votes are cast, providing transparency and timely information to all stakeholders.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className={`w-20 h-20 inline-flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-800 text-indigo-400' : 'bg-gray-200 text-indigo-600'} mb-5 flex-shrink-0`}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className={`text-lg title-font font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>User-Friendly Interface</h2>
              <p className={`leading-relaxed text-base ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Designed with a clean and intuitive interface to ensure ease of use for voters and administrators alike, facilitating a smooth voting experience.
              </p>
            </div>
          </div>
        </div>
        <button className={`flex mx-auto mt-16 border-0 py-2 px-8 focus:outline-none rounded text-lg ${darkMode ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>
          Get Started
        </button>
      </div>
    </section>

    </div>
  );
};

export default Home;
