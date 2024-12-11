import { motion } from "framer-motion";

import {
  slideIn,
  staggerContainer,
} from "../../../assets/constants/Animations";

import industryInfo from "../../../assets/images/industryInfo.png";

const IndustryInfo = () => {
  return (
    <section className="bg-[#2d2265]">
      <motion.div
        variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="h-full w-full feedback-container flex flex-col-reverse lg:flex-row  gap-6 relative z-10  text-white p-20 justify-center items-center"
      >
        <motion.div
          variants={slideIn("right", "tween", 0.3, 1)}
          className="flex-[0.5] flex justify-center items-center flex-col  rounded-3xl  gap-5 p-2 text-center "
        >
          <h3 className="font-bold uppercase text-4xl">we provide</h3>
          <p className="text-xl">
            “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem et,
            laboriosam, modi quis recusandae similique illo laudantium delectus
            incidunt voluptatibus magnam consectetur explicabo eius velit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            exercitationem.”
          </p>
        </motion.div>

        <motion.div
          variants={slideIn("left", "tween", 0.3, 1)}
          className="flex-1 relative flex justify-center items-center "
        >
          <img
            src={industryInfo}
            alt="planet"
            className="rounded-3xl min-h-[240px] object-cover lg:h-[560px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IndustryInfo;
