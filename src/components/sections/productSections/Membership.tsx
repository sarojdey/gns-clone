import sub1 from "../../../assets/images/subscribe1.jpg";
import sub2 from "../../../assets/images/subscribe2.jpg";
import sub3 from "../../../assets/images/subscribe3.jpg";
import Button from "../../Button";

const Membership = () => {
  return (
    <div
      className=" hidden md:flex bg-[#050638] w-full h-screen gap-4 justify-center flex-wrap items-center"
      // style={{
      //   backgroundImage: `url(${sub})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="cardR m-10">
        <div
          className="faceR frontR w-full h-full  bg-cover bg-center"
          style={{ backgroundImage: `url(${sub1})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-60 justify-evenly flex flex-col items-center">
            <div>
              <h4 className="text-2xl uppercase font-bold">Normal</h4>
              <p className="tracking-[.1rem] font-semibold ">
                Attend only first day
              </p>
            </div>
            <h2 className="font-bold">
              <span>$</span>45.80
            </h2>

            <div>
              <Button>know more</Button>
            </div>
          </div>
        </div>
        <div
          className="faceR backR w-full h-full  bg-cover bg-center"
          style={{ backgroundImage: `url(${sub1})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-60 justify-evenly flex flex-col items-center">
            <h3 className="text-xl font-bold uppercase">what we offer</h3>
            <ul className="text-lg font-semibold">
              <li>Unlimited of Website</li>
              <li>Unlimited Disk Space</li>
              <li>Unlimited Bandwidth</li>
              <li>24/7/365 Support</li>
              <li>Unlimited Email Accounts</li>
              <li>99.9% Service Uptime</li>
            </ul>

            <Button>suscribe now</Button>
          </div>
        </div>
      </div>

      <div className="cardR m-10">
        <div
          className="faceR frontR w-full h-full  bg-cover bg-center"
          style={{ backgroundImage: `url(${sub3})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-60 justify-evenly flex flex-col items-center">
            <div>
              <h4 className="text-2xl uppercase font-bold">PREMIUM</h4>
              <p className=" tracking-[.1rem] font-semibold ">
                Attend only first day
              </p>
            </div>

            <h2 className="font-bold">
              <span>$</span>45.80
            </h2>

            <div className="card-pricing__footer">
              <Button>know more</Button>
            </div>
          </div>
        </div>
        <div
          className="faceR backR w-full h-full  bg-cover bg-center"
          style={{ backgroundImage: `url(${sub3})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-60 justify-evenly flex flex-col items-center">
            <h3 className="text-xl font-bold uppercase">what we offer</h3>
            <ul className="text-lg font-semibold">
              <li>Unlimited of Website</li>
              <li>Unlimited Disk Space</li>
              <li>Unlimited Bandwidth</li>
              <li>24/7/365 Support</li>
              <li>Unlimited Email Accounts</li>
              <li>99.9% Service Uptime</li>
            </ul>

            <Button>suscribe now</Button>
          </div>
        </div>
      </div>

      <div className="cardR m-10">
        <div
          className="faceR frontR w-full h-full  bg-cover bg-center"
          style={{ backgroundImage: `url(${sub2})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-60 justify-evenly flex flex-col items-center">
            <div>
              <h4 className="text-2xl uppercase font-bold">ULTIMATE</h4>
              <p className=" tracking-[.1rem] font-semibold ">
                Attend only first day
              </p>
            </div>

            <h2 className="font-bold">
              <span>$</span>45.80
            </h2>

            <div className="card-pricing__footer">
              <Button>know more</Button>
            </div>
          </div>
        </div>
        <div
          className="faceR backR w-full h-full  bg-cover bg-center"
          style={{ backgroundImage: `url(${sub2})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-60 justify-evenly flex flex-col items-center">
            <h3 className="text-xl font-bold uppercase">what we offer</h3>
            <ul className="text-lg font-semibold">
              <li>Unlimited of Website</li>
              <li>Unlimited Disk Space</li>
              <li>Unlimited Bandwidth</li>
              <li>24/7/365 Support</li>
              <li>Unlimited Email Accounts</li>
              <li>99.9% Service Uptime</li>
            </ul>

            <Button>suscribe now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
