import { motion } from "framer-motion";

import {
  staggerContainer,
  slideIn,
  textVariant,
} from "../../assets/constants/Animations";

import Map from "../../assets/images/map.png";
import User1 from "../../assets/images/people-01.png";
import User2 from "../../assets/images/people-02.png";
import User3 from "../../assets/images/people-03.png";

const WorldMap = () => {
  return (
    <section className="world-section">
      <motion.div
        variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" relative z-10 px-0 md:px-14  lg:px-24 xl:px-32"
      >
        <motion.h3
          variants={textVariant(0.3)}
          className="text-[1.5rem] text-center uppercase text-gradient tracking-[.5rem] "
        >
          we serve all over the world
        </motion.h3>

        <motion.div
          variants={slideIn("up", "tween", 0.3, 1)}
          className="map-container relative w-full mt-4 h-[560px] md:mt-8 lg:mt-10 lg:h-fit"
        >
          <img src={Map} alt="map" className="h-full w-full object-cover" />

          <div className="absolute bottom-20 right-10 w-20 h-20 bg-white rounded-full p-[6px]">
            <img src={User1} alt="user" />
          </div>

          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full p-[6px]">
            <img src={User2} alt="user" />
          </div>

          <div className="absolute top-20 left-16 w-20 h-20 bg-white rounded-full p-[6px]">
            <img src={User3} alt="user" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorldMap;
