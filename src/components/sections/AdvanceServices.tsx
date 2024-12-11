import { motion as m } from "framer-motion";
import { advanceServicesData } from "../../assets/constants/data";

import {
  animationReveal,
  animationXr,
} from "../../assets/constants/Animations";

const AdvanceServices = () => {
  return (
    <>
      {advanceServicesData.map((data) => {
        return (
          <section id="Homesection" className="bg-[#2d2265]" key={data.id}>
            <m.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{ once: true, amount: 0.3 }}
              className={`w-full h-full flex flex-col ${
                data.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } lg:gap-10 gap-5 justify-center items-center p-5`}
              style={{
                backgroundImage: `url(${data.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <m.div className=" w-full h-screen basis-1/2 flex flex-col gap-5 justify-center items-center p-5 text-center">
                <m.p
                  className="mt-24 uppercase text-gradient tracking-[.5rem]"
                  variants={animationReveal}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  the future tech service
                </m.p>
                <m.h3
                  className="text-gradient text-4xl uppercase"
                  style={{ textShadow: "3px -2px white" }}
                  variants={animationReveal}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {" "}
                  {data.title}
                </m.h3>
                <m.p
                  className="text-primary text-lg"
                  variants={animationReveal}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  {data.description}
                </m.p>
              </m.div>
              <m.div
                className="basis-1/2 p-5 h-full w-screen"
                variants={animationXr}
                transition={{ delay: 1, duration: 1.5 }}
              >
                <img
                  src={data.img}
                  alt="wedev"
                  className="h-full w-full object-cover skew-x-6  hover:skew-x-0 transition-all duration-500"
                />
              </m.div>
            </m.div>
          </section>
        );
      })}
    </>
  );
};

export default AdvanceServices;
