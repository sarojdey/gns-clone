import { motion as m } from "framer-motion";

import image1 from "../../../assets/images/why-choose-us-1.jpg";
import image2 from "../../../assets/images/why-choose-us-2.jpg";
import image3 from "../../../assets/images/why-choose-us-3.jpg";
import image4 from "../../../assets/images/why-choose-us-4.jpg";
import bg from "../../../assets/images/why-choose-us-bg.jpg";

import { animationYr } from "../../../assets/constants/Animations";

const WhyChooseGns = () => {
  return (
    <m.section
      className="flex h-screen w-full flex-col gap-5 justify-center items-center  isolate text-center text-white p-10"
      style={{
        background: `linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)),url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.25 }}
    >
      <m.div
        className=" space-y-5 lg:w-2/3 md:full px-5"
        variants={animationYr}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h3
          className="text-gradient uppercase text-4xl"
          style={{ textShadow: "4px -2px white" }}
        >
          why choose GNS
        </h3>
        <p className=" text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum
          hic autem illo deleniti, maiores facilis nesciunt delectus eum
          assumenda repellat mollitia tenetur quo accusantium? Doloremque at
          voluptates accusamus odit.
        </p>
      </m.div>

      <m.div
        className="flex md:flex-row flex-col p-10 md:pb-0 pb-32  md:gap-0 gap-5 isolate  "
        variants={animationYr}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <m.div className="product-card md:!h-[20vw] !h-56 aspect-square magic-card  relative ">
          <img
            className="w-full h-full object-cover"
            src={image2}
            alt="Spring"
            title="Spring"
          />

          <div className="absolute inset-0 flex justify-center items-center ">
            <h3
              className="text-gradient uppercase"
              style={{ textShadow: "2px -2px white" }}
            >
              advance
            </h3>
          </div>
        </m.div>
        <m.div className="product-card md:!h-[20vw] !h-56 aspect-square magic-card relative">
          <img
            className="w-full h-full object-cover"
            src={image1}
            alt="Summer"
            title="Summer"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h3
              className="text-gradient uppercase"
              style={{ textShadow: "2px -2px white" }}
            >
              growth
            </h3>
          </div>
        </m.div>
        <m.div className=" product-card md:!h-[20vw] !h-56 aspect-square magic-card relative">
          <img
            className="w-full h-full object-cover"
            src={image3}
            alt="Autumn"
            title="Autumn"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h3
              className="text-gradient uppercase"
              style={{ textShadow: "2px -2px white" }}
            >
              guidance
            </h3>
          </div>
        </m.div>
        <m.div className=" product-card md:!h-[20vw] !h-56 aspect-square magic-card relative">
          <img
            className="w-full h-full object-cover"
            src={image4}
            alt="Autumn"
            title="Autumn"
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <h3
              className="text-gradient uppercase"
              style={{ textShadow: "2px -2px white" }}
            >
              security
            </h3>
          </div>
        </m.div>
      </m.div>
    </m.section>
  );
};

export default WhyChooseGns;
