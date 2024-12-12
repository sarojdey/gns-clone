import { useState } from "react";

import IndustriesList from "../components/sections/industriesSections/IndustriesList";
import IndustryModal from "../components/sections/industriesSections/IndustryModal";

import IndustryInfo from "../components/sections/industriesSections/IndustryInfo";

import heroFrontBg from "../assets/images/hero-bottomInd.png";
import heroBg from "../assets/images/heroInd.jpg";
import GlitchText from "../components/GlitchText";
import { IndustryData } from "../assets/constants/data";

const Industries = () => {
  const [selected, setSelected] = useState<IndustryData | null>(null);

  return (
    <div className="w-full overflow-hidden">
      <section
        id="baner"
        className=" w-full h-screen fixed top-0 left-0 -z-10 flex flex-col items-center text-center  text-white isolate bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="mt-24 mb-2 uppercase text-white tracking-[.5rem] text-xs lg:text-lg md:text-sm">
          the future tech service
        </h1>

        <GlitchText>we create we provide</GlitchText>
      </section>
      <section
        id="hero-section-front Homesection"
        className="bg-cover w-full h-screen bg-center"
        style={{ backgroundImage: `url(${heroFrontBg})` }}
      >
        {" "}
      </section>
      <div className=" w-full h-[200px] bg-gradient-to-b from-[#2d2265] to-[#171323]"></div>

      <IndustryInfo />
      <div className=" w-full h-[200px] bg-gradient-to-b from-[#171323] to-[#2d2265]"></div>

      <IndustriesList setSelected={setSelected} />
      <IndustryModal selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Industries;
