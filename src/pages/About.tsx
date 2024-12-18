import { useRef } from "react";

import { motion as m, useScroll, useTransform } from "framer-motion";

import AboutBlog from "../components/sections/AboutBlog";
import Founder from "../components/sections/Founder";

import heroBg from "../assets/images/4997264_3380 [Converted].png";
import herobgBike from "../assets/images/4997264_33801 [Converted].png";
import herobgstone from "../assets/images/4997264_33802[Converted].png";

import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdOutlineFlashOn } from "react-icons/md";
import bgimg from "../assets/images/4997264_33803.png";
import bgRock from "../assets/images/4997264_338032rock[Converted].png";
import cloud from "../assets/images/cloud.png";
import logo from "../assets/images/HSClogo.png";
import moonBg from "../assets/images/moonBg.jpg";

import { animationYr } from "../assets/constants/Animations";

import GlitchText from "../components/GlitchText";
import Text from "../components/Text";

const About = () => {
  const bikeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bikeRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.3]);

  return (
    <div className="w-full overflow-hidden">
      <section className="flex flex-col items-center text-center gap-14 text-white relative h-screen w-full overflow-hidden ">
        <img
          src={heroBg}
          alt="heroBg"
          className="absolute w-full h-full object-cover object-center"
        />

        <m.img
          src={herobgBike}
          style={{ scale }}
          alt="heroBgBike"
          className="z-10 absolute  w-full h-full object-cover object-center transition-all duration-200 ease-linear"
          ref={bikeRef}
        />
        <img
          src={herobgstone}
          alt="herobgstone"
          className="z-10 absolute  w-full h-full  object-cover object-center"
        />
        <div className="mt-24 px-10">
          <h1 className="mb-2 uppercase text-white tracking-[.5rem] text-xs lg:text-lg md:text-sm">
            the future tech service
          </h1>

          <GlitchText>learn more about us</GlitchText>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[#060738] flex justify-center items-center h-screen  text-white sticky top-0 -z-10">
        <div>
          <div className="text-center pt-20">
            <Text>About Us</Text>
          </div>
          <div
            className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row gap-5 mt-10
        text-center md:text-left text-sm 2xl:text-xl"
          >
            <div className="flex-1 flex flex-col gap-2 text-xl">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sit corrupti itaque aut cumque, reiciendis rem, voluptatum
                voluptates in, expedita quibusdam minima!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sit corrupti itaque aut cumque, reiciendis rem, voluptatum
                voluptates in, expedita quibusdam minima!
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-5 text-xl">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                velit cumque quasi, aspernatur ea nihil unde et quam voluptas
                autem architecto tenetur eligendi pariatur dolor magni expedita
                impedit vitae perspiciatis?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laborum vel odio sapiente
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" overflow-hidden sticky top-0 min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center -z-10"
        style={{
          backgroundImage: `url(${moonBg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-white text-center">
          <img
            className="w-[8rem] md:w-[12rem] 2xl:w-[16rem] mx-auto"
            src={logo}
            alt="logoImg"
          />
          <h2
            className="text-gradient uppercase font-bold text-[4rem]"
            style={{ textShadow: "4px -2px white" }}
          >
            our mission and vision
          </h2>
          <p className="px-6 text-xl lg:w-[60rem] 2xl:w-[85rem] mx-auto ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            eligendi maiores. Eius sint laboriosam quo porro minus libero eos
            perspiciatis? Fuga, veniam corporis consectetur culpa qui quasi
            rerum dicta iste at nulla harum blanditiis sed laborum laboriosam
          </p>
        </div>
        <section
          className=" overflow-hidden  h-screen w-full bg-center bg-cover flex justify-center items-center relative "
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          {Array(14)
            .fill(1)
            .map((_, i) => (
              <img
                className="z-10 absolute right-0 left-0 bottom-[-3rem] sm:bottom-[-6rem] md:bottom-[-9rem]
              2xl:bottom-[-15rem]"
                key={i}
                src={cloud}
                alt="cloudImg"
                style={{ animation: `cloud ${i + 15}s linear infinite` }}
              />
            ))}

          <img
            src={bgRock}
            alt="rock"
            className="absolute  z-10 -bottom-2 w-full h-full"
          />
        </section>
      </section>

      <section className=" w-full overflow-hidden flex bg-[#060738] flex-col justify-center items-center bg-aboutBg isolate py-10 text-center text-white gap-10">
        <div className="mt-20">
          <h3
            className="text-gradient text-3xl uppercase mb-5"
            style={{ textShadow: "4px -2px white" }}
          >
            {" "}
            why choose us
          </h3>
          <p className=" tracking-[.5rem] uppercase">
            Lorem ipsum dolor sit amet{" "}
          </p>
        </div>

        <m.div
          className="flex  md:flex-row flex-col p-10   gap-5 isolate  "
          variants={animationYr}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <m.div className=" magic-card  md:!h-[20vw] !h-56 aspect-square magic-card  relative ">
            <div className="absolute h-full w-full bg-blue-400 rounded-lg opacity-20 backdrop-blur-lg "></div>

            <div className="absolute inset-0 flex text-gray-300 hover:text-white flex-col gap-5 justify-center items-center ">
              <FaScrewdriverWrench className="text-6xl " />
              <h3 className="font-extrabold uppercase text-2xl">
                We are flexible
              </h3>
            </div>
          </m.div>
          <m.div className=" magic-card  md:!h-[20vw] !h-56 aspect-square magic-card  relative ">
            <div className="absolute h-full w-full bg-blue-400 rounded-lg opacity-20 backdrop-blur-lg "></div>

            <div className="absolute inset-0 flex text-gray-300 hover:text-white flex-col gap-5 justify-center items-center ">
              <MdOutlineFlashOn className="text-6xl " />
              <h3 className="font-extrabold uppercase text-2xl">We are fast</h3>
            </div>
          </m.div>

          <m.div className=" magic-card  md:!h-[20vw] !h-56 aspect-square magic-card  relative ">
            <div className="absolute h-full w-full bg-blue-400 rounded-lg opacity-20 backdrop-blur-lg "></div>

            <div className="absolute inset-0 flex text-gray-300 hover:text-white flex-col gap-5 justify-center items-center ">
              <BiSolidBadgeCheck className="text-6xl " />
              <h3 className="font-extrabold uppercase text-2xl">
                We are discipline
              </h3>
            </div>
          </m.div>
        </m.div>
      </section>

      <Founder />

      <AboutBlog />
    </div>
  );
};

export default About;
