import { Card, CARDS } from "./Carousel";
import Carousel from "./Carousel";
import { animationReveal } from "../../../assets/constants/Animations";
import { motion } from "motion/react";

const ProjectCarousal = () => {
  return (
    <section id="project-section " className="bg-bg">
      <motion.div
        className="carousaldiv min-h-[40.5rem]"
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={animationReveal}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <Card
              title={"Project " + (i + 1)}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default ProjectCarousal;
