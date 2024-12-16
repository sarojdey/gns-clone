import base from "../assets/images/base.png";
import homeBg from "../assets/images/bg.png";
import building from "../assets/images/building.png";
import Button from "../components/Button";
import GlitchText from "../components/GlitchText";
import Contact from "../components/sections/ContactUs";
import GetStarted from "../components/sections/GetStarted";
import ProjectCarousal from "../components/sections/projectCarousel/ProjectCarousel";
import ServicesCarousel from "../components/sections/ServicesCarousel";
import Testimony from "../components/sections/Testimony";
import WorldMap from "../components/sections/WorldMap";
import Text from "../components/Text";

function Home() {
  return (
    <div className="w-full overflow-hidden isolate">
      <section className="fixed top-0 left-0 -z-30 h-screen w-screen">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute z-20 inset-0 flex flex-col text-center justify-start items-center">
          <p className="mt-32 mb-2 uppercase tracking-[.5rem]">
            the future tech service
          </p>

          <GlitchText>Graps Next Social</GlitchText>
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${building})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
      <section
        className="h-screen w-screen"
        style={{
          backgroundImage: `url(${base})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>
      <section className="bg-[#312168] text-center flex flex-col items-center p-10">
        <Text>About Us</Text>
        <p className="max-w-[50rem] text-xl tracking-normal mt-5 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ducimus illum iure nisi odit, reiciendis unde quas magni ipsam
          doloribus. Qui nobis accusantium quidem est, molestiae ratione
          perspiciatis repudiandae alias, quas, laborum eligendi quam possimus
          quo officiis! Odio, repudiandae deleniti?
        </p>
        <Button>Learn More</Button>
        <p className="mt-24 uppercase text-gradient tracking-[.5rem] text-center">
          lets build your dream together
        </p>
      </section>
      <section className="bg-[#2d2265] ">
        <ServicesCarousel />
      </section>
      <section className="bg-[#2d2265]">
        <WorldMap />
      </section>
      <section className="bg-[#2d2265]">
        <GetStarted />
      </section>

      <ProjectCarousal />

      <Testimony />
      <Contact />
    </div>
  );
}

export default Home;
