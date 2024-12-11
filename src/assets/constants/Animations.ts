import { Variants, Transition } from "framer-motion";

export const planetVariants = (direction: "left" | "right"): Variants => ({
  hidden: {
    x: direction === "left" ? "150%" : "-150%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: Transition["type"],
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const textVariant = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      duration: 1,
    },
  },
});

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: Transition["type"],
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren,
    },
  },
});

export const typingTextVariant: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const animationReveal: Variants = {
  hidden: { y: -30, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const animationY: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const animationYr: Variants = {
  hidden: { y: 250, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const animationX: Variants = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const animationXr: Variants = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const animationYSpring: Variants = {
  hidden: { y: -250, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      duration: 0.5,
      damping: 6,
      delay: 1.5,
    },
  },
};

export const animationZoom: Variants = {
  hidden: { transform: "scale(200%)", filter: "blur(10px)" },
  show: {
    transform: "scale(100%)",
    filter: "blur(0px)",
  },
};

export const animationSidebar: Variants = {
  hidden: { x: 400, opacity: 0 },
  show: { x: 0, opacity: 1 },
};
