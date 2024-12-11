import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

import fi1 from "../../assets/images/1.svg";
import fi2 from "../../assets/images/2.svg";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/Instagram.png";
import pinterest from "../../assets/images/Pinterest.png";
import reddit from "../../assets/images/Reddit.png";
import twitter from "../../assets/images/Twitter.png";
import wp from "../../assets/images/wp.png";
import yt from "../../assets/images/yt.png";
import logo from "../../assets/images/HSClogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2d2265] w-full h-full flex flex-col justify-between text-center z-40">
      <div className="flex justify-between items-center px-6 py-5 flex-col lg:flex-row gap-3 ">
        <img src={logo} alt="logo" className="w-12" />

        <div className="flex justify-center items-center md:gap-10 gap-5 uppercase font-semibold flex-wrap ">
          <div className="flex justify-center items-center flex-col gap-2">
            <MdLocationOn className="text-xl text-white" />
            <h4 className="  text-white  hover:text-[#e6444f] cursor-pointer text-xs ">
              jagarpada,bhubaneswar, odisha,751006
            </h4>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <AiTwotoneMail className="text-xl text-white" />
            <h4 className=" text-white  hover:text-[#e6444f]  cursor-pointer text-xs">
              info@grapsnextsocial.com
            </h4>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <AiFillPhone className="text-xl text-white" />
            <h4 className=" text-white hover:text-[#e6444f]  cursor-pointer text-xs">
              123456789
            </h4>
          </div>
        </div>
      </div>
      <hr className="h-0.2 bg-slate-300" />

      <div className="flex justify-around items-center font-semibold  p-5 text-slate-500 gap-5">
        <p className="text-xs">Teams Of Service</p>
        <p className="text-xs">@ grapsnextsocial . All Rights Reserved</p>
        <p className="text-xs">Privacy Policy</p>
      </div>

      <div className="flex justify-between flex-col lg:flex-row  items-center">
        <div className=" lg:inline-block hidden basis-full">
          <img
            src={fi1}
            alt=""
            className="w-full h-full object-cover animate-float"
          />
        </div>
        <h2
          className="text-gradient text-[3rem] uppercase font-bold text-center basis-full"
          style={{ textShadow: "4px -3px white" }}
        >
          lets build your dream project together
        </h2>
        <div className=" lg:inline-block hidden basis-full">
          <img
            src={fi2}
            alt=""
            className="w-full h-full object-cover animate-float"
          />
        </div>
      </div>
      <div>
        <div className="flex-col flex justify-center items-center p-5 gap-5 text-center">
          <h4
            className="text-gradient text-xl uppercase font-semibold"
            style={{ textShadow: "3px -2px white" }}
          >
            {" "}
            socials
          </h4>

          <div className="flex gap-2 md:flex-row flex-col justify-center items-center">
            <div className="flex gap-2">
              <img
                src={fb}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{ filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))" }}
              />
              <img
                src={insta}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{ filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))" }}
              />
              <img
                src={yt}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{ filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))" }}
              />
              <img
                src={wp}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{ filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))" }}
              />
            </div>
            <div className="flex gap-2">
              <img
                src={twitter}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{ filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))" }}
              />
              <img
                src={reddit}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{ filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))" }}
              />
              <img
                src={pinterest}
                alt=""
                className="w-12 hover:scale-125 transition-all  "
                style={{ filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))" }}
              />
            </div>
          </div>

          <p className="text-xs text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non
            voluptatem ad atque voluptates consequatur voluptate neque magnam
            ipsum nihil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
