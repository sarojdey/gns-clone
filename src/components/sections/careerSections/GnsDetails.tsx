import { motion as m } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import Map from "../../../assets/images/map.png";

const GnsDetails = () => {
  const [startCount, setStartCount] = useState(false);

  return (
    <div className="bg-[#241b4d] w-full min-h-screen relative  flex justify-around items-center lg:flex-row flex-col  p-10 lg:gap-20 gap-10 isolate text-white ">
      <div className="inset-0 mt-10 absolute -z-10">
        <img src={Map} alt="worldMAp" className="h-full w-full object-cover " />
      </div>

      <m.div
        onViewportEnter={() => {
          setStartCount(true);
        }}
        className="basis-full p-10 flex  flex-col gap-3 rounded-full justify-center items-center glassEffect"
      >
        <p className="uppercase text-xl font-bold">employees</p>
        {startCount ? (
          <h1 className="text-7xl font-extrabold">
            <CountUp start={0} end={78} duration={2} />+
          </h1>
        ) : (
          <h1 className="text-7xl font-extrabold">0</h1>
        )}
      </m.div>

      <div className="basis-full  p-10  flex flex-col gap-3 rounded-full  justify-center items-center glassEffect">
        <p className="uppercase text-xl font-bold">projects</p>
        {startCount ? (
          <h1 className="text-7xl font-extrabold">
            <CountUp start={0} end={95} duration={2} />+
          </h1>
        ) : (
          <h1 className="text-7xl font-extrabold">0</h1>
        )}
      </div>
      <div className="basis-full  p-10  flex flex-col gap-3 rounded-full  justify-center items-center glassEffect">
        <p className="uppercase text-xl font-bold">hiring</p>
        {startCount ? (
          <h1 className="text-7xl font-extrabold">
            <CountUp start={0} end={85} duration={3} />%
          </h1>
        ) : (
          <h1 className="text-7xl font-extrabold">0</h1>
        )}
      </div>
    </div>
  );
};

export default GnsDetails;
