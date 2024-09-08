import React from "react";
import { useSelector } from "react-redux";

import {
  php,
  react,
  sql,
  tailwind,
  vs,
  redux,
  netlify,
  aws,
} from "../../public/assests/image";
const AboutPage = () => {
  const darkmode = useSelector((state) => {
    return state.theme.darkMode;
  });

  return (
    <div
      className={`${
        darkmode ? " bg-gray-900 text-white" : " bg-white text-black"
      } transition-colors duration-300`}
    >
      <div className=" py-8">
        <h1 className=" font-semibold text-5xl text-center font-sans max-[560px]:text-2xl max-[872px]:text-3xl max-[937px]:text-4xl">
          About Project
        </h1>
        <div className=" py-7">
          <span className="font-semibold text-4xl font-sans p-12 max-[560px]:text-xl max-[872px]:text-2xl  max-[937px]:text-3xl">
            Technologies:
          </span>
          <div className="flex justify-center items-center py-7">
            <div className=" grid grid-cols-4 gap-32 max-[430px]:gap-8 max-[430px]:grid-cols-3 max-[560px]:gap-12 max-[650px]:gap-16 max-[820px]:gap-24 max-[1154px]:gap-28">
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={react} alt="react" />
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={tailwind} alt="tailwind" />
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={php} alt="php" />
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={sql} alt="sql" />
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={vs} alt="vs code" />
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={redux} alt="redux" />
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={aws} alt="aws" />
              <img className=" h-[11rem] max-[1154px]:h-[9rem] max-[820px]:h-[8rem] max-[650px]:h-[6.5rem] max-[560px]:h-[5rem]" src={netlify} alt="netlify" />
            </div>
          </div>
        </div>
        <div>
          <h1 className=" font-semibold text-4xl  font-sans p-8  max-[560px]:text-xl max-[872px]:text-2xl  max-[937px]:text-3xl">Features: </h1>
          <div className=" flex flex-col justify-center items-center gap-6 px-8">
            <div>
              <span className=" font-medium text-2xl max-[550px]:text-xl">
                Authentication:{"   "}
              </span>
              <span className=" text-lg max-[550px]:text-base">
                Secure user login and signup using hashed passwords, ensuring
                only authorized access to sensitive actions within the
                application.
              </span>
            </div>
            <div>
              <span className=" font-medium text-2xl max-[550px]:text-xl">Flexible:{"   "}</span>
              <span className=" text-lg max-[550px]:text-base">
                Designed with modular components and scalable features, allowing
                easy updates and customization without affecting the overall
                structure.
              </span>
            </div>
            <div>
              <span className=" font-medium text-2xl max-[550px]:text-xl">Secure:{"   "}</span>
              <span className=" text-lg max-[550px]:text-base">
                Implements secure communication between frontend and backend,
                using prepared statements in SQL to prevent SQL injection and
                other vulnerabilities.
              </span>
            </div>

            <div>
              <span className=" font-medium text-2xl max-[550px]:text-xl">Responsive: {"   "}</span>
              <span className=" text-lg max-[550px]:text-base">
                Built with responsive design using Tailwind CSS, ensuring the
                application works seamlessly across various devices and screen
                sizes.
              </span>
            </div>

            <div>
              <span className=" font-medium text-2xl max-[550px]:text-xl">
                Ease to use: {"   "}
              </span>
              <span className=" text-lg max-[550px]:text-base">
                The intuitive UI provides a smooth user experience, with clear
                navigation and accessible features, making the app user-friendly
                for all.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-6">
        <h1 className="font-semibold text-5xl text-center font-sans pb-8 max-[560px]:text-2xl max-[872px]:text-3xl max-[937px]:text-4xl">
          About Creators and Developers
        </h1>
        <div className=" flex flex-row justify-center items-center gap-7 max-[770px]:flex-col">
        <div className=" border border-gray-300 w-[40vw] h-[12rem] max-[413px]:w-[70vw]  max-[630px]:w-[55vw] max-[630px]:h-[18rem] max-[770px]:h-[15rem] rounded-xl flex flex-col justify-center p-8 gap-3">
            <h1 className=" text-center text-xl font-semibold max-[975px]:text-lg">Shahzaib Ali</h1>
            <p className=" text-lg max-[975px]:text-base">
              Versatile developer with expertise in PHP, Unity, and a future
              focus on blockchain technology. Combines strong programming skills
              with a passion for innovative tech and gaming.
            </p>
          </div>
          <div className=" border border-gray-300 w-[40vw] max-[413px]:w-[70vw]  h-[12rem] max-[630px]:w-[55vw] max-[630px]:h-[18rem]  max-[770px]:h-[15rem] rounded-xl flex flex-col justify-center p-8 gap-3">
            <h1  className=" text-center text-xl font-semibold max-[975px]:text-lg">Yosf</h1>
            <p className=" text-lg max-[975px]:text-base">
              MERN stack developer proficient in MongoDB, Express.js, React.js,
              and Node.js. Focused on building efficient, scalable web
              applications with strong frontend and backend skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
