import contactBg from "../../assets/images/contactBg.jpg";
import contactImg from "../../assets/images/contactImg.jpg";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/Instagram.png";
import pinterest from "../../assets/images/pinterest.png";
import reddit from "../../assets/images/Reddit.png";
import twitter from "../../assets/images/Twitter.png";
import wp from "../../assets/images/wp.png";
import yt from "../../assets/images/yt.png";

import { motion } from "framer-motion";

import { animationX, animationXr } from "../../assets/constants/Animations";
import Button from "../Button";

const Contact = () => {
  return (
    <section className="h-screen w-screen min-h-[45.5rem]">
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        className="w-full h-full lg:p-20 p-5 flex lg:flex-row flex-col"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={animationX}
          transition={{ delay: 0.2, duration: 1 }}
          className="bg-red-500 h-full lg:basis-full basis-2/12   flex flex-col justify-between items-center  p-5"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            className="text-gradient text-center text-3xl uppercase"
            style={{ textShadow: "3px -3px white " }}
          >
            lets get in touch
          </h2>
          <div className="flex md:gap-2 gap-0 md:flex-row flex-col justify-center items-center">
            <div className="flex gap-2">
              <img
                src={fb}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{
                  filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.4))",
                  flex: "1 1 150px",
                }}
              />
              <img
                src={insta}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{
                  filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.4))",
                  flex: "1 1 150px",
                }}
              />
              <img
                src={yt}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{
                  filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.4))",
                  flex: "1 1 150px",
                }}
              />
              <img
                src={wp}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{
                  filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.4))",
                  flex: "1 1 150px",
                }}
              />
            </div>
            <div className="flex gap-2">
              <img
                src={twitter}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{
                  filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.4))",
                  flex: "1 1 150px",
                }}
              />
              <img
                src={reddit}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{
                  filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.4))",
                  flex: "1 1 150px",
                }}
              />
              <img
                src={pinterest}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{
                  filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.4))",
                  flex: "1 1 150px",
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={animationXr}
          transition={{ delay: 0.2, duration: 1 }}
          className="glassEffect lg:basis-full basis-10/12 p-10 "
        >
          <motion.h3
            className="text-gradient text-center mb-3 text-3xl uppercase"
            style={{ textShadow: "3px -3px white" }}
            variants={animationXr}
            transition={{ delay: 1, duration: 1 }}
          >
            quick contact
          </motion.h3>

          <form className="w-full  flex flex-col justify-between items-center">
            <motion.div
              className="input-container w-full mb-1"
              variants={animationXr}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <input
                id="name"
                placeholder="Name"
                type="text"
                name="name"
                className="contact-input lg:h-10 h-10 text-black"
              />
            </motion.div>

            <motion.div
              className="input-container  w-full  mb-1"
              variants={animationXr}
              transition={{ delay: 1.8, duration: 1 }}
            >
              <input
                id="email"
                placeholder="Email"
                type="email"
                name="email"
                className="contact-input lg:h-10 h-10 text-black"
              />
            </motion.div>
            <motion.div
              className="input-container  w-full  mb-1"
              variants={animationXr}
              transition={{ delay: 2, duration: 1 }}
            >
              <input
                id="number"
                placeholder="Number"
                type="number"
                name="number"
                className="contact-input lg:h-10 h-10 text-black"
              />
            </motion.div>
            <motion.div
              className="input-container  w-full  mb-1"
              variants={animationXr}
              transition={{ delay: 2.2, duration: 1 }}
            >
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                className="contact-input lg:h-30 h-30 text-black"
              />
            </motion.div>

            <Button
              style={{ width: "100%", marginTop: "1rem" }}
              type="submit"
              className="btn font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              send
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
