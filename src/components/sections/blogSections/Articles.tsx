import { motion as m } from "framer-motion";
import { articleData } from "../../../assets/constants/data";
import {
  slideIn,
  staggerContainer,
} from "../../../assets/constants/Animations";

export default function Articles() {
  return (
    <m.section
      className="h-fit py-20 px-6 bg-[#060738] "
      variants={staggerContainer(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h3
            className="text-gradient text-4xl font-bold uppercase mb-5"
            style={{ textShadow: "2px -2px white" }}
          >
            Newest Articles
          </h3>
          <p className="text-white uppercase tracking-[.4rem] mb-7">
            This is a list of recently added articles
          </p>
        </div>
        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
          variants={staggerContainer(0.24)}
        >
          {articleData.map((data, i) => {
            return (
              <m.div
                className="bg-white shadow-lg rounded-lg relative border-2 border-red-500 hover:scale-105 "
                key={data.id}
                variants={slideIn("up", "spring", i * 0.2, 1)}
              >
                <img
                  src={data.img}
                  alt="articles"
                  className="w-full rounded-t-md object-cover"
                />
                <div className="text-sm absolute -top-5 -right-5 bg-white border-2 border-red-500 px-4 text-gray-800 rounded-md h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 ">
                  <span className="font-bold">{data.date}</span>
                  <small>{data.month}</small>
                </div>
                <div className="py-4 px-6">
                  <h1 className="font-bold uppercase font-quicksand text-base text-gray-700">
                    {data.title}
                  </h1>
                  <p className="font-bold font-quicksand text-sm text-justify text-gray-500">
                    {data.description}
                  </p>
                  <div className="flex flex-row items-center gap-2 mt-4">
                    <img
                      src={data.userImg}
                      className="rounded-full w-8"
                      alt="user"
                    />
                    <p className="text-gray-400 text-xs">{data.user}</p>
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </m.section>
  );
}
