import { motion as m } from "framer-motion";

import ServiceSlider from "../components/sections/sevicesSlider/ServicesSlider";

import heroBgBottom from "../assets/images/hero-bottom.png";
import hero from "../assets/images/hero.jpg";
import Planet09 from "../assets/images/serviceInfo.png";
import Stamp from "../assets/images/stamp.png";

import {
  slideIn,
  staggerContainer,
  zoomIn,
} from "../assets/constants/Animations";
import AdvanceServices from "../components/sections/AdvanceServices";
import GlitchText from "../components/GlitchText";

const Service = () => {
  return (
    <div className="w-full overflow-hidden">
      <section
        id="baner"
        className="fixed w-full h-screen top-0 left-0 -z-30 flex flex-col items-center text-center  text-white isolate bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className="mt-24 mb-2 uppercase text-white tracking-[.5rem] text-xs lg:text-lg md:text-sm">
          the future tech service
        </h1>

        <GlitchText>we build we serve</GlitchText>
      </section>
      <section
        id="hero-section-front Homesection"
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${heroBgBottom})` }}
      >
        {" "}
      </section>

      <section className="feedback-section bg-[#2d2265]">
        <m.div
          variants={staggerContainer(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="  h-full w-full  flex flex-col-reverse lg:flex-row  gap-6 relative z-10  text-white p-20 justify-center items-center"
        >
          <m.div
            variants={slideIn("right", "tween", 0.3, 1)}
            className=" glassEffect flex-[0.5] flex flex-col justify-end rounded-3xl gradient-05 border-[1px] border-[#6A6A6A] p-6 md:p-10"
          >
            <div className="feedback-gradient" />

            <h3 className="title uppercase text-xl font-semibold md:text-2xl lg:text-3xl">
              gourav dash
            </h3>

            <p className="posting text-normal text-sm mt-[6px] md:text-base md:mt-2">
              Founder of gns
            </p>

            <p className="feedback-text mt-[10px] md:text-xl md:leading-8 md:mt-4 xl:mt-8">
              “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              et, laboriosam, modi quis recusandae similique illo laudantium
              delectus incidunt voluptatibus magnam consectetur explicabo eius
              velit.”
            </p>
          </m.div>

          <m.div
            variants={slideIn("left", "tween", 0.3, 1)}
            className="flex-1 relative "
          >
            <img
              src={Planet09}
              alt="planet"
              className="rounded-3xl min-h-[240px] object-cover lg:h-[560px]"
            />

            <m.div
              variants={zoomIn(1, 1)}
              className="hidden absolute top-8 -left-20 lg:block"
            >
              <img src={Stamp} alt="stamp" className="w-[128px] h-[128px]" />
            </m.div>
          </m.div>
        </m.div>
      </section>

      <ServiceSlider />
      <AdvanceServices />
    </div>
  );
};

export default Service;
