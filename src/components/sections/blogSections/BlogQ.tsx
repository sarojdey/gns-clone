import { motion as m } from "framer-motion";
import { animationYr } from "../../../assets/constants/Animations";

const BlogQ = () => {
  return (
    <m.section
      className=" bg-[#060738] flex justify-center items-center flex-col gap-5"
      initial={"offScreen"}
      whileInView={"onScreen"}
    >
      <m.div
        className="text-center"
        variants={animationYr}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h3
          className="text-gradient text-4xl uppercase font-bold mb-5"
          style={{ textShadow: "2px -2px white" }}
        >
          freq asked question
        </h3>
        <p className="text-white tracking-[.4rem] uppercase">
          This is a list of recently added articles
        </p>
      </m.div>
      <m.div
        className="grid grid-cols-1  md:grid-cols-4 p-10"
        variants={animationYr}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="col-1-of-4 ">
          <div className="card__carve card__carve-v1  bg-red-500 py-20 px-10 space-y-5">
            <i className="fa fa-truck icon-font"></i>
            <h4 className="uppercase font-semibold text-white">
              Lorem ipsum dolor sit1.
            </h4>
            <p className="text-gray-300 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              eaque
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="card__carve card__carve-v2 bg-red-500 py-20 px-10 space-y-5">
            <i className="fa fa-hourglass-start icon-font"></i>
            <h4 className="uppercase font-semibold text-white">
              Lorem ipsum dolor sit2.
            </h4>
            <p className="text-gray-300 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              eaque
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="card__carve card__carve-v1 bg-red-500 py-20 px-10 space-y-5">
            <i className="fa fa-address-card icon-font"></i>
            <h4 className="uppercase font-semibold text-white">
              Lorem ipsum dolor sit3.
            </h4>
            <p className="text-gray-300 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              eaque
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="card__carve card__carve-v2 bg-red-500 py-20 px-10 space-y-5">
            <i className="fa fa-map-signs icon-font"></i>
            <h4 className="uppercase font-semibold text-white">
              Lorem ipsum dolor sit4.
            </h4>
            <p className="text-gray-300 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              eaque
            </p>
          </div>
        </div>
      </m.div>
    </m.section>
  );
};

export default BlogQ;
