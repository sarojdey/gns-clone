import { motion as m } from "framer-motion";

import { FaHandshakeSimple } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { IoRocketSharp } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";

import { animationYr } from "../../../assets/constants/Animations";

const WhyChooseGns = () => {
  return (
    <m.div
      className="bg-[#181424] flex md:min-h-screen w-full flex-col gap-5 justify-center items-center   text-center text-white p-10 md:pb-32"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.25 }}
    >
      <m.div
        className="space-y-3 lg:w-1/2 md:full px-5 "
        variants={animationYr}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h3 className=" text-4xl mt-20  font-extrabold">
          Why Choose{" "}
          <span className=" uppercase text-4xl  font-extrabold text-[#b23fff]">
            GNS
          </span>{" "}
          ?
        </h3>
        <p className="font-semibold text-gray-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum
          hic autem illo deleniti, maiores facilis nesciunt delectus eum
          assumenda repellat mollitia tenetur quo accusantium? Doloremque at
          voluptates accusamus odit.
        </p>
      </m.div>

      <m.div
        className="flex h-full w-full md:w-1/2 lg:w-full  lg:flex-row flex-col p-10   gap-5 isolate  "
        variants={animationYr}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <m.div className=" magic-card h-full w-full  aspect-square magic-card  relative ">
          <div className="absolute  h-full w-full bg-purple-400 rounded-lg opacity-20 backdrop-blur-lg "></div>

          <div className="absolute p-4 inset-0 flex text-gray-50 hover:text-white flex-col gap-5 justify-center items-center ">
            <IoRocketSharp className="text-6xl " />
            <h3 className="font-extrabold uppercase text-3xl">Advanced</h3>
            <p className="text-sm w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </m.div>
        <m.div className=" magic-card  h-full w-full  aspect-square magic-card  relative ">
          <div className="absolute h-full w-full bg-purple-400 rounded-lg opacity-20 backdrop-blur-lg "></div>

          <div className="absolute inset-0 flex text-gray-50 hover:text-white flex-col gap-5 justify-center items-center ">
            <LuChartNoAxesCombined className="text-6xl " />
            <h3 className="font-extrabold uppercase text-3xl">Growth</h3>
            <p className="text-sm w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </m.div>
        <m.div className=" magic-card  h-full w-full  aspect-square magic-card  relative ">
          <div className="absolute h-full w-full bg-purple-400 rounded-lg opacity-20 backdrop-blur-lg "></div>

          <div className="absolute inset-0 flex text-gray-50 hover:text-white flex-col gap-5 justify-center items-center ">
            <FaHandshakeSimple className="text-6xl " />
            <h3 className="font-extrabold uppercase text-3xl">Guideance</h3>
            <p className="text-sm w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </m.div>
        <m.div className=" magic-card  h-full w-full  aspect-square magic-card  relative ">
          <div className="absolute h-full w-full bg-purple-400 rounded-lg opacity-20 backdrop-blur-lg "></div>

          <div className="absolute inset-0 flex text-gray-50 hover:text-white flex-col gap-5 justify-center items-center ">
            <IoMdLock className="text-6xl " />
            <h3 className="font-extrabold uppercase text-3xl">Security</h3>
            <p className="text-sm w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default WhyChooseGns;
