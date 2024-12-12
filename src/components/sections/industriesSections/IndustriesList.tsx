import { motion } from "framer-motion";
import { industriesData } from "../../../assets/constants/data";
import { IndustryData } from "../../../assets/constants/data";
import Text from "../../Text";
const animationGrid = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
  },
};

const Card = ({
  setSelected,
  industriesData,
  delay,
}: {
  setSelected: React.Dispatch<React.SetStateAction<IndustryData | null>>;
  industriesData: IndustryData;
  delay: number;
}) => {
  return (
    <motion.div
      initial={"offScreen"}
      whileInView={"onScreen"}
      variants={animationGrid}
      transition={{ delay: delay * 0.03, duration: 0.5 }}
      className="inline-block w-full   mb-10 text-center space-y-5"
    >
      <motion.img
        whileHover={{
          scale: 1.125,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(industriesData);
        }}
        layoutId={`card-${industriesData.id}`}
        src={industriesData.url}
        className="w-full aspect-square bg-base-100 shadow-xl image-full cursor-pointer"
      />

      <div className="text-white uppercase font-semibold md:text-sm text-xs">
        {industriesData.tags}
      </div>
    </motion.div>
  );
};

const IndustriesList = ({
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<IndustryData | null>>;
}) => {
  return (
    <div className="p-10 bg-gradient-to-b from-[#2d2265] to-[#0e0928]">
      <div className="mb-10">
        {" "}
        <Text>industries we serve</Text>
      </div>
      <div className="columns-3 md:columns-4  row-auto md:gap-10 gap-2 ">
        {industriesData.map((industriesData, i) => (
          <Card
            key={industriesData.id}
            setSelected={setSelected}
            industriesData={industriesData}
            delay={i}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustriesList;
