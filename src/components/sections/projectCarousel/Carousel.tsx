import React, { useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const CARDS = 10;
export const MAX_VISIBILITY = 3;

export const Card = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          className="carousal-nav carousal-left  text-4xl"
          onClick={() => setActive((i) => i - 1)}
        >
          <AiOutlineArrowLeft />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="carousal-nav carousal-right text-4xl"
          onClick={() => setActive((i) => i + 1)}
        >
          <AiOutlineArrowRight />
        </button>
      )}
    </div>
  );
};

export default Carousel;
