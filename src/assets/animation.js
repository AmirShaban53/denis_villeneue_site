export const staggerChildrenVar = {
  initial: {
    y: 0,
  },
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const wordVar = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

export const cardImage = {
  initial: { opacity: 0, x: "-100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
