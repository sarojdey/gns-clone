import imgOne from "../../assets/images/team1.jpg";
import imgtwo from "../../assets/images/team3.jpg";
import liquidBg from "../../assets/images/teamBg.jpg";

const AboutBlog = () => {
  return (
    <section className=" md:min-h-screen overflow-hidden">
      <div className=" h-full w-full flex flex-col md:gap-10 gap-6 text-white  px-20 py-5 justify-around relative isolate">
        <div className="absolute inset-0 -z-20">
          <div
            className="particle-container h-full w-full "
            style={{
              backgroundImage: `url(${liquidBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3
            className="text-gradient text-3xl mt-5 mb-4 uppercase"
            style={{ textShadow: "4px -2px white" }}
          >
            our blogs
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            nostrum.
          </p>
        </div>

        <div className="  flex  justify-center items-center gap-10  md:flex-row flex-col">
          <div className=" md:basis-2/6 md:h-full h-56 w-full rounded-xl">
            <img src={imgOne} alt="" className=" object-cover w-full h-full" />
          </div>
          <div className=" basis-4/6 flex flex-col gap-5  md:items-start items-center  justify-center text-sm ">
            <p className="text-sm">
              {" "}
              march 16 2020{" "}
              <span className="px-3 py-2 text-black ml-5 bg-slate-300 rounded-3xl">
                marketing
              </span>{" "}
            </p>
            <h4 className="font-semibold text-xl uppercase">
              boost your coversation rate
            </h4>
            <p className="text-lg md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              fugit fuga cupiditate, molestiae reprehenderit adipisci culpa
              deleniti id voluptates voluptate?
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 md:flex-row flex-col-reverse">
          <div className=" basis-4/6 flex flex-col gap-5 md:items-end items-center justify-center text-sm ">
            <p className="text-sm">
              {" "}
              march 16 2020{" "}
              <span className="px-3 py-2  text-black ml-5 bg-slate-300 rounded-3xl">
                marketing
              </span>{" "}
            </p>
            <h4 className="font-semibold text-xl uppercase">
              boost your coversation rate
            </h4>
            <p className="text-lg  md:text-right text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              fugit fuga cupiditate, molestiae reprehenderit adipisci culpa
              deleniti id voluptates voluptate?
            </p>
          </div>
          <div className="md:basis-2/6 md:h-full h-56 w-full  rounded-xl">
            <img src={imgtwo} alt="" className=" object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlog;
