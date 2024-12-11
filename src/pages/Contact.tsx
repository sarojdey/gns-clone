import { motion as m } from "framer-motion";

import bg from "../assets/images/contactpageBglast.jpg";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute w-full h-screen  bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="h-full w-full items-center flex justify-center pt-20 ">
          <form className=" flex  lg:flex-row flex-col rounded-lg  font-latoRegular">
            <div className="flex-1 text-white p-10">
              <h2
                className="text-gradient uppercase text-4xl pb-5 font-semibold"
                style={{ textShadow: "4px -2px white" }}
              >
                lets connect
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                sequi ducimus perspiciatis dolorum earum, vel nisi hic corporis
                quam alias!
              </p>

              <div className="mt-6 ">
                <div className="pb-4">
                  <p className="text-sm font-latoBold text-red-400 "></p>
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md md:w-1/2 w-full focus:border-teal-500 focus:ring-teal-500  "
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="pb-4">
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md md:w-1/2 w-full focus:border-teal-500 focus:ring-teal-500 "
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="pb-4">
                  <select
                    className="  border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                    id="country"
                    name="country"
                  >
                    <option>India</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>China</option>
                    <option>Dubai</option>
                  </select>
                </div>

                <div className="pb-4">
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md md:w-1/2 w-full focus:border-teal-500 focus:ring-teal-500 "
                    type="number"
                    name="number"
                    placeholder="Enter your number number"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex-1  p-10 text-white">
              <div className="pb-4">
                <select
                  className="  border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                  id="project"
                  name="project"
                >
                  <option>Web Dev</option>
                  <option>Ai</option>
                  <option>Data Analysis</option>
                  <option>Cyber Security</option>
                  <option>Cloud</option>
                </select>
              </div>

              <div className="pb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write here"
                  className="border p-5 w-full md:h-1/2 h-56 rounded-xl "
                />
              </div>

              <div className="pb-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    className="h-5 w-5   border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500 "
                  />
                  <p className="text-sm font-latoBold text-gray-400">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>

              <Button style={{ width: "100%" }}>Send</Button>
            </div>
          </form>
        </div>
      </m.section>
      <section className=" h-screen w-full bg-cover bg-center"> </section>
    </div>
  );
};

export default Contact;
