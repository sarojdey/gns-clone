import Button from "../../Button";

const JoinUs = () => {
  return (
    <div className="bg-[#181424] md:min-h-screen w-full flex justify-center items-center">
      <div className="magic-card2 flex-col z-10 max-w-[600px] m-2  !p-5 md:!p-16 gap-5">
        <div className="absolute h-full w-full bg-black rounded-lg opacity-20 backdrop-blur-lg "></div>
        <h2
          className="text-gradient uppercase text-4xl md:text-6xl font-bold "
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
    </div>
  );
};

export default JoinUs;
