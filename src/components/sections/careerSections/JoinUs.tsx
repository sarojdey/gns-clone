import Button from "../../Button";

const JoinUs = () => {
  return (
    <section className="bg-[#181424] h-screen w-full flex justify-center items-center">
      <div className="magic-card2 flex-col z-10 max-w-[600px]  !p-16 gap-5">
        <div className="absolute h-full w-full bg-black rounded-lg opacity-20 backdrop-blur-lg "></div>
        <h2
          className="text-gradient uppercase text-6xl font-bold "
          style={{ textShadow: "4px -4px white" }}
        >
          open for internship
        </h2>
        <p className="text-white text-xl font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quo esse cupiditate odit possimus deleniti vel velit tenetur ut
          deserunt.
        </p>
        <Button>Join Us</Button>
      </div>
    </section>
  );
};

export default JoinUs;
