// import Button from "../../Button";

const JoinUs = () => {
  return (
    <div className="bg-[#181424]  w-full flex  text-center justify-center items-center">
      <div className=" flex-col z-10 w-[90%] md:w-[60%]  bg-gradient-to-b from-[#9427cf]/70 to-[#181424]  flex  justify-evenly  items-center p-8 md:p-20 rounded-lg gap-5">
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

        <button className="mt-5 md:mt-10 gradient-button text-xl uppercase !px-6 !py-4 font-bold">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
