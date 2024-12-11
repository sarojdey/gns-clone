import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className=" border-none text-lg outline-none rounded-full uppercase bg-gradient-to-r from-start via-mid  to-end font-bold transition duration-600 box-reflect hover:scale-95 "
    >
      {children}
    </button>
  );
};

export default Button;
