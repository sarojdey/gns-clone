import { motion as m } from "framer-motion";
import { blogStoriesData } from "../../../assets/constants/data";
import { animationYr } from "../../../assets/constants/Animations";

const BlogStories = () => {
  return (
    <section className="h-fit">
      {blogStoriesData.map((data) => {
        return (
          <m.div
            className=" bg-[#060738] text-center pt-20"
            key={data.id}
            initial={"offScreen"}
            whileInView={"onScreen"}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div
              className={`rounded-2xl min-h-[30rem] ${
                data.id % 2 === 0 ? "lg:mr-72" : "lg:ml-72"
              } ml-10 mr-10  flex p-5 gap-3 relative  `}
            >
              <m.div
                className="blogInfo md:basis-2/3 basis-full rounded-2xl  flex justify-center items-center flex-col gap-5 md:p-10 p-5 md:mt-0 mt-10  "
                variants={animationYr}
                transition={{ delay: 0.3, duration: 1 }}
                style={{
                  background: `linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)),url(${data.bgImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h3 className="text-white font-semibold uppercase text-3xl">
                  {data.title}
                </h3>
                <p className="text-slate-300 text-lg">{data.description}</p>
              </m.div>
              <m.div
                className="blogUserImg md:inline-block hidden md:basis-1/3  rounded-2xl bg-pink-300"
                variants={animationYr}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <img
                  src={data.userImg}
                  alt="user"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </m.div>

              <div
                className={`md:hidden inline-block h-28 w-28 z-10 absolute bg-pink-300 ${
                  data.id % 2 == 0 ? "left-0" : "right-0"
                } -top-5  rounded-2xl`}
              >
                <img
                  src={data.userImg}
                  alt="user"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </m.div>
        );
      })}
    </section>
  );
};

export default BlogStories;
