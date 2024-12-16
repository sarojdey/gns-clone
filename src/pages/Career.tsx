import heroFrontBg1 from "../assets/images/fg1.svg";
import heroFrontBg2 from "../assets/images/fg2.svg";
import heroBg from "../assets/images/fg1.jpg";
import GnsDetails from "../components/sections/careerSections/GnsDetails";
import HiringCriteria from "../components/sections/careerSections/HiringCriteria";
import JoinUs from "../components/sections/careerSections/JoinUs";
import UploadCV from "../components/sections/careerSections/UploadCV";
import WhyChooseGns from "../components/sections/careerSections/WhyChooseGns";
import GlitchText from "../components/GlitchText";

const Career = () => {
  return (
    <div className="b-[#241b4d]">
      <div className="w-full overflow-hidden isolate">
        <div
          id="baner"
          className="h-[120vh] w-full fixed top-0 left-0 -z-10 flex flex-col items-center text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <h1 className="mt-24 mb-2 uppercase text-white tracking-[.5rem] text-xs lg:text-lg md:text-sm">
            Be part of something Bigger
          </h1>
          <GlitchText>join your dream team</GlitchText>
        </div>

        <div className="h-[120vh] w-full relative">
          <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>

          <img
            src={heroFrontBg1}
            alt="Decorative Wave Background"
            className="w-full h-full object-cover absolute left-0 bottom-0 z-20"
          />
          <img
            src={heroFrontBg2}
            alt="Decorative Wave Background"
            className="w-full h-full object-cover absolute left-0 bottom-1 bg z-10"
          />
        </div>

        {/* Content Sections */}
        <GnsDetails />
        <WhyChooseGns />
        <HiringCriteria />
        <JoinUs />
        <UploadCV />
      </div>
    </div>
  );
};

export default Career;
