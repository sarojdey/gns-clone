import { motion } from "framer-motion";

import {
  planetVariants,
  slideIn,
  staggerContainer,
} from "../../../assets/constants/Animations";

import { hiringCriteria } from "../../../assets/constants/data";

import hiringImg from "../../../assets/images/hiring.png";

const HiringCriteria = () => {
  return (
    <div className=" bg-[#181424] md:min-h-screen w-full flex justify-center items-center py-16  ">
      <motion.div
        variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" items-center h-full w-full  px-6 relative z-10 flex flex-col gap-8  md:px-14  lg:px-24 md:flex-row lg:justify-evenly xl:px-32 "
      >
        <motion.div
          variants={planetVariants("right")}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <img
            height={400}
            width={400}
            src={hiringImg}
            alt="getStarted"
            className="object-contain "
          />
        </motion.div>

        <motion.div
          variants={slideIn("left", "spring", 0.2, 1.75)}
          className=" mt-10 flex-[0.95] flex flex-col justify-center items-center gap-2 md:gap-5 xl:gap-10"
        >
          <h3
            className="title font-bold uppercase text-3xl md:text-5xl text-gradient"
            style={{ textShadow: "2px -2px white" }}
          >
            we are now hiring{" "}
          </h3>
          <h4 className="tracking-[.5rem] text-sm md:text-2xl font-medium  uppercase text-gray-50">
            Our Hiring criteria
          </h4>

          <div className="mt-5 flex flex-col gap-4 md:gap-5 xl:gap-12 ">
            {hiringCriteria.map((feature, index) => {
              return (
                <div className="flex justify-start items-start" key={index}>
                  <div className="bg-gradient-to-b from-[#ac48ef] to-[#3d0d5e]  flex justify-center items-center w-12 h-12 rounded-xl mt-1 md:w-16 md:h-16 md:text-lg xl:w-20 xl:h-20 xl:rounded-2xl xl:text-xl">
                    <h3 className="font-extrabold text-3xl text-gray-50">
                      0{index + 1}
                    </h3>
                  </div>

                  <p className="font-medium md:text-lg flex-1 ml-[30px] font-normal text-sm  text-gray-50 md:ml-[36px]    xl:leading-[38px] xl:ml-[48px] xl:max-w-[370px]">
                    {feature}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HiringCriteria;
