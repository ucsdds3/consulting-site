
export const starVariants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  animate: {
    rotate: Array.from({ length: 360 }, (_, i) => i + 10),
    scale: [1, 1.1, 0.9, 1],
  },
};

export const AppearingVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};
