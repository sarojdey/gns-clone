import { staggerContainer } from "../../assets/constants/Animations";
import { useState } from "react";
import { ServicesSlides } from "../../assets/constants/data";

import { motion } from "framer-motion";
import Button from "../Button";
import ServiceCard from "../ServiceCard";
import Text from "../Text";

const ServicesCarousel = () => {
  const [activeSlide, setActiveSlide] = useState("slide-2");

  return (
    <section className="!h-fit explore-section relative  py-16 px-6 md:px-14 md:py-32 lg:px-24  xl:px-32 bg-bg">
      <motion.div
        variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="explore-container"
      >
        <div className="flex md:flex-row flex-col justify-between items-center mb-5">
          <Text>services</Text>
          <p className="uppercase text-gradient tracking-[.5rem]">
            we create we serve
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          className="explore-slides-container flex flex-col gap-4 min-h-[70vh] relative md:gap-8 lg:gap-5 lg:flex-row lg:justify-between lg:items-center"
        >
          {ServicesSlides.map((slide, index) => {
            return (
              <ServiceCard
                key={slide.id}
                id={slide.id}
                title={slide.title}
                url={slide.url}
                abv={slide.abv}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                index={index}
              />
            );
          })}
        </motion.div>
      </motion.div>

      <div className=" lg:hidden mt-10 mb-20 w-full flex justify-center">
        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default ServicesCarousel;
