import Articles from "../components/sections/blogSections/Articles";
import BlogQ from "../components/sections/blogSections/BlogQ";
import BlogStories from "../components/sections/blogSections/BlogStories";

import heroBottom from "../assets/images/hero-bottomblg.png";
import heroBg from "../assets/images/heroblg.jpg";
import GlitchText from "../components/GlitchText";

const Blog = () => {
  return (
    <div className="w-full overflow-hidden">
      <section
        id="baner"
        className="fixed w-full h-screen top-0 left-0 -z-10 flex flex-col items-center text-center  text-white isolate bg-cover bg-center"
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

      <Articles />
      <BlogQ />
      <BlogStories />
    </div>
  );
};

export default Blog;
