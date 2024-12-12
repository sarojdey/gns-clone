import * as React from "react";
import { cn } from "../lib/utils";

const AnimatedBorderCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("card-animated-border", className)}
      ref={ref}
      {...props}
    ></div>
  );
});

export default AnimatedBorderCard;
