import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const RootLayout = () => {
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();
  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
    exit: { x: "-100%" },
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      <div className="relative">
        <AnimatePresence>
          {sideBar && (
            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed h-screen  w-full bg-gradient-to-bl  from-[#2d2265] to-[#100b2b] z-40"
            >
              <ul className=" w-full h-full flex flex-col justify-center items-center gap-8">
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/");
                    setSideBar(false);
                  }}
                >
                  Home
                </li>
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/about");
                    setSideBar(false);
                  }}
                >
                  About
                </li>
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/service");
                    setSideBar(false);
                  }}
                >
                  Service
                </li>
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/product");
                    setSideBar(false);
                  }}
                >
                  Product
                </li>
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/industries");
                    setSideBar(false);
                  }}
                >
                  Industries
                </li>
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/blog");
                    setSideBar(false);
                  }}
                >
                  Blog
                </li>
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/career");
                    setSideBar(false);
                  }}
                >
                  Career
                </li>
                <li
                  className="hover:text-[#e6444f] cursor-pointer uppercase text-2xl font-extrabold"
                  onClick={() => {
                    navigate("/contact");
                    setSideBar(false);
                  }}
                >
                  Contact
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
