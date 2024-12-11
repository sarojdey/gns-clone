import bg from "../../../assets/images/join-us-bg.svg";
import Button from "../../Button";

const JoinUs = () => {
  return (
    <section className="bg-[#2d2265] h-screen w-full">
      <div
        className="h-full w-full bg-cover bg-center flex p-20"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="basis-full  flex justify-center items-center flex-col gap-5">
          <h2
            className="text-gradient uppercase text-6xl font-bold "
            style={{ textShadow: "4px -4px white" }}
          >
            open for internship
          </h2>
          <p className="text-black text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quo esse cupiditate odit possimus deleniti vel velit tenetur ut
            deserunt.
          </p>
          <Button>Join Us</Button>
        </div>
        <div className="basis-full md:inline-block hidden"></div>
      </div>
    </section>
  );
};

export default JoinUs;
