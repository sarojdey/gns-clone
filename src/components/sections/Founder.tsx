import founderImg from "../../assets/images/JPEG image 18.jpg";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/Instagram.png";

const Founder = () => {
  return (
    <section className="bg-[#060626] w-full overflow-hidden">
      <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-10 bg-aboutBg text-center  text-white isolate bg-cover bg-center">
        <div className="h-full lg:basis-1/2 flex flex-col gap-2 justify-center items-center ">
          <h2
            className=" text-gradient text-3xl uppercase"
            style={{ textShadow: "4px -2px white" }}
          >
            Founder
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            molestias consequuntur incidunt quod vero officiis, quam ipsum illum
            repellendus magni possimus dignissimos nesciunt recusandae dolore
            mollitia ipsam qui beatae nostrum!
          </p>
        </div>
        <div className=" lg:basis-1/2 relative h-full flex flex-col  justify-center items-center ">
          <div className=" md:w-1/2 w-full h-96 md:h-2/3  clip1">
            <img
              src={founderImg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="  md:w-1/2 w-full h-1/2 relative md:-top-20 md:left-20 -top-20 left-0 gap-5   clip1  glassEffect flex flex-col justify-between p-5 ">
            <p className="text-xl uppercase font-bold ml-5">information</p>
            <hr />
            <h3
              className=" text-gradient text-2xl uppercase font-bold"
              style={{ textShadow: "4px -2px white" }}
            >
              john wick
            </h3>
            <p>
              occupation Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aut, corrupti.
            </p>
            <hr />
            <div className="flex justify-center items-center gap-2 flex-col">
              <p className="uppercase font-bold">contact him</p>
              <div className="flex">
                <img
                  src={fb}
                  alt=""
                  className="w-12 hover:scale-125 transition-all  "
                  style={{
                    filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))",
                  }}
                />
                <img
                  src={insta}
                  alt=""
                  className="w-12 hover:scale-125 transition-all  "
                  style={{
                    filter: "drop-shadow(-10px 10px 5px rgba(0,0,0,.2))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
