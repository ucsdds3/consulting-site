export const buttonVariants = {
  initial: {
    y: 0
  },
  hover: {
    y: "0.5rem"
  }
};
export const starVariants = {
  initial: {
    rotate: 0
  },
  animate: {
    rotate: Array.from({ length: 360 }, (_, i) => i + 10)
  }
};

export const AppearingVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
};
