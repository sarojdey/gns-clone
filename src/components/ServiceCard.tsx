import { slideIn } from "../assets/constants/Animations";
import { motion } from "framer-motion";
import Button from "./Button";
import { Dispatch, SetStateAction } from "react";

type ServiceProps = {
  key: string;
  id: string;
  title: string;
  url: string;
  abv: string;
  activeSlide: string;
  setActiveSlide: Dispatch<SetStateAction<string>>;
  index: number;
};

const ServiceCard: React.FC<ServiceProps> = ({
  id,
  title,
  url,
  abv,
  activeSlide,
  setActiveSlide,
  index,
}) => {
  return (
    <motion.div
      variants={slideIn("right", "spring", index * 0.5, 0.75)}
      className={` text-white service-world-card rounded-3xl relative h-[54px] transition-[flex] ease-out duration-[0.7s] cursor-pointer  lg:h-[600px]  ${
        activeSlide === id ? "flex-[10] lg:flex-[2]" : "flex-2 lg:flex-[0.5]"
      }`}
      onClick={() => setActiveSlide(id)}
    >
      <img
        src={url}
        alt="world"
        className="absolute w-full h-full rounded-3xl object-cover"
      />

      {activeSlide !== id ? (
        <div className="absolute z-0 bottom-4 left-6 font-bold   lg:bottom-20 lg:left-10 lg:rotate-[-90deg] lg:origin-[0,0] lg:text-xl xl:text-2xl ">
          {abv}
        </div>
      ) : (
        <div className="absolute flex flex-col justify-between  bottom-0 p-6 w-full h-full bg-[rgba(0,0,0,0.6)] rounded-3xl md:p-2 lg:h-fit lg:p-8 lg:gap-8 lg:rounded-t-none xl:gap-12 items-center ">
          <div className="lg:inline-block hidden">
            <Button>Learn More</Button>
          </div>
          <div className="font-bold uppercase  md:text-2xl lg:text-xl xl:text-3xl">
            {title}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
