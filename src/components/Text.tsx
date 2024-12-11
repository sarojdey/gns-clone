const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className="text-gradient text-[3rem] uppercase font-bold shadow-white"
      style={{ textShadow: "white 3px -2px" }}
    >
      {children}
    </h1>
  );
};

export default Text;
