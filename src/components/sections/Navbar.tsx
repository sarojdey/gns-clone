import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/HSClogo.png";

import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar({
  sideBar,
  setSideBar,
}: {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();

  return (
    <nav className="flex  items-center justify-between py-2 px-5 fixed z-50 w-full backdrop-blur-md  ">
      <ul className="md:flex justify-center items-center gap-8 hidden">
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </li>
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/service");
          }}
        >
          Service
        </li>
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/product");
          }}
        >
          Product
        </li>
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/industries");
          }}
        >
          Industries
        </li>
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/blog");
          }}
        >
          Blog
        </li>
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/career");
          }}
        >
          Career
        </li>
        <li
          className="hover:text-[#e6444f] cursor-pointer uppercase"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </li>
      </ul>
      <div className="md:hidden">
        {!sideBar ? (
          <IoMenu
            style={{ fontSize: "2.5rem" }}
            onClick={() => {
              setSideBar(true);
            }}
          />
        ) : (
          <RxCross2
            style={{ fontSize: "2.5rem" }}
            onClick={() => {
              setSideBar(false);
            }}
          />
        )}
      </div>
      <img
        src={logo}
        alt="logo"
        className="w-12 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
    </nav>
  );
}

export default Navbar;
