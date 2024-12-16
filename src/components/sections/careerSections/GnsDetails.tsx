import { motion as m } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import Map from "../../../assets/images/map.png";

const GnsDetails = () => {
  const [startCount, setStartCount] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#241b4d] to-[#181424] w-full min-h-screen relative  flex justify-evenly items-center lg:flex-row flex-col  p-10 lg:gap-20 gap-10 isolate text-white ">
      <div className="inset-0 mt-10 absolute -z-10">
        <img src={Map} alt="worldMAp" className="h-full w-full object-cover " />
      </div>

      <m.div
        onViewportEnter={() => {
          setStartCount(true);
        }}
        className=" p-14 flex   flex-col gap-3 rounded-xl aspect-square cursor-pointer justify-center items-center border backdrop-blur-md"
      >
        {startCount ? (
          <h1 className="text-7xl font-extrabold">
            <CountUp start={0} end={42} duration={2} />+
          </h1>
        ) : (
          <h1 className="text-7xl font-extrabold">0</h1>
        )}
        <p className="uppercase text-3xl font-bold">employees</p>
      </m.div>

      <div className="  p-14  flex flex-col gap-3 rounded-xl aspect-square cursor-pointer  justify-center items-center border backdrop-blur-md">
        {startCount ? (
          <h1 className="text-7xl font-extrabold">
            <CountUp start={0} end={35} duration={2} />+
          </h1>
        ) : (
          <h1 className="text-7xl font-extrabold">0</h1>
        )}
        <p className="uppercase text-3xl font-bold">clients</p>
      </div>
      <div className="  p-14  flex flex-col gap-3 rounded-xl aspect-square cursor-pointer  justify-center items-center border backdrop-blur-md">
        {startCount ? (
          <h1 className="text-7xl font-extrabold">
            <CountUp start={0} end={57} duration={2} />+
          </h1>
        ) : (
          <h1 className="text-7xl font-extrabold">0</h1>
        )}
        <p className="uppercase text-3xl font-bold">projects</p>
      </div>
    </div>
  );
};

export default GnsDetails;
