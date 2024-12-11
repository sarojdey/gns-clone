import reviewBg from "../../assets/images/reviweBg.jpg";

import { motion } from "framer-motion";

const animationY = {
  offScreen: { y: -100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
  },
};

const Testimony = () => {
  return (
    <section className=" overflow-hidden isolate h-screen w-screen min-h-[45.5rem]">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 -z-10">
          <div
            className="relative w-full h-full"
            style={{
              backgroundImage: `url(${reviewBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <motion.h2
          initial={"offScreen"}
          whileInView={"onScreen"}
          variants={animationY}
          transition={{ delay: 0.2, duration: 1 }}
          className="absolute font-bold text-[4rem] uppercase text-center text-gradient mt-20 ml-5"
          style={{ textShadow: "3px -2px white" }}
        >
          happy client works
        </motion.h2>
      </div>
    </section>
  );
};

export default Testimony;
