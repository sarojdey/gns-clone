import { motion } from "framer-motion";

import {
  slideIn,
  staggerContainer,
} from "../../../assets/constants/Animations";

import industryInfo from "../../../assets/images/industryInfo.png";
import AnimatedBorderCard from "../../AnimatedBorderCard";

const IndustryInfo = () => {
  return (
    <section className="bg-[#171323]">
      <motion.div
        variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="h-full w-full  flex flex-col-reverse lg:flex-row  gap-20 relative z-10  text-white p-10 justify-evenly items-center"
      >
        <motion.div
          variants={slideIn("right", "tween", 0.3, 1)}
          className="  flex justify-center items-center  "
        >
          <AnimatedBorderCard className="mt-8 !w-[90%] lg:!w-[450px] !bg-[#212025]">
            <h3 className="font-bold uppercase text-3xl pb-5">
              What we provide?
            </h3>
            <p className="text-lg">
              “We provide tailored IT solutions, software development, cloud
              services, and cybersecurity to empower businesses with innovation,
              efficiency, and growth.”
            </p>
          </AnimatedBorderCard>
        </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.3, 1)}
          className=" relative flex justify-center items-center "
        >
          <img
            src={industryInfo}
            alt="planet"
            className=" min-h-[200px] object-cover lg:h-[500px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IndustryInfo;
