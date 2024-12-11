import heroFrontBg from "../assets/images/hero-bottomC.png";
import heroBg from "../assets/images/heroC.jpg";
import GnsDetails from "../components/sections/careerSections/GnsDetails";
import HiringCriteria from "../components/sections/careerSections/HiringCriteria";
import JoinUs from "../components/sections/careerSections/JoinUs";
import UploadCV from "../components/sections/careerSections/UploadCV";
import WhyChooseGns from "../components/sections/careerSections/WhyChooseGns";

const Career = () => {
  return (
    <div className="w-full overflow-hidden">
      <section
        id="baner"
        className=" h-screen w-full fixed top-0 left-0 -z-10 flex flex-col items-center text-center  text-white isolate bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="mt-24 mb-2 uppercase text-white tracking-[.5rem] text-xs lg:text-lg md:text-sm">
          the future tech service
        </h1>
      </section>
      <section
        id="hero-section-front Homesection"
        className=" h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFrontBg})` }}
      >
        {" "}
      </section>

      <GnsDetails />
      <WhyChooseGns />
      <HiringCriteria />
      <JoinUs />
      <UploadCV />
    </div>
  );
};

export default Career;
