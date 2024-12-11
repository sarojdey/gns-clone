import { motion } from "framer-motion";

const IndustryModal = ({ selected, setSelected }) => {
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer text-center overflow-hidden flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] mx-auto my-16 px-16 cursor-default"
      >
        <motion.div layoutId={`card-${selected?.id}`}>
          <img
            src={selected?.url}
            className="md:w-96 w-72  aspect-square m-auto"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-white p-4 md:w-96 m-auto"
        >
          <h4 className=" mb-2">{selected?.tags}</h4>
          <p className=" mb-2">{selected?.title}</p>
          <p className="my-4 text-xs">{selected?.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryModal;
