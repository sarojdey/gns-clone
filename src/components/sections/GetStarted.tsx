import { motion } from "framer-motion";

import {
  staggerContainer,
  slideIn,
  planetVariants,
} from "../../assets/constants/Animations";
import { startingFeatures } from "../../assets/constants/data";

import GetStartedImg from "../../assets/images/get-started.png";

const GetStarted = () => {
  return (
    <section className=" bg-[#2d2265] flex justify-center items-center py-32  ">
      <motion.div
        variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="h-full w-full about-container px-6 relative z-10 flex flex-col gap-8  md:px-14  lg:px-24 md:flex-row lg:justify-between xl:px-32 "
      >
        <motion.div
          variants={planetVariants("right")}
          viewport={{ once: true }}
          className="flex justify-center items-center flex-1 lg:justify-start"
        >
          <img
            src={GetStartedImg}
            alt="getStarted"
            className="object-contain w-full h-full"
          />
        </motion.div>

        <motion.div
          variants={slideIn("left", "spring", 0.2, 1.75)}
          className="flex-[0.95] flex flex-col justify-center items-center gap-2 md:gap-5 xl:gap-12"
        >
          <h4 className="text-gradient text-xl uppercase  tracking-[.5rem] ">
            | How we work
          </h4>

          <h3
            className="title font-bold text-gradient uppercase text-[2rem]"
            style={{ textShadow: "4px -2px white" }}
          >
            Get started with just a few clicks
          </h3>

          <div className="flex flex-col gap-4 md:gap-5 xl:gap-12 ">
            {startingFeatures.map((feature, index) => {
              return (
                <div className="flex  justify-start items-center" key={index}>
                  <div className="bg-white  flex justify-center items-center w-12 h-12 rounded-xl mt-1 md:w-16 md:h-16 md:text-lg xl:w-20 xl:h-20 xl:rounded-2xl xl:text-xl">
                    <h3 className="font-bold text-2xl text-black">
                      0{index + 1}
                    </h3>
                  </div>

                  <p className="flex-1 ml-[30px] text-lg font-normal  text-[#B0B0B0]  md:ml-[36px]    xl:leading-[38px] xl:ml-[48px] xl:max-w-[370px]">
                    {feature}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
