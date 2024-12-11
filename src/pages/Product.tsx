import heroBg from "../assets/images/hero-2.jpg";
import heroBottom from "../assets/images/hero-bottomP.png";
import GlitchText from "../components/GlitchText";
import Membership from "../components/sections/productSections/Membership";
import MobMembership from "../components/sections/productSections/MobMembership";

const Products = () => {
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

        <GlitchText>we create we provide</GlitchText>
      </section>
      <section
        id="hero-section-front Homesection"
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBottom})` }}
      ></section>

      <Membership />

      <div className="inline-block bg-[#050638] md:hidden w-full lg:h-screen h-fit min-h-[45.5rem]">
        <MobMembership />
      </div>
    </div>
  );
};

export default Products;
